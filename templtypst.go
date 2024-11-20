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
	"os"
	"path/filepath"
	"strings"
)

func typGetTeamplatesList() ([]string, error) {
	entries, err := os.ReadDir("typst")
	if err != nil {
		return nil, err
	}

	tpls := []string{}
	for _, entry := range entries {
		if !entry.IsDir() {
			if filepath.Ext(entry.Name()) == ".typ" {
				tpls = append(tpls, strings.TrimSuffix(entry.Name(), ".typ"))
			}
		}

	}
	return tpls, nil
}
