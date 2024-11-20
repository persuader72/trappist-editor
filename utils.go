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
	"encoding/base64"
	"errors"
	"net/url"
	"text/template"
)

func b64Encode(decodedText string) string {
	plainText := []byte(url.QueryEscape(decodedText))
	b64text := base64.StdEncoding.EncodeToString(plainText)
	return b64text
}

func b64Decode(encodedText string) ([]byte, error) {
	b64Text := []byte(encodedText)
	plainText := make([]byte, base64.StdEncoding.DecodedLen(len(b64Text)))
	if _, err := base64.StdEncoding.Decode(plainText, b64Text); err != nil {
		return []byte{}, err
	}
	return plainText, nil
}

func tplFuncMap() template.FuncMap {
	return template.FuncMap{
		"dict": func(values ...interface{}) (map[string]interface{}, error) {
			if len(values)%2 != 0 {
				return nil, errors.New("invalid dict call")
			}
			dict := make(map[string]interface{}, len(values)/2)
			for i := 0; i < len(values); i += 2 {
				key, ok := values[i].(string)
				if !ok {
					return nil, errors.New("dict keys must be strings")
				}
				dict[key] = values[i+1]
			}
			return dict, nil
		},
	}
}
