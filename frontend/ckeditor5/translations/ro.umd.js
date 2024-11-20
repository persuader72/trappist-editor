/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'ro' ]: { dictionary, getPluralForm } } = {"ro":{"dictionary":{"Words: %0":"Cuvinte: %0","Characters: %0":"Caractere: %0","Widget toolbar":"Bară widget","Insert paragraph before block":"Inserează un paragraf înaintea blocului","Insert paragraph after block":"Inserează un paragraf după bloc","Press Enter to type after or press Shift + Enter to type before the widget":"Apăsați Enter pentru a scrie după widget sau Shift+Enter pentru a scrie înaintea acestuia","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Comenzi din tastatură care pot fi utilizate atunci când este selectat un widget (de exemplu: imagine, tabel etc.)","Insert a new paragraph directly after a widget":"Inserează un nou paragraf direct după un widget","Insert a new paragraph directly before a widget":"Inserează un nou paragraf direct înaintea unui widget","Move the caret to allow typing directly before a widget":"Mută cursorul pentru a permite tastarea direct înaintea unui widget","Move the caret to allow typing directly after a widget":"Mută cursorul pentru a permite tastarea direct după un widget","Move focus from an editable area back to the parent widget":"Mutați centrul de interes dintr-o zonă editabilă înapoi la widgetul părinte","Upload in progress":"Încărcare în curs","Undo":"Anulare","Redo":"Revenire","Rich Text Editor":"Editor de text","Edit block":"Editează bloc","Click to edit block":"Faceți clic pentru a edita întreg blocul","Drag to move":"Glisați pentru a muta","Next":"Înainte","Previous":"Înapoi","Editor toolbar":"Bară editor","Dropdown toolbar":"Bară listă opțiuni","Dropdown menu":"Meniu derulant","Black":"Negru","Dim grey":"Gri slab","Grey":"Gri","Light grey":"Gri deschis","White":"Alb","Red":"Roșu","Orange":"Portocaliu","Yellow":"Galben","Light green":"Verde deschis","Green":"Verde","Aquamarine":"Acvamarin","Turquoise":"Turcoaz","Light blue":"Albastru deschis","Blue":"Albastru","Purple":"Violet","Editor block content toolbar":"Bară de instrumente editor pentru blocuri de conținut","Editor contextual toolbar":"Bară contextuală de instrumente editor","HEX":"HEX","No results found":"Nu au fost găsite rezultate","No searchable items":"Nu există elemente ce pot fi căutate","Editor dialog":"Dialog editor","Close":"Închideți","Help Contents. To close this dialog press ESC.":"Conținutul de asistență. Apăsați ESC pentru a închide acest dialog.","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Mai jos puteți găsi o listă de comenzi rapide de tastatură care pot fi utilizate în editor.","(may require <kbd>Fn</kbd>)":"(poate fi necesar să apăsați <kbd>Fn</kbd>)","Accessibility":"Accesibilitate","Accessibility help":"Ajutor pentru accesibilitate","Press %0 for help.":"Apăsați %0] pentru ajutor.","Move focus in and out of an active dialog window":"Comutează focalizarea într-o fereastră de dialog activă și în afara acesteia","MENU_BAR_MENU_FILE":"Fișier","MENU_BAR_MENU_EDIT":"Editează","MENU_BAR_MENU_VIEW":"Vizualizare","MENU_BAR_MENU_INSERT":"Inserează","MENU_BAR_MENU_FORMAT":"Formatare","MENU_BAR_MENU_TOOLS":"Instrumente","MENU_BAR_MENU_HELP":"Ajutor","MENU_BAR_MENU_TEXT":"Text","MENU_BAR_MENU_FONT":"Font","Editor menu bar":"Bara de meniuri a editorului","Please enter a valid color (e.g. \"ff0000\").":"Vă rugăm să introduceți un cod de culoare valid (de ex., „ff0000”).","Insert table":"Inserează tabel","Header column":"Antet coloană","Insert column left":"Inserează coloană la stânga","Insert column right":"Inserează coloană la dreapta","Delete column":"Șterge coloană","Select column":"Selectează coloana","Column":"Coloană","Header row":"Rând antet","Insert row below":"Inserează rând dedesubt","Insert row above":"Inserează rând deasupra","Delete row":"Șterge rând","Select row":"Selectează linia","Row":"Rând","Merge cell up":"Îmbină celula în sus","Merge cell right":"Îmbină celula la dreapta","Merge cell down":"Îmbină celula în jos","Merge cell left":"Îmbină celula la stânga","Split cell vertically":"Scindează celula pe verticală","Split cell horizontally":"Scindează celula pe orizontală","Merge cells":"Îmbină celulele","Table toolbar":"Bară tabel","Table properties":"Proprietățile tabelei","Cell properties":"Proprietățile celulei","Border":"Bordură","Style":"Stil","Width":"Lungime","Height":"Înălțime","Color":"Culoare","Background":"Fundal","Padding":"Spațiere","Dimensions":"Dimensiuni","Table cell text alignment":"Alinierea textului celulei tabelei","Alignment":"Aliniere","Horizontal text alignment toolbar":"Toolbar aliniere text orizontală","Vertical text alignment toolbar":"Toolbar aliniere text verticală","Table alignment toolbar":"Toolbar aliniere tabelă","None":"Nimic","Solid":"Solidă","Dotted":"Punctată","Dashed":"Linii întrerupte","Double":"Dublă","Groove":"Groove","Ridge":"Crestată","Inset":"Inserează","Outset":"Elimină","Align cell text to the left":"Alinează textul celulei la stânga","Align cell text to the center":"Alinează textul celulei la centru","Align cell text to the right":"Alinează textul celulei la dreapta","Justify cell text":"Textul celulei justify","Align cell text to the top":"Alinează textul celulei sus","Align cell text to the middle":"Alinează textul celulei la mijloc","Align cell text to the bottom":"Alinează textul celulei jos","Align table to the left":"Alinează tabela la stânga","Center table":"Tabelă centrată","Align table to the right":"Alinează tabela la dreapta","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"Culoarea este invalidă. Încearcă \"#FF0000\" sau \"rgb(255,0,0)\" sau \"red\".","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"Valoarea este invalidă. Încearcă \"10px\" sau \"2em\" sau simplu \"2\".","Enter table caption":"Adaugă subtitlul tabelei","Keystrokes that can be used in a table cell":"Comenzi din tastatură care pot fi utilizate într-o celulă de tabel","Move the selection to the next cell":"Mută selecția în următoarea celulă","Move the selection to the previous cell":"Mută selecția în celula anterioară","Insert a new table row (when in the last cell of a table)":"Inserează un nou rând de tabel (când poziția activă este în ultima celulă a unui tabel)","Navigate through the table":"Navigare în tabel","Table":"Tabel","Styles":"Stiluri","Multiple styles":"Stiluri multiple","Block styles":"Stiluri pentru blocuri","Text styles":"Stiluri pentru text","Special characters":"Caractere speciale","Category":"Categorie","All":"Toate","Arrows":"Săgeți","Currency":"Monedă","Latin":"Latină","Mathematical":"Matematic","Text":"Text","leftwards simple arrow":"săgeată simplă spre stânga","rightwards simple arrow":"săgeată simplă spre dreapta","upwards simple arrow":"săgeată simplă în sus","downwards simple arrow":"săgeată simplă în jos","leftwards double arrow":"săgeată dublă spre stânga","rightwards double arrow":"săgeată dublă spre dreapta","upwards double arrow":"săgeată dublă în sus","downwards double arrow":"săgeată dublă în jos","leftwards dashed arrow":"săgeată la stânga cu linie întreruptă","rightwards dashed arrow":"săgeată la dreapta cu linie întreruptă","upwards dashed arrow":"săgeată în sus cu linie întreruptă","downwards dashed arrow":"săgeată în jos cu linie întreruptă","leftwards arrow to bar":"săgeată la stânga spre bară","rightwards arrow to bar":"săgeată la dreapta spre bară","upwards arrow to bar":"săgeată în sus spre bară","downwards arrow to bar":"săgeată în jos spre bară","up down arrow with base":"săgeată în sus și în jos cu linie de bază","back with leftwards arrow above":"înapoi cu săgeată spre stânga deasupra","end with leftwards arrow above":"sfârșit cu săgeată spre stânga deasupra","on with exclamation mark with left right arrow above":"„on” cu semn de exclamare și săgeată spre stânga deasupra","soon with rightwards arrow above":"„soon” cu săgeată spre dreapta deasupra","top with upwards arrow above":"„top” cu săgeată în sus deasupra","Dollar sign":"Simbolul dolarului","Euro sign":"Simbolul euro","Yen sign":"Simbolul yenului","Pound sign":"Simbolul lirei sterline","Cent sign":"Simbolul pentru cent","Euro-currency sign":"Simbolul monedei euro","Colon sign":"Două puncte","Cruzeiro sign":"Simbolul pentru cruzeiro","French franc sign":"Simbolul pentru francul francez","Lira sign":"Simbolul pentru liră","Currency sign":"Simbolul pentru valută","Bitcoin sign":"Simbolul pentru Bitcoin","Mill sign":"Simbolul pentru mill","Naira sign":"Simbolul pentru naira","Peseta sign":"Simbolul pentru peseta","Rupee sign":"Simbolul pentru rupie","Won sign":"Simbolul pentru won","New sheqel sign":"Simbolul pentru shekelul nou","Dong sign":"Simbolul pentru dong","Kip sign":"Simbolul pentru kip","Tugrik sign":"Simbolul pentru tugrik","Drachma sign":"Simbolul pentru drahmă","German penny sign":"Simbolul pentru pfenigul german","Peso sign":"Simbolul pentru peso","Guarani sign":"Simbolul pentru guarani","Austral sign":"Simbolul pentru austral","Hryvnia sign":"Simbolul pentru grivnă (hrivnă)","Cedi sign":"Simbolul pentru cedi","Livre tournois sign":"Simbolul pentru livra tournois","Spesmilo sign":"Simbolul pentru spesmilo","Tenge sign":"Simbolul pentru tenge","Indian rupee sign":"Simbolul pentru rupia indiană","Turkish lira sign":"Simbolul pentru lira turcească","Nordic mark sign":"Simbolul pentru marca nordică","Manat sign":"Simbolul pentru manat","Ruble sign":"Simbolul pentru rublă","Latin capital letter a with macron":"Litera A majusculă cu macron","Latin small letter a with macron":"Litera A minusculă cu macron","Latin capital letter a with breve":"Litera A majusculă cu breve („căciulă”)","Latin small letter a with breve":"Litera A minusculă cu breve („căciulă”)","Latin capital letter a with ogonek":"Litera A majusculă cu codiță (ogonek)","Latin small letter a with ogonek":"Litera A minusculă cu codiță (ogonek)","Latin capital letter c with acute":"Litera C majusculă cu accent ascuțit","Latin small letter c with acute":"Litera C minusculă cu accent ascuțit","Latin capital letter c with circumflex":"Litera C majusculă cu accent circumflex","Latin small letter c with circumflex":"Litera C minusculă cu accent circumflex","Latin capital letter c with dot above":"Litera C majusculă cu punct deasupra","Latin small letter c with dot above":"Litera C minusculă cu punct deasupra","Latin capital letter c with caron":"Litera C majusculă cu caron (circumflex inversat)","Latin small letter c with caron":"Litera C minusculă cu caron (circumflex inversat)","Latin capital letter d with caron":"Litera D majusculă cu caron (circumflex inversat)","Latin small letter d with caron":"Litera D minusculă cu caron (circumflex inversat)","Latin capital letter d with stroke":"Litera D barată majusculă","Latin small letter d with stroke":"Litera D barată minusculă","Latin capital letter e with macron":"Litera E majusculă cu macron","Latin small letter e with macron":"Litera E minusculă cu macron","Latin capital letter e with breve":"Litera E majusculă cu breve („căciulă”)","Latin small letter e with breve":"Litera E minusculă cu breve („căciulă”)","Latin capital letter e with dot above":"Litera E majusculă cu punct deasupra","Latin small letter e with dot above":"Litera E minusculă cu punct deasupra","Latin capital letter e with ogonek":"Litera E majusculă cu ogonek („codiță”)","Latin small letter e with ogonek":"Litera E minusculă cu ogonek („codiță”)","Latin capital letter e with caron":"Litera E majusculă cu caron (circumflex inversat)","Latin small letter e with caron":"Litera E minusculă cu caron (circumflex inversat)","Latin capital letter g with circumflex":"Litera G majusculă cu accent circumflex","Latin small letter g with circumflex":"Litera G minusculă cu accent circumflex","Latin capital letter g with breve":"Litera G majusculă cu breve („căciulă”)","Latin small letter g with breve":"Litera G minusculă cu breve („căciulă”)","Latin capital letter g with dot above":"Litera G majusculă cu punct deasupra","Latin small letter g with dot above":"Litera G minusculă cu punct deasupra","Latin capital letter g with cedilla":"Litera G majusculă cu sedilă","Latin small letter g with cedilla":"Litera G minusculă cu sedilă","Latin capital letter h with circumflex":"Litera H majusculă cu accent circumflex","Latin small letter h with circumflex":"Litera H minusculă cu accent circumflex","Latin capital letter h with stroke":"Litera H barată majusculă","Latin small letter h with stroke":"Litera H barată minusculă","Latin capital letter i with tilde":"Litera I majusculă cu tildă","Latin small letter i with tilde":"Litera I minusculă cu tildă","Latin capital letter i with macron":"Litera I majusculă cu macron","Latin small letter i with macron":"Litera I minusculă cu macron","Latin capital letter i with breve":"Litera I majusculă cu breve („căciulă”)","Latin small letter i with breve":"Litera I minusculă cu breve („căciulă”)","Latin capital letter i with ogonek":"Litera I majusculă cu ogonek („codiță”)","Latin small letter i with ogonek":"Litera I minusculă cu ogonek („codiță”)","Latin capital letter i with dot above":"Litera I majusculă cu punct deasupra","Latin small letter dotless i":"Litera I minusculă fără punct","Latin capital ligature ij":"Ligatură formată din literele majuscule IJ","Latin small ligature ij":"Ligatură formată din literele minuscule IJ","Latin capital letter j with circumflex":"Litera J majusculă cu accent circumflex","Latin small letter j with circumflex":"Litera J minusculă cu accent circumflex","Latin capital letter k with cedilla":"Litera K majusculă cu sedilă","Latin small letter k with cedilla":"Litera K minusculă cu sedilă","Latin small letter kra":"Litera KRA minusculă","Latin capital letter l with acute":"Litera L majusculă cu accent ascuțit","Latin small letter l with acute":"Litera L minusculă cu accent ascuțit","Latin capital letter l with cedilla":"Litera L majusculă cu sedilă","Latin small letter l with cedilla":"Litera L minusculă cu sedilă","Latin capital letter l with caron":"Litera L majusculă cu caron (circumflex inversat)","Latin small letter l with caron":"Litera L minusculă cu caron (circumflex inversat)","Latin capital letter l with middle dot":"Litera L majusculă cu punct median","Latin small letter l with middle dot":"Litera L minusculă cu punct median","Latin capital letter l with stroke":"Litera L majusculă cu bară oblică","Latin small letter l with stroke":"Litera L minusculă cu bară oblică","Latin capital letter n with acute":"Litera N majusculă cu accent ascuțit","Latin small letter n with acute":"Litera N minusculă cu accent ascuțit","Latin capital letter n with cedilla":"Litera N majusculă cu sedilă","Latin small letter n with cedilla":"Litera N minusculă cu sedilă","Latin capital letter n with caron":"Litera N majusculă cu caron (circumflex inversat)","Latin small letter n with caron":"Litera N minusculă cu caron (circumflex inversat)","Latin small letter n preceded by apostrophe":"Litera N minusculă cu apostrof în față","Latin capital letter eng":"Litera ENG majusculă","Latin small letter eng":"Litera ENG minusculă","Latin capital letter o with macron":"Litera O majusculă cu macron","Latin small letter o with macron":"Litera O minusculă cu macron","Latin capital letter o with breve":"Litera O majusculă cu breve („căciulă”)","Latin small letter o with breve":"Litera O minusculă cu breve („căciulă”)","Latin capital letter o with double acute":"Litera O majusculă cu dublu accent ascuțit","Latin small letter o with double acute":"Litera O minusculă cu dublu accent ascuțit","Latin capital ligature oe":"Ligatură formată din literele OE majuscule","Latin small ligature oe":"Ligatură formată din literele OE minuscule","Latin capital letter r with acute":"Litera R majusculă cu accent ascuțit","Latin small letter r with acute":"Litera R minusculă cu accent ascuțit","Latin capital letter r with cedilla":"Litera R majusculă cu sedilă","Latin small letter r with cedilla":"Litera R minusculă cu sedilă","Latin capital letter r with caron":"Litera R majusculă cu caron (circumflex inversat)","Latin small letter r with caron":"Litera R minusculă cu caron (circumflex inversat)","Latin capital letter s with acute":"Litera S majusculă cu accent ascuțit","Latin small letter s with acute":"Litera S minusculă cu accent ascuțit","Latin capital letter s with circumflex":"Litera S majusculă cu accent circumflex","Latin small letter s with circumflex":"Litera S minusculă cu accent circumflex","Latin capital letter s with cedilla":"Litera S majusculă cu sedilă","Latin small letter s with cedilla":"Litera S minusculă cu sedilă","Latin capital letter s with caron":"Litera S majusculă cu caron (circumflex inversat)","Latin small letter s with caron":"Litera S minusculă cu caron (circumflex inversat)","Latin capital letter t with cedilla":"Litera T majusculă cu sedilă","Latin small letter t with cedilla":"Litera T minusculă cu sedilă","Latin capital letter t with caron":"Litera T majusculă cu caron (circumflex inversat)","Latin small letter t with caron":"Litera T minusculă cu caron (circumflex inversat)","Latin capital letter t with stroke":"Litera T majusculă barată","Latin small letter t with stroke":"Litera T minusculă barată","Latin capital letter u with tilde":"Litera U majusculă cu tildă","Latin small letter u with tilde":"Litera U minusculă cu tildă","Latin capital letter u with macron":"Litera U majusculă cu macron","Latin small letter u with macron":"Litera U minusculă cu macron","Latin capital letter u with breve":"Litera U majusculă cu breve („căciulă”)","Latin small letter u with breve":"Litera U minusculă cu breve („căciulă”)","Latin capital letter u with ring above":"Litera majusculă U cu inel deasupra","Latin small letter u with ring above":"Litera minusculă U cu inel deasupra","Latin capital letter u with double acute":"Litera U majusculă cu dublu accent ascuțit","Latin small letter u with double acute":"Litera U minusculă cu dublu accent ascuțit","Latin capital letter u with ogonek":"Litera U majusculă cu ogonek („codiță”)","Latin small letter u with ogonek":"Litera U minusculă cu ogonek („codiță”)","Latin capital letter w with circumflex":"Litera W majusculă cu accent circumflex","Latin small letter w with circumflex":"Litera W minusculă cu accent circumflex","Latin capital letter y with circumflex":"Litera Y majusculă cu accent circumflex","Latin small letter y with circumflex":"Litera Y minusculă cu accent circumflex","Latin capital letter y with diaeresis":"Litera Y majusculă cu tremă","Latin capital letter z with acute":"Litera Z majusculă cu accent ascuțit","Latin small letter z with acute":"Litera Z minusculă cu accent ascuțit","Latin capital letter z with dot above":"Litera Z majusculă cu punct deasupra","Latin small letter z with dot above":"Litera Z minusculă cu punct deasupra","Latin capital letter z with caron":"Litera Z majusculă cu caron (circumflex inversat)","Latin small letter z with caron":"Litera Z minusculă cu caron (circumflex inversat)","Latin small letter long s":"Litera S lungă minusculă","Less-than sign":"Simbolul „mai mic decât”","Greater-than sign":"Simbolul „mai mare decât”","Less-than or equal to":"Simbolul „mai mic sau egal”","Greater-than or equal to":"Simbolul „mai mare sau egal”","En dash":"Linie de pauză (en dash)","Em dash":"Linie de dialog (em dash)","Macron":"Macron","Overline":"Linie deasupra","Degree sign":"Simbolul pentru grad","Minus sign":"Semnul minus","Plus-minus sign":"Semnul plus/minus","Division sign":"Semnul împărțirii","Fraction slash":"Bară de fracție (oblică)","Multiplication sign":"Semnul înmulțirii","Latin small letter f with hook":"Litera F minusculă cu cârlig","Integral":"Integrală","N-ary summation":"Sumă (simbol matematic)","Infinity":"Infinit","Square root":"Rădăcină pătrată","Tilde operator":"Operatorul tildă","Approximately equal to":"Aproximativ egal cu","Almost equal to":"Aproape egal cu","Not equal to":"Diferit de (nu este egal cu)","Identical to":"Identic cu","Element of":"Element al","Not an element of":"Nu este un element al","Contains as member":"Conține ca membru","N-ary product":"Produs cartezian (simbol matematic)","Logical and":"ȘI logic","Logical or":"SAU logic","Not sign":"Negare","Intersection":"Intersecție","Union":"Uniune","Partial differential":"Diferențială parțială","For all":"Pentru toți","There exists":"Există","Empty set":"Mulțimea vidă","Nabla":"Nabla","Asterisk operator":"Operatorul asterisc","Proportional to":"Proporțional cu","Angle":"Unghi","Vulgar fraction one quarter":"Un sfert (fracție în scrierea comună)","Vulgar fraction one half":"Jumătate (fracție în scrierea comună)","Vulgar fraction three quarters":"Trei sferturi (fracție în scrierea comună)","Single left-pointing angle quotation mark":"Ghilimele unghiulare simple cu vârful spre stânga","Single right-pointing angle quotation mark":"Ghilimele unghiulare simple cu vârful spre dreapta","Left-pointing double angle quotation mark":"Ghilimele unghiulare cu vârful spre stânga","Right-pointing double angle quotation mark":"Ghilimele unghiulare cu vârful spre dreapta","Left single quotation mark":"Semnul citării simplu stânga (în formă de 6)","Right single quotation mark":"Semnul citării simplu dreapta (în formă de 9)","Left double quotation mark":"Ghilimele sus în formă de 66","Right double quotation mark":"Ghilimele sus în formă de 99","Single low-9 quotation mark":"Ghilimele simple jos în formă de 9","Double low-9 quotation mark":"Ghilimele jos în formă de 99","Inverted exclamation mark":"Semnul exclamării inversat","Inverted question mark":"Semnul întrebării inversat","Two dot leader":"Două puncte orizontale pe linia de bază","Horizontal ellipsis":"Puncte de suspensie","Double dagger":"Dublă obelă (dagger)","Per mille sign":"Promilă","Per ten thousand sign":"La zece mii","Double exclamation mark":"Semnul exclamării dublu","Question exclamation mark":"Semnele întrebării și exclamării","Exclamation question mark":"Semnele exclamării și întrebării","Double question mark":"Doublu semnul întrebării","Copyright sign":"Simbolul pentru copyright","Registered sign":"Simbolul de marcă înregistrată","Trade mark sign":"Simbolul de marcă comercială","Section sign":"Simbolul pentru secțiune","Paragraph sign":"Simbolul pentru paragraf","Reversed paragraph sign":"Simbolul pentru paragraf, inversat","Source":"Sursă","Show source":"Afișare sursă","Show blocks":"Arată casetele","Select all":"Selectează-le pe toate","Disable editing":"Dezactivează editarea","Enable editing":"Activează editarea","Previous editable region":"Regiunea editabilă precedentă","Next editable region":"Regiunea editabilă următoare","Navigate editable regions":"Navighează la regiunile editabile","Remove Format":"Șterge formatare","Page break":"Întrerupere de pagină","media widget":"widget media","Media URL":"Media URL","Paste the media URL in the input.":"Adaugă URL-ul media in input.","Tip: Paste the URL into the content to embed faster.":"Sugestie: adaugă URL-ul în conținut pentru a fi adăugat mai rapid.","The URL must not be empty.":"URL-ul nu trebuie să fie gol.","This media URL is not supported.":"Acest URL media nu este suportat.","Insert media":"Inserează media","Media":"Multimedia","Media toolbar":"Bară media","Open media in new tab":"Deschideți conținutul media într-o filă nouă","Numbered List":"Listă numerotată","Bulleted List":"Listă cu puncte","To-do List":"Listă cu activități","Bulleted list styles toolbar":"Toolbar Listă cu puncte","Numbered list styles toolbar":"Toolbar Listă numerotată","Toggle the disc list style":"Comutați stilul la lista cu discuri","Toggle the circle list style":"Comutați stilul la lista cu cercuri","Toggle the square list style":"Comutați stilul la lista cu pătrate","Toggle the decimal list style":"Comutați stilul la lista cu numere","Toggle the decimal with leading zero list style":"Comutați stilul la lista cu numere cu zero la început","Toggle the lower–roman list style":"Comutați stilul la lista cu litere mici romane","Toggle the upper–roman list style":"Comutați stilul la lista cu litere mari romane","Toggle the lower–latin list style":"Comutați stilul la lista cu litere mici latine","Toggle the upper–latin list style":"Comutați stilul la lista cu litere mari latine","Disc":"Disc","Circle":"Cerc","Square":"Pătrat","Decimal":"Număr","Decimal with leading zero":"Număr cu zero la început ","Lower–roman":"Litere mici romane","Upper-roman":"Litere mari romane","Lower-latin":"Litere mici latine","Upper-latin":"Litere mari latine","List properties":"Proprietăți listă","Start at":"Începe de la","Invalid start index value.":"Valoare incorectă a indicelui de pornire.","Start index must be greater than 0.":"Indexul de pornire trebuie să fie mai mare de 0.","Reversed order":"Ordine inversată","Keystrokes that can be used in a list":"Comenzi din tastatură care pot fi utilizate într-o listă","Increase list item indent":"Incrementează indentarea elementelor din listă","Decrease list item indent":"Decrementează indentarea elementelor din listă","Entering a to-do list":"Introducerea unei liste de activități","Leaving a to-do list":"Ieșirea dintr-o listă de activități","Unlink":"Șterge link","Link":"Link","Link URL":"Link URL","Link URL must not be empty.":"URL-ul linkului nu trebuie să fie necompletat.","Link image":"Link imagine","Edit link":"Modifică link","Open link in new tab":"Deschide link în tab nou","This link has no URL":"Acest link nu are niciun URL","Open in a new tab":"Deschide în tab nou","Downloadable":"Descărcabil","Create link":"Crearea unui link","Move out of a link":"Ieșire dintr-un link","Language":"Limbă","Choose language":"Alege limba","Remove language":"Șterge limba","Increase indent":"Mărește indent","Decrease indent":"Micșorează indent","image widget":"widget imagine","Wrap text":"Încadrare text","Break text":"Segmentare text","In line":"În linie","Side image":"Imagine laterală","Full size image":"Imagine mărime completă","Left aligned image":"Imagine aliniată la stânga","Centered image":"Imagine aliniată pe centru","Right aligned image":"Imagine aliniată la dreapta","Change image text alternative":"Schimbă textul alternativ al imaginii","Text alternative":"Text alternativ","Enter image caption":"Introdu titlul descriptiv al imaginii","Insert image":"Inserează imagine","Replace image":"Înlocuire imagine","Upload from computer":"Încărcare din computer","Replace from computer":"Înlocuire din computer","Upload image from computer":"Încărcare imagine din computer","Image from computer":"Imagine din calculator","From computer":"Din calculator","Replace image from computer":"Înlocuire imagine din computer","Upload failed":"Încărcare eșuată","You have no image upload permissions.":"Nu aveți permisiuni de încărcare a imaginilor.","Image toolbar":"Bară imagine","Resize image":"Redimensionează imaginea","Resize image to %0":"Redimensionează imaginea la %0","Resize image to the original size":"Redimensionează imaginea la mărimea originală","Resize image (in %0)":"Resize image (in %0)","Original":"Original","Custom image size":"Dimensiune personalizată a imaginii","Custom":"Personalizat","Image resize list":"Lista cu mărimi de redimensionare","Insert image via URL":"Inserează o imagine via URL","Insert via URL":"Inserare prn URL","Image via URL":"Imagine prin URL","Via URL":"Prin URL","Update image URL":"Actualizează o imagine via URL","Caption for the image":"Captură pentru imagine","Caption for image: %0":"Captură pentru imagine: %0","The value must not be empty.":"Valoare nu poate rămâne necompletată.","The value should be a plain number.":"Valoarea trebuie să fie un număr obișnuit.","Uploading image":"Se încarcă imaginea","Image upload complete":"Încărcarea imaginii a fost finalizată","Error during image upload":"Eroare în timpul încărcării imaginii","Image":"Imagine","HTML object":"Obiect HTML","Insert HTML":"Inserează HTML","HTML snippet":"Fragment HTML","Paste raw HTML here...":"Inserați aici HTML brut... ","Edit source":"Editează sursa","Save changes":"Salvează schimbările","No preview available":"Previzualizare indisponibilă","Empty snippet content":"Golește conținutul fragmentului","Horizontal line":"Linie orizontală","Yellow marker":"Evidențiator galben","Green marker":"Evidențiator verde","Pink marker":"Evidențiator roz","Blue marker":"Evidențiator albastru","Red pen":"Pix roșu","Green pen":"Pix verde","Remove highlight":"Șterge evidențiere text","Highlight":"Evidențiere text","Text highlight toolbar":"Bară evidențiere text","Heading":"Titlu","Choose heading":"Alege titlu","Heading 1":"Titlu 1","Heading 2":"Titlu 2","Heading 3":"Titlu 3","Heading 4":"Titlu 4","Heading 5":"Titlu 5","Heading 6":"Titlu 6","Type your title":"Scrie titlul tău","Type or paste your content here.":"Scrie sau inserează aici conținutul tău","Font Size":"Dimensiune font","Tiny":"Foarte mică","Small":"Mică","Big":"Mare","Huge":"Foarte mare","Font Family":"Familie font","Default":"Implicită","Font Color":"Culoare font","Font Background Color":"Culoarea de fundal a fontului","Document colors":"Culorile din document","Find and replace":"Găsire și înlocuire","Find in text…":"Găsire în text...","Find":"Găsire","Previous result":"Rezultatul anterior","Next result":"Rezultatul următor","Replace":"Înlocuire","Replace all":"Înlocuire toate","Match case":"Potrivire litere mari și mici","Whole words only":"Doar cuvinte întregi","Replace with…":"Înlocuire cu...","Text to find must not be empty.":"„Text de găsit” nu poate fi lăsat gol.","Tip: Find some text first in order to replace it.":"Sfat: Mai întâi găsiți textul pentru a-l înlocui.","Advanced options":"Opțiuni avansate","Find in the document":"Căutare în document","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Introduce capăt de rând opțional (un element <code>&lt;br&gt;</code>)","Insert a hard break (a new paragraph)":"Introduce un capăt de rând obligatoriu (alineat nou)","Cancel":"Anulare","Clear":"Ștergere","Remove color":"Șterge culoare","Restore default":"Reface la default","Save":"Salvare","Show more items":"Arată mai multe elemente","%0 of %1":"%0 din %1","Cannot upload file:":"Nu se poate încărca fișierul:","Rich Text Editor. Editing area: %0":"Editor Rich Text. Zonă editare: %0","Insert with file manager":"Inserare cu managerul de fișiere","Replace with file manager":"Înlocuire cu managerul de fișiere","Insert image with file manager":"Inserare imagine cu managerul de fișiere","Replace image with file manager":"Înlocuire imagine cu managerul de fișiere","File":"Fișier","With file manager":"Cu managerul de fișiere","Toggle caption off":"Dezactivați subtitlul","Toggle caption on":"Activați subtitlul","Content editing keystrokes":"Comenzi din tastatură pentru editarea conținutului","These keyboard shortcuts allow for quick access to content editing features.":"Aceste comenzi rapide din tastatură permit accesul rapid la funcțiile de editare a conținutului.","User interface and content navigation keystrokes":"Interfața cu utilizatorul și comenzi din tastatură pentru navigare în conținut","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Utilizați următoarele comenzi din tastatură pentru o navigare mai eficientă în interfața cu utilizatorul CKEditor 5.","Close contextual balloons, dropdowns, and dialogs":"Închide baloanele contextuale, ferestrele derulante și ferestrele de dialog","Open the accessibility help dialog":"Deschide fereastra de ajutor pentru accesibilitate","Move focus between form fields (inputs, buttons, etc.)":"Schimbă elementul activ între câmpurile unui formular (câmpuri de introducere text, butoane etc.)","Move focus to the menu bar, navigate between menu bars":"Transferarea focusului pe bara de meniu, navigarea între barele de meniu","Move focus to the toolbar, navigate between toolbars":"Mută focalizarea pe bara de instrumente, navighează prin barele de instrumente","Navigate through the toolbar or menu bar":"Navigare prin bara de instrumente sau bara de meniuri","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execută butonul focalizat în prezent. Executarea butoanelor care interacționează cu conținutul editorului mută focalizarea înapoi pe conținut.","Accept":"Acceptă","Paragraph":"Paragraf","Color picker":"Alegere culoare","Insert code block":"Inserează un bloc code","Plain text":"Text simplu","Leaving %0 code snippet":"Ieșire din fragmentul de cod %0","Entering %0 code snippet":"Intrare în fragmentul de cod %0","Entering code snippet":"Intrare în fragmentul de cod","Leaving code snippet":"Ieșire din fragmentul de cod","Code block":"Bloc de cod","Copy selected content":"Copiază conținutul selectat","Paste content":"Lipește conținut","Paste content as plain text":"Lipește conținutul ca text simplu","Insert image or file":"Inserează imagine sau fișier","Could not obtain resized image URL.":"Nu se poate obtine URL-ul imaginii redimensionate.","Selecting resized image failed":"Selecția imaginii redimensionate eșuată","Could not insert image at the current position.":"Nu se poate insera imaginea la poziția curentă.","Inserting image failed":"Inserție imagine eșuată","Open file manager":"Deschidere manager fișiere","Cannot determine a category for the uploaded file.":"Categoria fișierului încărcat nu poate fi stabilită.","Cannot access default workspace.":"Nu poți accesa spațiul de lucru implicit.","You have no image editing permissions.":"Nu aveți permisiuni de editare a imaginilor.","Edit image":"Editare imagine","Processing the edited image.":"Se procesează imaginea editată.","Server failed to process the image.":"Serverul nu a putut procesa imaginea.","Failed to determine category of edited image.":"Nu s-a putut determina categoria imaginii editate.","Block quote":"Bloc citat","Bold":"Îngroșat","Italic":"Cursiv","Underline":"Subliniat","Code":"Cod","Strikethrough":"Tăiere text cu o linie","Subscript":"Indice","Superscript":"Exponent","Italic text":"Text cursiv","Move out of an inline code style":"Ieșirea dintr-un stil de cod inline","Bold text":"Text bold","Underline text":"Text subliniat","Strikethrough text":"Text barat","Saving changes":"Se salvează modificările","Revert autoformatting action":"Anulează acțiunea de formatare automată","Align left":"Aliniază la stânga","Align right":"Aliniază la dreapta","Align center":"Aliniază la centru","Justify":"Aliniază stânga-dreapta","Text alignment":"Aliniere text","Text alignment toolbar":"Bara aliniere text"},getPluralForm(n){return (n == 1 ? 0 : (n == 0 || (n % 100 > 0 && n % 100 < 20)) ? 1 : 2);}}};
e[ 'ro' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'ro' ].dictionary = Object.assign( e[ 'ro' ].dictionary, dictionary );
e[ 'ro' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
