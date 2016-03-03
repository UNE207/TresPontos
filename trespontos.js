/* 
 * Esta extensão destina-se à facilitar a inclusão da tripontuação em textos maçônicos,
 * Aplica-se em emails, redes sociais, etc.
 * 
 * Author:Rodrigo de Souza Silva
 */

function copyToClipboard( text ){
                var copyDiv = document.createElement('div');
                copyDiv.contentEditable = true;
                document.body.appendChild(copyDiv);
                copyDiv.innerHTML = text;
                copyDiv.unselectable = "off";
                copyDiv.style.fontSize = "large";
                copyDiv.style.fontFamily = "Times";
                copyDiv.style.fontStyle = "normal";
                copyDiv.focus();
                document.execCommand('SelectAll');
                document.execCommand("Copy", false, null);
                document.body.removeChild(copyDiv);
               }

chrome.browserAction.onClicked.addListener(function(tab) {
  
    copyToClipboard("\u2234");
    
       
});

