import { placeOverlay, activateOverlay, deactivateOverlay } from "./overlay.js";
import { loadCSV } from "./cvsloader.js";
import { scaleEntries } from "./scaleEntries.js";

const CSVPath =  "/04_entries/06_axel/entries.csv";
const iconFilePath = "/04_entries/06_axel/00_icons/";
const entryFilePath = "/04_entries/06_axel/";
const entryData = await loadCSV(CSVPath);

$(placeOverlay());

$(async function placeEntries() {
    let number = "01";
    $(".entries").append('<img class="entry art" id="entry_'+number+'" src='+iconFilePath+number+'_entry.png loading="lazy">');
    let entry = document.querySelector('#entry_'+number);
    entry.addEventListener("click", function (e){activateOverlay(e, entryData, entryFilePath)});
    for (let i = 2; i <= 7; i++){
        number = i < 10? '0'+i : i;
        if(i <= 2 || i==7){
            $(".entries").append('<img class="entry art" id="entry_'+number+'" src='+iconFilePath+number+'_entry_icon.png loading="lazy">');
        }
        else{
            $(".entries").append('<img class="entry art tiltable" id="entry_'+number+'" src='+iconFilePath+number+'_entry_icon.png loading="lazy">');
        }
        entry = document.querySelector('#entry_'+number);
        entry.addEventListener("click", function (e){activateOverlay(e, entryData, entryFilePath)});
    }
    scaleEntries();
});

