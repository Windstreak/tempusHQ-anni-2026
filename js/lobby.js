import { placeOverlay, activateOverlay, deactivateOverlay } from "./overlay.js";
import { loadCSV } from "./cvsloader.js";
import { scaleEntries } from "./scaleEntries.js";

const CSVPath =  "/04_entries/02_lobby/entries.csv";
const iconFilePath = "/04_entries/02_lobby/00_icons/";
const entryFilePath = "/04_entries/02_lobby/";
const entryData = await loadCSV(CSVPath);

$(placeOverlay());

$(async function placeEntries() {
    for (let i = 1; i <= 3; i++){
        let number = i < 10? '0'+i : i;
        $(".entries").append('<img class="entry art" id="entry_'+number+'" src='+iconFilePath+number+'_entry_icon.png loading="lazy">');
        let entry = document.querySelector('#entry_'+number);
        entry.addEventListener("click", function (e){activateOverlay(e, entryData, entryFilePath)});
    }
    for (let i = 4; i <= 28; i++){
        let number = i < 10? '0'+i : i;
        $(".entries").append('<img class="entry photo tiltable" id="entry_'+number+'" src='+iconFilePath+number+'_entry_icon.png loading="lazy">');
        let entry = document.querySelector('#entry_'+number);
        entry.addEventListener("click", function (e){activateOverlay(e, entryData, entryFilePath)});
    }
    $(".entries").append('<a href="https://www.kudoboard.com/boards/aZk5R0X8" target="_blank"><img class="entry external" id="guestbook" src="/04_entries/02_lobby/00_icons/29_book_icon.png" loading="lazy"></a>');
    scaleEntries();
});
