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
	"errors"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"time"

	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"gopkg.in/yaml.v2"

	"siralab.com/testapp/gotypst"
)

const DEFAULT_PORT = 8080

type AppConfigHttp struct {
	Port int    `yaml:"port"`
	Addr string `yaml:"addr"`
}

type AppConfig struct {
	Http      AppConfigHttp `yaml:"http"`
	BasePath  string        `yaml:"basepath"`
	Project   string        `yaml:"project"`
	Procedure string        `yaml:"procedure"`
	Template  string        `yaml:"template"`
}

type DocGetReply struct {
	Type    string `json:"type"`
	Name    string `json:"name"`
	Content string `json:"content"`
}

type DocSetRequest struct {
	Name    string `json:"name"`
	Content string `json:"content"`
}

type DocActor struct {
	Name  string `yaml:"name"`
	Short string `yaml:"short"`
	Role  string `yaml:"role"`
	Email string `yaml:"email"`
}

type DocRevision struct {
	Number int    `yaml:"number"`
	Date   string `yaml:"date"`
	Author string `yaml:"author"`
	Text   string `yaml:"text"`
}

type DocFrontMatter struct {
	Title       string        `yaml:"title"`
	Subtitle    string        `yaml:"subtitle"`
	LastDate    time.Time     `yaml:"lastDate"`
	DocPN       string        `yaml:"docpn"`
	DocRevision string        `yaml:"docrev"`
	DocDate     string        `yaml:"docdate"`
	Mod         string        `yaml:"mod"`
	Actor1      DocActor      `yaml:"actor1"`
	Actor2      DocActor      `yaml:"actor2"`
	Actor3      DocActor      `yaml:"actor3"`
	Actor4      DocActor      `yaml:"actor4,omitempty"`
	Keywords    string        `yaml:"keywords"`
	Watermark   string        `yaml:"watermark"`
	Revisions   []DocRevision `yaml:"revisions"`
}

type RepBase struct {
	PageTitle string
	Project   string
	Procedure string
	Template  string
	Alert     string
	Error     string
}

type RepIndex struct {
	RepBase
	Projects []ProjectPair
}

type RepTemplate struct {
	RepBase
	Templates []string               `yaml:"templates"`
	Fields    map[string]interface{} `yaml:"fields"`
	Values    map[string]interface{} `yaml:"values"`
}

type RepEditor struct {
	RepBase
	Images []string
}

var config AppConfig
var fileMan *FileMan
var alertMessage string
var templatesList = []string{}

func makeRepBase(title string, alert string, err error) RepBase {
	_err := ""
	if err != nil {
		_err = err.Error()
	}
	return RepBase{PageTitle: title, Project: fileMan.getProject(), Procedure: config.Procedure, Template: config.Template, Alert: alert, Error: _err}
}

func replyError(c *gin.Context, err error) {
	c.HTML(http.StatusOK, "error.html", makeRepBase("Operation error", "", err))
}

func handleCommon(c *gin.Context) {
	_template, err := c.Cookie("template")
	if err == nil && _template != "" {
		config.Template = _template
	}

	_procedure, err := c.Cookie("procedure")
	if err == nil && _procedure != "" {
		config.Procedure = _procedure
	}
	_procedure = c.Query("procedure")
	if _procedure != "" {
		config.Procedure = _procedure
		c.SetCookie("procedure", _procedure, 0, "/", "", false, false)
	}
}

func handleIndexGet(c *gin.Context) {
	projects, err := fileMan.getProjectsList()
	if err != nil {
		replyError(c, err)
		return
	}

	rep := RepIndex{RepBase: makeRepBase("Index", "", nil), Projects: projects}
	c.HTML(http.StatusOK, "index.html", rep)
}

func handleEditorGet(c *gin.Context) {
	handleCommon(c)
	files, err := fileMan.dirList("media")
	if err != nil {
		replyError(c, err)
		return
	}

	rep := RepEditor{RepBase: makeRepBase("Editor", "", nil), Images: files}
	c.HTML(http.StatusOK, "editor.html", rep)
}

