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

import { ButtonView, Command, icons } from './ckeditor5/ckeditor5.js';


export function ShowGallery( editor ) {
    //console.log( 'ShowGallery plugin has been registered' );
    editor.commands.add( 'showgallery', new ShowGalleryCommand( editor ) );

    editor.ui.componentFactory.add( 'showgallery', ( locale ) => {
        const button = new ButtonView( locale );
        const command = editor.commands.get( 'showgallery' );
        const t = editor.t;
    
        button.set( {
            label: t('Galleria immagini'),
            withText: false,
            tooltip: true,
            icon: icons.image,
        } );

        button.on( 'execute', () => {
            //console.log("button executed");
            editor.execute( 'showgallery' );
            editor.editing.view.focus();
        } );
 
    
        button.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

        return button;
    } );
}

class ShowGalleryCommand extends Command {
    refresh() {
        this.isEnabled = true
        //const { document, schema } = this.editor.model;
        //const selection = document.selection;
        //console.log(selection.getAttributes());
        //const selectedElement = selection.getSelectedElement();
        //this.isEnabled = selectedElement && selectedElement.name === 'imageInline';        
    }

    execute() {
        var bsOffcanvas = new bootstrap.Offcanvas(document.querySelector('#offcanvas'))
        bsOffcanvas.toggle()
        //this.editor.execute( 'insertImage', { src: 'https://via.placeholder.com/150', alt: 'test' } );
        //console.log("ShowGalleryCommand executed")
    }
}

export function SaveButton(editor) {
    editor.commands.add('save', new SaveCommand(editor));

    editor.ui.componentFactory.add('save', (locale) => {
        const button = new ButtonView(locale);
        const command = editor.commands.get('save');
        const t = editor.t;

        button.set({
            label: t('Salva'),
            withText: false,
            keystroke: 'Ctrl+S',
            tooltip: true,
            icon: icons.check,
            className: 'ck-button-save',
        });

        button.on('execute', () => {
            editor.execute('save');
            editor.editing.view.focus();
        });

        button.bind('isEnabled').to(command, 'isEnabled');

        return button;
    });
}

class SaveCommand extends Command {
    refresh() {
        this.isEnabled = true;
    }

    execute() {
        // Implement your save logic here
        const data = this.editor.getData();
        console.log('Saving content:', data);
        // Add your save implementation (e.g., API call, event dispatch, etc.)
    }
}

export function ImportMarkdown(editor) {
    editor.commands.add('importmarkdown', new ImportMarkdownCommand(editor));

    editor.ui.componentFactory.add('importmarkdown', (locale) => {
        const button = new ButtonView(locale);
        const command = editor.commands.get('importmarkdown');
        const t = editor.t;

        button.set({
            label: t('Importa markdown'),
            withText: false,
            tooltip: true,
            icon: icons.importExport,
        });

        button.on('execute', () => {
            editor.execute('importmarkdown');
            editor.editing.view.focus();
        });

        button.bind('isEnabled').to(command, 'isEnabled');
        return button;
    });
}

class ImportMarkdownCommand extends Command {
    refresh() {
        this.isEnabled = true;
    }

    execute() {
        console.log('Importing markdown...');
    }
}