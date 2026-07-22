import { scaleEntries } from "./scaleEntries.js";

$(function placeHeaderFooter(){
    $("header").load("header.html"); 
    $("footer").load("footer.html");
});
function externalEntryAlert(){
    return confirm('This will open an external link. Would you like to go to that site?');
}

window.onresize = scaleEntries;
window.addEventListener("orientationchange", function(){
     scaleEntries();
});
$(document.body).on("click", ".external",externalEntryAlert);