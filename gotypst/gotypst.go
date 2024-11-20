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

package gotypst

import (
	"errors"
	"fmt"
	"os"
	"os/exec"
	"strings"
)

/*
//go:embed assets.zip
var assets_zipped []byte

//go:embed fonts/*
var fonts_efs embed.FS
*/

var bin_path string

func init() {
	var err error
	bin_path, err = exec.LookPath("typst")
	if err != nil {
		return
	}
}

func RawExec(arg ...string) (string, error) {
	if len(bin_path) == 0 {
		return "", errors.New("typst executable not found")
	}
	outmesg := ""
	cmd := exec.Command(bin_path, arg...)
	b := new(strings.Builder)
	cmd.Stdout = b
	cmd.Stderr = b
	err := cmd.Start()
	outmesg += b.String()
	b.Reset()
	if err != nil {
		return outmesg, err
	}
	err = cmd.Wait()
	outmesg += b.String()
	b.Reset()
	if err != nil {
		return outmesg, err
	}
	outmesg += b.String()
	b.Reset()
	return outmesg, nil
}

func PDF(workDir string, inFile string, outFile string) error {
	os.Chdir(workDir)
	cmd := make([]string, 0)
	cmd = append(cmd, "compile")
	cmd = append(cmd, inFile)
	cmd = append(cmd, outFile)
	out, err := RawExec(cmd...)
	if err != nil {
		return fmt.Errorf("%v %v", out, err)
	}
	return nil
}
