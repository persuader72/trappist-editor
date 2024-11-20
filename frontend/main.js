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

import {
	DecoupledEditor, AccessibilityHelp, /*Alignment,*/ Autoformat, AutoImage, AutoLink, Autosave, BalloonToolbar, Bold, ClassicEditor, Code, CodeBlock, Essentials,
	FindAndReplace, /*FontBackgroundColor, FontColor, FontFamily, FontSize,*/ Heading, /*Highlight,*/ HorizontalLine, HtmlDataProcessor, ImageBlock,
    ImageCaption, ImageInline, ImageInsert, ImageInsertViaUrl, ImageResize, ImageStyle, ImageTextAlternative, ImageToolbar, ImageUpload,
	/*Indent, IndentBlock,*/ Italic, Link, LinkImage, List, /*ListProperties,*/ Markdown, /*Mention,*/ PageBreak, Paragraph, PasteFromMarkdownExperimental,
	PasteFromOffice, PendingActions, RemoveFormat, SelectAll, SimpleUploadAdapter, /*SourceEditing,*/ SpecialCharacters, SpecialCharactersArrows, SpecialCharactersCurrency,
	SpecialCharactersEssentials, SpecialCharactersLatin, SpecialCharactersMathematical, SpecialCharactersText, Strikethrough, Subscript, Superscript,
	Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, TextTransformation, Title, TodoList, Underline, Undo, WordCount
} from './ckeditor5/ckeditor5.js';

import translations from './ckeditor5/translations/it.js';

import { ImportMarkdown, SaveButton, ShowGallery } from './plugin.js';

const editorConfig = {
	autosave: {
		waitingTime: 30000,
		save(editor) {
			saveData(editor);
		}
	},
	plugins: [
		AccessibilityHelp, /*Alignment,*/ Autoformat, AutoImage, AutoLink, Autosave, BalloonToolbar, Bold, Code, CodeBlock, Essentials, FindAndReplace, 
		/*FontBackgroundColor, FontColor, FontFamily, FontSize,*/ Heading, /*Highlight,*/ HorizontalLine, ImageBlock, ImageCaption, ImageInline, ImageInsert,
		ImageInsertViaUrl, ImageResize, ImageStyle, ImageTextAlternative, ImageToolbar, ImageUpload, /*Indent, IndentBlock,*/ Italic, Link, LinkImage, List,
		/*ListProperties,*/ Markdown, /*Mention,*/ PageBreak, Paragraph, PasteFromMarkdownExperimental, PendingActions, PasteFromOffice, RemoveFormat,
		SelectAll, SimpleUploadAdapter, /*SourceEditing,*/ SpecialCharacters, SpecialCharactersArrows, SpecialCharactersCurrency, SpecialCharactersEssentials,
		SpecialCharactersLatin, SpecialCharactersMathematical, SpecialCharactersText, Strikethrough, Subscript, Superscript, Table, TableCaption,
		TableCellProperties, TableColumnResize, TableProperties, TableToolbar, TextTransformation, Title, TodoList, Underline, Undo, WordCount,
		ImportMarkdown, SaveButton, ShowGallery,
	],
	toolbar: {
		items: [
			'save', '|', 'undo', 'redo', '|', 'heading', /*'|', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',*/ '|', 'bold', 'italic', 'underline', '|',
			'link', 'insertImage', 'insertTable', /*'highlight',*/ 'codeBlock', '|', /*'alignment', '|',*/ 'bulletedList', 'numberedList', 'todoList',
			/*'outdent', 'indent'*/
			'|', 'importmarkdown', 'showgallery', /*'sourceEditing',*/
		],
		shouldNotGroupWhenFull: true
	},
	balloonToolbar: ['bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
	fontFamily: {
		supportAllValues: true
	},
	fontSize: {
		options: [10, 12, 14, 'default', 18, 20, 22],
		supportAllValues: true
	},
	heading: {
		options: [
			{
				model: 'paragraph',
				title: 'Paragraph',
				class: 'ck-heading_paragraph'
			},
			{
				model: 'heading1',
				view: 'h1',
				title: 'Heading 1',
				class: 'ck-heading_heading1'
			},
			{
				model: 'heading2',
				view: 'h2',
				title: 'Heading 2',
				class: 'ck-heading_heading2'
			},
			{
				model: 'heading3',
				view: 'h3',
				title: 'Heading 3',
				class: 'ck-heading_heading3'
			},
			{
				model: 'heading4',
				view: 'h4',
				title: 'Heading 4',
				class: 'ck-heading_heading4'
			},
			{
				model: 'heading5',
				view: 'h5',
				title: 'Heading 5',
				class: 'ck-heading_heading5'
			},
			{
				model: 'heading6',
				view: 'h6',
				title: 'Heading 6',
				class: 'ck-heading_heading6'
			}
		]
	},
	image: {
		toolbar: [
			'toggleImageCaption', 'imageTextAlternative', '|', 'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText',
			'|', 'resizeImage'
		]
	},
	initialData: '',
	language: 'it',
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file'
				}
			}
		}
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true
		}
	},
	menuBar: {
		isVisible: true
	},
	placeholder: 'Type or paste your content here!',
	table: {
		defaultHeadings: { rows: 1, columns: 0 },
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
	},
	translations: [translations]
};


let isDirty = false;
let editor = null;

let markdownDataProcessor = null;
let htmlDataProcessor = null;

/*command.execute( {
	imageType: 'imageBlock',
	source: imgSrc
} );*/

/*document.querySelector('#delImageButton').addEventListener('click', () => {
	let imgSrc = document.querySelector('#imageNameLabel').value
	location.href = "api/v1/image/del?filename=" + imgSrc;
});*/

document.querySelector('#insertImageButton').addEventListener('click', () => {
	let imgSrc = document.querySelector('#imageNameLabel').value
	if(imgSrc == "") {
		return;
	}

	editor.execute("insertImage", {
		alt: imgSrc,
		imageType: 'imageBlock',
		source: "media/" + imgSrc
	})
});

DecoupledEditor.create(document.querySelector('#editor'), editorConfig).then(editor => {
	document.querySelector('#editor-toolbar').appendChild(editor.ui.view.toolbar.element);
	document.querySelector('#editor-menu-bar').appendChild(editor.ui.view.menuBarView.element);
	return editor;
}).then(newEditor => {
	editor = newEditor;
	console.log(editor.commands)
	markdownDataProcessor = editor.data.processor;
	htmlDataProcessor = new HtmlDataProcessor(editor.data.viewDocument);
	editor.model.document.on( 'change:data', () => { isDirty = true; });

	let url = 'api/v1/document/get';
	fetch(url).then(res => res.json()).then(out => {
		editor.data.processor = htmlDataProcessor
		editor.setData(out.content)
	}).catch(err => {
		console.log(err);
	});

}).catch(error => {
	console.error(error);
});

function saveData(editor) {
	editor.data.processor = htmlDataProcessor;
	let data = editor.getData()
	fetch("api/v1/document/set", {
		method: "post",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({"name": "prova", "content": data})
	}).then((response) => {
		if(response.ok) {
			isDirty = false
		}
	}) 
}
