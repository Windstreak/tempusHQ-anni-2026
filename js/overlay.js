const CSVCol = {
    ENTRY_FILE_NAME: 0,
    ENTRY_FILE: 1,
    ICON_FILE: 2,
    ENTRY_TITLE: 3,
    ARTIST: 4,
    WRITER: 5,
    CAPTION: 6
};
$(function placeOverlay(){
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
})



function activateOverlay(event, entryData, entryFilePath){
    const number_id = event.currentTarget.id.split("_")[1]
    const id = parseInt(number_id);
    const overlay = document.querySelector(".entry-overlay");
    const title = document.querySelector(".entry-overlay .title");
    const image = document.querySelector(".entry-overlay .image");
    const caption = document.querySelector(".entry-overlay .caption");
    const writing = document.querySelector(".entry-overlay .caption .writing");
    const author = document.querySelector(".entry-overlay .caption .author b");
    let author_string = "";
    overlay.style.display = "flex";
    title.textContent = entryData[id][CSVCol.ENTRY_TITLE];
    image.src = entryFilePath+number_id+"_entry.png";
    writing.textContent = entryData[id][CSVCol.CAPTION];
    if (event.currentTarget.classList.contains("art")){
        author_string += "Art"
    }
    else{
        author_string += "Photography"
    }
    if (entryData[id][CSVCol.ARTIST].trim() === entryData[id][CSVCol.WRITER].trim()){
        author_string += " by "+entryData[id][CSVCol.ARTIST];
    }
    else {
        author_string += " by "+entryData[id][CSVCol.ARTIST]+"\r\nWriting by "+entryData[id][CSVCol.WRITER];
    }
    author.textContent = author_string;
    document.body.style.overflow = "hidden";
    caption.scrollTop = 0;
}
function deactivateOverlay(){
    const overlay = document.querySelector(".entry-overlay");
    const image = document.querySelector(".entry-overlay .image");
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    image.src = "";
}

export {activateOverlay, deactivateOverlay};