func handleTemplateGet(c *gin.Context) {
	handleCommon(c)
	tplFields := make(map[string]interface{})
	content, err := os.ReadFile(filepath.Join("typst", config.Template+".yaml"))
	if err != nil {
		replyError(c, err)
		return
	}
	err = yaml.Unmarshal(content, &tplFields)
	if err != nil {
		replyError(c, err)
		return
	}

	content, err = fileMan.fileGet(fileMan.nameExt(config.Procedure, "yaml"))
	if errors.Is(err, os.ErrNotExist) {
		content = []byte{}
	} else if err != nil {
		replyError(c, err)
		return
	}

	var tplData map[string]interface{}
	//var fm DocFrontMatter
	err = yaml.Unmarshal(content, &tplData)
	if err != nil {
		replyError(c, err)
		return
	}

	var rep RepTemplate
	rep.RepBase = makeRepBase("Template editor", alertMessage, nil)
	rep.Templates = templatesList
	rep.Fields = tplFields
	rep.Values = tplData
	//rep.DocFrontMatter = fm
	c.HTML(http.StatusOK, "template.html", rep)
	alertMessage = ""
}

func handleTemplateSet(c *gin.Context) {
	handleCommon(c)
	content, err := os.ReadFile(filepath.Join("typst", config.Template+".yaml"))
	if err != nil {
		replyError(c, err)
		return
	}

	tplFields := make(map[string]interface{})
	err = yaml.Unmarshal(content, &tplFields)
	if err != nil {
		replyError(c, err)
		return
	}

	content, err = fileMan.fileGet(fileMan.nameExt(config.Procedure, "yaml"))
	if errors.Is(err, os.ErrNotExist) {
		content = []byte{}
	} else if err != nil {
		replyError(c, err)
		return
	}

	var fm map[string]interface{}
	err = yaml.Unmarshal(content, &fm)
	if err != nil {
		replyError(c, err)
		return
	}
	if fm == nil {
		fm = make(map[string]interface{})
	}

	tplFields2 := tplFields["args"].([]interface{})
	for _, v := range tplFields2 {
		switch vv := v.(type) {
		case map[interface{}]interface{}:
			key := vv["key"].(string)
			_type := vv["type"].(string)
			if _type == "group" {
				subTpl2Fields := vv["fields"].([]interface{})
				for _, v2 := range subTpl2Fields {
					switch vv2 := v2.(type) {
					case map[interface{}]interface{}:
						key2 := vv2["key"].(string)
						variable2 := vv2["variable"].(string)
						if _, ok := fm[key]; !ok {
							fm[key] = make(map[interface{}]interface{})
						}
						val := fm[key].(map[interface{}]interface{})
						val[key2] = c.PostForm("input" + variable2)
						log.Println("level1", key2, variable2)
					}
				}
			} else {
				variable := vv["variable"].(string)
				fm[key] = c.PostForm("input" + variable)
			}
		}
	}

	log.Println(fm)

	buffer, err := yaml.Marshal(&fm)
	if err != nil {
		replyError(c, err)
		return
	}

	err = fileMan.fileSet(fileMan.nameExt(config.Procedure, "yaml"), buffer)
	if err != nil {
		replyError(c, err)
		return
	}

	alertMessage = "Frontmatter template updated"
	handleTemplateGet(c)
}

func handlePrintGet(c *gin.Context) {
	handleCommon(c)
	c.HTML(http.StatusOK, "print.html", makeRepBase("Print document", "", nil))
}

