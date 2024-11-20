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
	"os"
	"path/filepath"
	"strings"
)

type FileMan struct {
	basePath string
	project  string
}

const (
	DocumentTypeNone = iota
	DocumentTypeMd   = iota
	DocumentTypeHtml = iota
)

type ProjectPair struct {
	Name       string
	Procedures []string
}

func (f *FileMan) getProjectsList() ([]ProjectPair, error) {
	list := []ProjectPair{}
	entries, err := os.ReadDir(f.basePath)
	if err != nil {
		return list, err
	}

	for _, e := range entries {
		if e.IsDir() && e.Name()[0] != '.' {
			pp := ProjectPair{Name: e.Name()}
			entries2, err := os.ReadDir(filepath.Join(f.basePath, e.Name()))
			if err != nil {
				return list, err
			}
			for _, e2 := range entries2 {
				if !e2.IsDir() && (filepath.Ext(e2.Name()) == ".html") {
					pp.Procedures = append(pp.Procedures, strings.TrimSuffix(e2.Name(), ".html"))
				}
			}
			list = append(list, pp)
		}
	}
	return list, nil
}

func (f *FileMan) getProject() string {
	return f.project
}

func (f *FileMan) setProject(project string) {
	f.project = project
}

func (f *FileMan) fullName(name string) string {
	return filepath.Join(f.basePath, f.project, name)
}

func (f *FileMan) nameExt(name string, exten string) string {
	return name + "." + exten
}

func (f *FileMan) dirList(path string) ([]string, error) {
	entries, err := os.ReadDir(filepath.Join(f.basePath, f.project, path))
	if err != nil {
		return []string{}, err
	}

	list := []string{}
	for _, e := range entries {
		list = append(list, e.Name())
	}
	return list, nil
}

func (f *FileMan) documentGet(name string, doctype int) ([]byte, error) {
	var err error

	switch doctype {
	case DocumentTypeMd:
		name = f.nameExt(name, "md")
	case DocumentTypeHtml:
		name = f.nameExt(name, "html")
	}

	_, err = os.Stat(f.fullName(name))
	if errors.Is(err, os.ErrNotExist) {
		return []byte{}, nil
	} else if err != nil {
		return []byte{}, err
	} else {
		var data []byte
		data, err = f.fileGet(name)
		if err == nil {
			return data, nil
		}
	}

	return []byte{}, err
}

func (f *FileMan) fileDel(filename string) error {
	path := filepath.Dir(filepath.Clean(filename))
	log.Println("delete path", filename, path)
	if path == "media" {
		return os.Remove(filepath.Join(f.basePath, f.project, filename))
	}
	return errors.New("invalid path " + filename)
}

func (f *FileMan) fileGet(path string) ([]byte, error) {
	data, err := os.ReadFile(filepath.Join(f.basePath, f.project, path))
	if err != nil {
		return []byte{}, err
	}
	return data, nil
}

func (f *FileMan) fileSet(path string, content []byte) error {
	err := os.WriteFile(filepath.Join(f.basePath, f.project, path), content, 0664)
	if err != nil {
		return err
	}
	return nil
}

func NewFileMan(basepath string) *FileMan {
	return &FileMan{basePath: basepath}
}
