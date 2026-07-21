import { scaleEntries } from "./scaleEntries.js";

$(function placeHeaderFooter(){
    $("header").load("header.html"); 
    $("footer").load("footer.html");
});

window.onresize = scaleEntries;
window.addEventListener("orientationchange", function(){
     scaleEntries();
     $(".body").append('<p>orientationchange</p>');
});