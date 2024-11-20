/*
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

This file incorporates work covered by the following copyright and permission notice:
Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
*/

package main

import (
	"bytes"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"text/template"

	"golang.org/x/net/html"
)

var isInFigure bool = false
var isInPageBreak bool = false
var currentTable int = 0
var columnsOfTables []int
var typstFileWriter *os.File

func captureAttributes(n *html.Node, attr1 string, var1 *string, attr2 string, var2 *string) {
	for _, attr := range n.Attr {
		if attr.Key == attr1 {
			*var1 = attr.Val
		} else if attr2 != "" && attr.Key == attr2 {
			*var2 = attr.Val
		}
	}
}

func writeIndent(indent int) {
	if indent > 0 {
		for range indent {
			typstFileWriter.Write([]byte{' ', ' '})
		}
	}
}

func handleHeading(level int, _ *html.Node, enter bool) {
	if enter {
		typstFileWriter.Write(append(bytes.Repeat([]byte{'='}, level), ' '))
	} else {
		typstFileWriter.Write([]byte{'\n'})
	}
}

func handleUnderline(_ *html.Node, enter bool) {
	if enter {
		typstFileWriter.Write([]byte("#underline["))
	} else {
		typstFileWriter.Write([]byte{']'})
	}
}

func handleParagraph(_ *html.Node, enter bool) {
	if !enter {
		typstFileWriter.Write([]byte{'\n', '\n'})
	}
}

func handleListItem(_ *html.Node, enter bool) {
	if enter {
		typstFileWriter.Write([]byte{'-', ' '})
	} else {
		typstFileWriter.Write([]byte{'\n'})
	}
}

func handleBulletList(_ *html.Node, enter bool) {
	if enter {
		typstFileWriter.Write([]byte{'\n'})
	} else {
		typstFileWriter.Write([]byte{'\n'})
	}
}

func handleLink(n *html.Node, enter bool) {
	if enter {
		var href string
		for _, attr := range n.Attr {
			if attr.Key == "href" {
				href = attr.Val
			}
		}
		typstFileWriter.Write([]byte(fmt.Sprintf("#link(\"%s\")[", href)))
	} else {
		typstFileWriter.Write([]byte{']'})
	}
}

func handleCode(n *html.Node, enter bool) {
	if enter {
		var class string
		for _, attr := range n.Attr {
			if attr.Key == "class" {
				class = attr.Val[9:]
			}
		}

		typstFileWriter.Write([]byte(fmt.Sprintf("```%s\n", class)))
	} else {
		typstFileWriter.Write([]byte{'\n', '`', '`', '`', '\n'})
	}
}

func handleHorizontalLine(_ *html.Node, enter bool) {
	if enter {
		typstFileWriter.Write([]byte("#line(length: 100%)"))
	}
}

func writeImage(indent int, hash bool, file string, alt string) {
	writeIndent(indent)
	if hash {
		typstFileWriter.Write([]byte{'#'})
	}
	typstFileWriter.Write([]byte{'i', 'm', 'a', 'g', 'e', '(', '"'})
	typstFileWriter.Write([]byte(file))
	typstFileWriter.Write([]byte{'"'})
	if len(alt) > 0 {
		typstFileWriter.Write([]byte{',', 'a', 'l', 't', ':', '"'})
		typstFileWriter.Write([]byte(alt))
		typstFileWriter.Write([]byte{'"'})
	}
	typstFileWriter.Write([]byte{')'})
	if !hash {
		typstFileWriter.Write([]byte{','})
	}
	typstFileWriter.Write([]byte{'\n'})
}

func handleImg(n *html.Node, enter bool) {
	if enter {
		var hash bool = true
		var indent int = 0
		var src string
		var alt string
		if isInFigure {
			hash = false
			indent = 1
		}
		for _, attr := range n.Attr {
			if attr.Key == "src" {
				src = attr.Val
			}
			if attr.Key == "class" {
				alt = attr.Val
			}
		}
		writeImage(indent, hash, src, alt)
	}
}

func preHandleTable(_ *html.Node, enter bool) {
	if enter {
		columnsOfTables = append(columnsOfTables, 0)
		//log.Print(columnsOfTables)
	}
}

func handleTable(_ *html.Node, enter bool) {
	if enter {
		if !isInFigure {
			typstFileWriter.Write([]byte{'#'})
		}
		typstFileWriter.Write([]byte(fmt.Sprintf("table(\n  columns: %d,\n", columnsOfTables[currentTable])))

	} else {
		currentTable += 1
		typstFileWriter.Write([]byte{')'})
		if isInFigure {
			typstFileWriter.Write([]byte{','})
		}
		typstFileWriter.Write([]byte{'\n', '\n'})
	}
}

func handleTableHeaderRow(_ *html.Node, enter bool) {
	if enter {
		typstFileWriter.Write([]byte("  table.header(\n"))
	} else {
		typstFileWriter.Write([]byte("  ),\n"))
	}
}

func handleTableBody(_ *html.Node, _ bool) {

}

func preHandleTableHeaderCell(_ *html.Node, enter bool) {
	if enter {
		columnsOfTables[len(columnsOfTables)-1] += 1
	}
}

func handleTableHeaderCell(_ *html.Node, enter bool) {
	if enter {
		typstFileWriter.Write([]byte("    ["))
	} else {
		typstFileWriter.Write([]byte("],\n"))
	}
}

func handleTableRow(_ *html.Node, _ bool) {
}

func handleTableCell(_ *html.Node, enter bool) {
	if enter {
		typstFileWriter.Write([]byte("  ["))
	} else {
		typstFileWriter.Write([]byte("],\n"))
	}
}

