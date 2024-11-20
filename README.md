# Trappist Editor

![Trappist Editor](icon.png)

Trappist editor is a simple text editor that uses CKEditor as WYSIWYG editor and Typst to render the text in PDF.

## Disclaimer

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied 
warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 

This program is stil under early development and is not yet ready for production use. *Do not run this program with 
its web server exposed on public internet beacuse the input requests are not sanitized yet*.
The program lacks lacks a lot of features particularly an authentication mechanism.

## Requirements

- Go 1.22.x
- Typst 0.12.0

Typst must be installed on your systems ad it's executable must be accesible by the program. A working go toolchain is also required.

## Running the program

Compile the program using `go build -o 'trappist-editor' .` and run it using `./trappist-editor`. 
Launch the web server with the following url: http://localhost:8080.

## Attributions

- [Typst](https://github.com/typst/typst)
- [Go](https://go.dev/)
- [CKEditor](https://ckeditor.com/)
- [GoTypst](https://github.com/typst/gotypst)
- [NASA/JPL-Caltech, Public domain, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Trappist-1_system_with_planets_and_moons.png)

## License

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

