import { placeOverlay, activateOverlay, deactivateOverlay } from "./overlay.js";
import { loadCSV } from "./cvsloader.js";
import { scaleEntries } from "./scaleEntries.js";

const CSVPath =  "/04_entries/04_greenroom/entries.csv";
const iconFilePath = "/04_entries/04_greenroom/00_icons/";
const entryFilePath = "/04_entries/04_greenroom/";
const entryData = await loadCSV(CSVPath);

$(placeOverlay());

$(async function placeEntries() {
    let number;
    for (let i = 1; i <= 8; i++){
        number = i < 10? '0'+i : i;
        if (i!=3)
        {
            $(".entries").append('<img class="entry art tiltable" id="entry_'+number+'" src='+iconFilePath+number+'_entry_icon.png loading="lazy">');
            let entry = document.querySelector('#entry_'+number);
            entry.addEventListener("click", function (e){activateOverlay(e, entryData, entryFilePath)});
        }
        else{
            $(".entries").append('<a href="https://drive.google.com/drive/folders/1X7hYFt84bsaQ0JVBv1zIBMcxVbYh64pA" target="blank"><img class="entry art tiltable external" id="entry_'+number+'" src='+iconFilePath+number+'_entry_icon.png loading="lazy"></a>');
        }
    }
    number="09";
    $(".entries").append('<a href="https://drive.google.com/drive/u/2/folders/184XtAMQ0QdOZk92hvh6S1drWGZPP_CvM" target="blank"><img class="entry art tiltable external" id="entry_'+number+'" src='+iconFilePath+number+'_entry_icon.png loading="lazy"></a>');
    number="10";
    $(".entries").append('<a href="https://drive.google.com/drive/folders/1vtSQq5OMe6Li6lcxsVkk0GK5HVGfnJei" target="blank"><img class="entry art tiltable external" id="entry_'+number+'" src='+iconFilePath+number+'_entry_icon.png loading="lazy"></a>');
    scaleEntries();
});