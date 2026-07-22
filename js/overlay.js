const CSVCol = {
    ENTRY_FILE_NAME: 0,
    ENTRY_FILE: 1,
    ICON_FILE: 2,
    ENTRY_TITLE: 3,
    ARTIST: 4,
    WRITER: 5,
    CAPTION: 6
};
function placeOverlay(){
    $("overlay").load("entryOverlay.html");
    $(document).keyup( function(e){
        if (e.key === "Escape") {
            deactivateOverlay();
        }
    });
    $("overlay").on("click", ".close-button", function(e){
        e.stopPropagation();
        deactivateOverlay();
    });
}

function activateOverlay(event, entryData, entryFilePath){
    const number_id = event.currentTarget.id.split("_")[1]
    const id = parseInt(number_id);
    const overlay = document.querySelector(".entry-overlay");
    const title = document.querySelector(".entry-overlay .title");
    const buffering = document.querySelector(".entry-overlay .buffering");
    const image = document.querySelector(".entry-overlay .image");
    const caption = document.querySelector(".entry-overlay .caption");
    const writing = document.querySelector(".entry-overlay .caption .writing");
    const author = document.querySelector(".entry-overlay .caption .author b");
    let author_string = "";
    window.scrollTo(0, 1);
    overlay.style.display = "flex";
    title.innerHTML = entryData[id][CSVCol.ENTRY_TITLE];
    image.src = entryFilePath+number_id+"_entry.png";
    image.addEventListener("load", function() {
        buffering.style = "display: none";
        image.style.display = "inline";
    });
    writing.innerHTML = entryData[id][CSVCol.CAPTION];
    if (event.currentTarget.classList.contains("art")){
        author_string += "Art"
    }
    else{
        author_string += "Photography"
    }
    if (entryData[id][CSVCol.ARTIST].trim() === entryData[id][CSVCol.WRITER].trim()){
        author_string += event.currentTarget.classList.contains("art")? " and writing by "+entryData[id][CSVCol.ARTIST] : " by "+entryData[id][CSVCol.ARTIST];
    }
    else {
        author_string += " by "+entryData[id][CSVCol.ARTIST]+"<br>Writing by "+entryData[id][CSVCol.WRITER];
    }
    author.innerHTML = author_string;
    document.body.style = "overflow-y: hidden";
    caption.scrollTop = 0;
}
function deactivateOverlay(){
    const overlay = document.querySelector(".entry-overlay");
    const image = document.querySelector(".entry-overlay .image");
    const buffering = document.querySelector(".entry-overlay .buffering");
    overlay.style.display = "none";
    document.body.style = "overflow-y: auto";
    image.src = "";
    image.style = "display: none";
    buffering.style = "display: inline";
}

export {placeOverlay, activateOverlay, deactivateOverlay};