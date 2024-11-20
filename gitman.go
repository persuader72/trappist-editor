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
	"log"

	"github.com/xanzy/go-gitlab"
)

type GitMan struct {
	git      *gitlab.Client
	token    string
	baseURL  string
	basePath string
}

func (g *GitMan) fileGet(path string) ([]byte, error) {
	opts := gitlab.GetFileOptions{Ref: gitlab.Ptr("main")}
	file, _, err := g.git.RepositoryFiles.GetFile("documents/procedureproduzione", path, &opts)
	if err != nil {
		return []byte{}, err
	}
	plainText, err := b64Decode(file.Content)
	if err != nil {
		return []byte{}, err
	}
	return plainText, nil

}

func (g *GitMan) init() {
	var err error
	g.git, err = gitlab.NewClient(g.token, gitlab.WithBaseURL(g.baseURL))
	if err != nil {
		log.Fatalf("Failed to create client: %v", err)
	}
	users, _, err := g.git.Users.ListUsers(&gitlab.ListUsersOptions{})
	if err != nil {
		log.Println(err)

	} else {
		log.Printf("Got %d users", len(users))
	}
}

func NewGitMan(token string, baseurl string, basepath string) *GitMan {
	return &GitMan{token: token, basePath: basepath}
}
