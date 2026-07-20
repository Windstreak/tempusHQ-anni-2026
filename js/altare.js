import { activateOverlay, deactivateOverlay } from "./overlay.js";
import { loadCSV } from "./cvsLoader.js";

const CSVPath =  "04_Entries/05_altare/entries.csv";
const iconFilePath = "04_Entries/05_altare/00_icons/";
const entryFilePath = "04_Entries/05_altare/";
const entryData = await loadCSV(CSVPath);


$(async function placeEntries() {
    for (i = 1; i <= 9; i++){
        number = i < 10? '0'+i : i;
        $(".entries").append('<img class="entry art" id="entry_'+number+'" src='+iconFilePath+number+'_entry_icon.PNG loading="lazy">');
        var entry = document.querySelector('#entry_'+number);
        entry.addEventListener("click", function (e){activateOverlay(e, entryData, entryFilePath)});
    }
    scaleEntries();
});

function scaleEntries(){
    let screenwidth = $("main").width();
    for (i = 1; i <= 28; i++){
        number = i < 10? '0'+i : i;
        $("#entry_"+number).css("scale", screenwidth/1920);
    }
    $("#guestbook").css("scale", screenwidth/1920);
}

window.onresize = scaleEntries
$(".close-button").on("click", deactivateOverlay);
$(document).keyup( function(e){
    if (e.key === "Escape") {
        deactivateOverlay();
    }
});