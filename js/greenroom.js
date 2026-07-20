import { activateOverlay, deactivateOverlay } from "./overlay.js";
import { loadCSV } from "./cvsloader.js";

const CSVPath =  "/04_entries/04_greenroom/entries.csv";
const iconFilePath = "/04_entries/04_greenroom/00_icons/";
const entryFilePath = "/04_entries/04_greenroom/";
const entryData = await loadCSV(CSVPath);


$(async function placeEntries() {
    for (let i = 1; i <= 8; i++){
        let number = i < 10? '0'+i : i;
        if (i!=3)
        {
            $(".entries").append('<img class="entry art" id="entry_'+number+'" src='+iconFilePath+number+'_entry_icon.png loading="lazy">');
            let entry = document.querySelector('#entry_'+number);
            entry.addEventListener("click", function (e){activateOverlay(e, entryData, entryFilePath)});
        }
        else{
            $(".entries").append('<a href="https://drive.google.com/drive/folders/1X7hYFt84bsaQ0JVBv1zIBMcxVbYh64pA" target="blank"><img class="entry art" id="entry_'+number+'" src='+iconFilePath+number+'_entry_icon.png loading="lazy"></a>');
        }
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