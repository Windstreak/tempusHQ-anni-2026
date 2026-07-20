import { activateOverlay, deactivateOverlay } from "./overlay.js";
import { loadCSV } from "./cvsloader.js";

const CSVPath =  "/04_entries/05_altare/entries.csv";
const iconFilePath = "/04_entries/05_altare/00_icons/";
const entryFilePath = "/04_entries/05_altare/";
const entryData = await loadCSV(CSVPath);


$(async function placeEntries() {
    for (let i = 1; i <= 9; i++){
        let number = i < 10? '0'+i : i;
        $(".entries").append('<img class="entry art" id="entry_'+number+'" src='+iconFilePath+number+'_entry_icon.png loading="lazy">');
        var entry = document.querySelector('#entry_'+number);
        entry.addEventListener("click", function (e){activateOverlay(e, entryData, entryFilePath)});
    }
    scaleEntries();
});

function scaleEntries(){
    let screenwidth = $("main").width();
    for (let i = 1; i <= 28; i++){
        let number = i < 10? '0'+i : i;
        $("#entry_"+number).css("scale", screenwidth/1920);
    }
    $("#guestbook").css("scale", screenwidth/1920);
}

window.onresize = scaleEntries;