func handlePrintSet(c *gin.Context) {
	handleCommon(c)
	err := htmlToTypst(
		fileMan.fullName(""),
		fileMan.nameExt(config.Procedure, "html"),
		fileMan.nameExt(config.Procedure, "yaml"),
		fileMan.nameExt(config.Procedure, "typ"),
		config.Template)
	if err != nil {
		replyError(c, err)
		return
	}

	pdffilename := fileMan.nameExt(config.Procedure, "pdf")
	err = gotypst.PDF(fileMan.fullName(""), fileMan.nameExt(config.Procedure, "typ"), pdffilename)
	if err != nil {
		replyError(c, err)
		return
	}

	// Check if the file exists
	_, err = os.Stat(fileMan.fullName(pdffilename))
	if err != nil {
		replyError(c, err)
		return
	}

	c.Header("Content-Description", "File Transfer")
	c.Header("Content-Transfer-Encoding", "binary")
	c.Header("Content-Disposition", "attachment; filename="+pdffilename)
	c.Header("Content-Type", "application/pdf")
	c.Header("Content-Length", "0")

	if _, err := os.Stat(pdffilename); err != nil {
		replyError(c, err)
	}
	c.File(fileMan.fullName(pdffilename))
}

func loadConfig() error {
	var err error
	if _, err = os.Stat("config.yaml"); err == nil {
		var buffer []byte
		if buffer, err = os.ReadFile("config.yaml"); err == nil {
			err = yaml.Unmarshal(buffer, &config)
		}
	}
	if err == nil {
		if config.Http.Port == 0 {
			config.Http.Port = DEFAULT_PORT
		}
	}
	return err
}

func main() {
	err := loadConfig()
	if err != nil {
		log.Fatal(err)
	}

	templatesList, err = typGetTeamplatesList()
	if err != nil {
		log.Fatal(err)
	}

	fileMan = NewFileMan(config.BasePath)
	fileMan.setProject(config.Project)

	router := gin.Default()
	router.SetFuncMap(tplFuncMap())
	router.LoadHTMLGlob("./frontend/templates/*")
	router.Use(static.Serve("/", static.LocalFile("./frontend", false)))

	router.GET("/editor", handleEditorGet)

	router.GET("/template", handleTemplateGet)
	router.POST("/template", handleTemplateSet)
	router.GET("/print", handlePrintGet)
	router.POST("/print", handlePrintSet)
	router.GET("/index", handleIndexGet)

	v1 := router.Group("/api/v1")
	{
		proc := v1.Group("document")
		proc.GET("/get", func(ctx *gin.Context) {
			content, err := fileMan.documentGet(config.Procedure, DocumentTypeHtml)
			if err != nil {
				ctx.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
			} else {
				reply := DocGetReply{Type: "html", Name: config.Procedure + ".html", Content: string(content)}
				ctx.AsciiJSON(http.StatusOK, reply)
			}
		})
		proc.GET("/getmd", func(ctx *gin.Context) {
			content, err := fileMan.documentGet(config.Procedure, DocumentTypeMd)
			if err != nil {
				ctx.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
			} else {
				reply := DocGetReply{Type: "md", Name: config.Procedure + ".md", Content: string(content)}
				ctx.AsciiJSON(http.StatusOK, reply)
			}
		})
		proc.POST("/set", func(ctx *gin.Context) {
			var r DocSetRequest
			if err := ctx.ShouldBindJSON(&r); err != nil {
				ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
				return
			}
			err := fileMan.fileSet(config.Procedure+".html", []byte(r.Content))
			if err != nil {
				ctx.Error(err)
			}
			ctx.JSON(http.StatusOK, &DocGetReply{Name: "pippo", Content: ""})
		})

		proc = v1.Group("image")
		proc.GET("/del", func(ctx *gin.Context) {
			filename := ctx.Query("filename")
			err := fileMan.fileDel("media/" + filename)
			if err != nil {
				replyError(ctx, err)
				return
			}
			ctx.Redirect(http.StatusOK, "/editor")
		})
	}

	router.GET("/media/:filename", func(ctx *gin.Context) {
		filename := ctx.Param("filename")
		content, err := fileMan.fileGet("media/" + filename)
		if err != nil {
			ctx.Error(err)
		} else {
			ctx.Writer.Write([]byte(content))
		}
		ctx.String(200, "OK")
	})

	router.GET("/api/v1/ping", func(ctx *gin.Context) {
		ctx.String(200, "Ping")
	})

	router.GET("document")
	router.Run(config.Http.Addr + ":" + strconv.Itoa(config.Http.Port))
}