func handleFigure(_ *html.Node, enter bool) {
	if enter {
		isInFigure = true
		typstFileWriter.Write([]byte("#figure(\n"))
	} else {
		typstFileWriter.Write([]byte(")\n"))
		isInFigure = false
	}
}

func handleFigcaption(_ *html.Node, enter bool) {
	if !isInFigure {
		return
	}
	if enter {
		writeIndent(1)
		typstFileWriter.Write([]byte("caption: ["))
	} else {
		writeIndent(1)
		typstFileWriter.Write([]byte("],\n"))
	}
}

func handleStrong(_ *html.Node, enter bool) {
	if enter {
		typstFileWriter.Write([]byte{'*'})
	} else {
		typstFileWriter.Write([]byte{'*'})
	}
}

func handleEmphasis(_ *html.Node, enter bool) {
	if enter {
		typstFileWriter.Write([]byte{'_'})
	} else {
		typstFileWriter.Write([]byte{'_'})
	}
}

func handleDiv(n *html.Node, enter bool) {
	var pageBreak bool = false
	var class string = ""
	captureAttributes(n, "class", &class, "", nil)
	if class == "page-break" {
		pageBreak = true
	} else {

	}

	if pageBreak {
		if enter {
			isInPageBreak = true
		} else {
			typstFileWriter.Write([]byte("#pagebreak()\n\n"))
			isInPageBreak = false
		}

	}
}

func documentNode(n *html.Node) {
	log.Printf("Starting document %s", n.Data)
}

func elementNode(phase int, n *html.Node, enter bool) {

	if phase == 0 {
		switch n.Data {
		case "table":
			preHandleTable(n, enter)
		case "th":
			preHandleTableHeaderCell(n, enter)
		}
	}

	if phase == 1 {
		switch n.Data {
		case "h1":
			handleHeading(1, n, enter)
		case "h2":
			handleHeading(2, n, enter)
		case "h3":
			handleHeading(3, n, enter)
		case "h4":
			handleHeading(4, n, enter)
		case "h5":
			handleHeading(5, n, enter)
		case "h6":
			handleHeading(6, n, enter)
		case "h7":
			handleHeading(7, n, enter)
		case "h8":
			handleHeading(8, n, enter)
		case "u":
			handleUnderline(n, enter)
		case "p":
			handleParagraph(n, enter)
		case "li":
			handleListItem(n, enter)
		case "ul":
			handleBulletList(n, enter)
		case "a":
			handleLink(n, enter)
		case "code":
			handleCode(n, enter)
		case "hr":
			handleHorizontalLine(n, enter)
		case "img":
			handleImg(n, enter)
		case "table":
			handleTable(n, enter)
		case "thead":
			handleTableHeaderRow(n, enter)
		case "tbody":
			handleTableBody(n, enter)
		case "tr":
			handleTableRow(n, enter)
		case "th":
			handleTableHeaderCell(n, enter)
		case "td":
			handleTableCell(n, enter)
		case "figure":
			handleFigure(n, enter)
		case "figcaption":
			handleFigcaption(n, enter)
		case "b":
			handleStrong(n, enter)
		case "strong":
			handleStrong(n, enter)
		case "i":
			handleEmphasis(n, enter)
		case "div":
			handleDiv(n, enter)
		default:
			log.Printf("Element \"%s\" Enter %v", n.Data, enter)
		}
	}
}

func textNode(phase int, node *html.Node, enter bool) {
	if phase != 1 {
		return
	}
	if enter {
		if !isInPageBreak {
			typstFileWriter.Write([]byte(node.Data))
		}
	}
}

func traverseHtml(phase int, node *html.Node) {
	switch node.Type {
	case html.DocumentNode:
		documentNode(node)
	case html.ElementNode:
		elementNode(phase, node, true)
	case html.TextNode:
		textNode(phase, node, true)
	default:
		log.Printf("Node type %d", node.Type)
	}

	for c := node.FirstChild; c != nil; c = c.NextSibling {
		traverseHtml(phase, c)
	}

	switch node.Type {
	case html.DocumentNode:
		documentNode(node)
	case html.ElementNode:
		elementNode(phase, node, false)
	case html.TextNode:
		textNode(phase, node, false)
	}
}

func htmlToTypst(workdir string, filein string, fileyaml string, fileout string, tplhead string) error {
	f, err := os.Open(filepath.Join(workdir, filein))
	if err != nil {
		return err
	}

	currentTable = 0
	columnsOfTables = []int{}
	doc, err := html.Parse(f)
	if err != nil {
		return err
	}

	typstFileWriter, err = os.Create(filepath.Join(workdir, fileout))
	if err != nil {
		return err
	}
	defer typstFileWriter.Close()

	dochead, err := os.ReadFile(filepath.Join("typst", tplhead+".typ"))
	if err != nil {
		return err
	}

	var tplOut bytes.Buffer
	templ := template.New("typst")
	//templ = templ.Funcs(template.FuncMap{"int": func(v time.Month) int { return int(v) }})
	templateHeader, err := templ.Parse(string(dochead))

	if err != nil {
		return err
	} else {
		err = templateHeader.Execute(&tplOut, struct{ YamlConf string }{YamlConf: fileyaml})
		if err != nil {
			return err
		} else {
			typstFileWriter.Write(tplOut.Bytes())
		}
	}

	traverseHtml(0, doc)
	traverseHtml(1, doc)
	err = os.WriteFile(filein+".out.html", []byte(filein), 0664)
	return err
}
