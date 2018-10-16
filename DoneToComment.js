// ==UserScript==
// @name         DoneToComment
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  done to comment
// @author       Baneblade powered by tempschl
// @match        http://kali.ghoffice/pv-edit/edneu.pl*
// @match        https://kali.geizhals.at/pv-edit/edneu.pl*
// @grant        none
// @downloadURL	 none
// @icon	 http://666kb.com/i/du9vkdssab91239qc.png
// ==/UserScript==

document.body.addEventListener('keyup', function(event) {
    // F2 or GTFO
    if (event.which !== 113) return;

    var hinweisText = document.querySelector('#hinweis > textarea');
    showTextareaIfHidden(hinweisText);
    addOrPrependDoneText(hinweisText);
});

function showTextareaIfHidden(hinweisText) {
    if(hinweisText.parentNode.style.display !== 'none') return;

    toggle("hinweis", 1);
}

function addOrPrependDoneText(hinweisText) {
    var oldContent = hinweisText.value;

    hinweisText.value = 'done';

    if(!oldContent || oldContent === '') return;

    hinweisText.value += '\n' + oldContent;
}
