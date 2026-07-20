const CSVPath =  "04_Entries/02_lobby/entries.csv";
const iconFilePath = "04_Entries/02_lobby/00_icons/";
const entryFilePath = "04_Entries/02_lobby/";
const entryData = await loadCSV(CSVPath);
const CSVCol = {
    ENTRY_FILE_NAME: 0,
    ENTRY_FILE: 1,
    ICON_FILE: 2,
    ENTRY_TITLE: 3,
    ARTIST: 4,
    WRITER: 5,
    CAPTION: 6
};
console.log(entryData)

$(async function placeEntries() {
    for (i = 1; i <= 28; i++){
        number = i < 10? '0'+i : i;
        $(".entries").append('<img class="entry" id="entry_'+number+'" src="04_Entries/02_lobby/00_icons/'+number+'_entry_icon.PNG" loading="lazy">');
        var entry = document.querySelector('#entry_'+number);
        entry.addEventListener("click", activateOverlay);
    }
    $(".entries").append('<a href="https://www.kudoboard.com/boards/aZk5R0X8" target="_blank"><img class="entry" id="guestbook" src="04_Entries/02_lobby/00_icons/29_book_icon.PNG" loading="lazy"></a>');
    scaleEntries();
    document.querySelector(".close-button").addEventListener("click", deactivateOverlay);
    $(document).keyup( function(e){
        if (e.key === "Escape") {
            deactivateOverlay();
        }
    });
});

function scaleEntries(){
    let screenwidth = $("main").width();
    for (i = 1; i <= 28; i++){
        number = i < 10? '0'+i : i;
        $("#entry_"+number).css("scale", screenwidth/1920);
    }
    $("#guestbook").css("scale", screenwidth/1920);
}

function activateOverlay(event){
    const number_id = event.currentTarget.id.split("_")[1]
    const id = parseInt(number_id);
    const overlay = document.querySelector(".entry-overlay");
    const title = document.querySelector(".entry-overlay .title");
    const image = document.querySelector(".entry-overlay .image");
    const caption = document.querySelector(".entry-overlay .caption");
    const writing = document.querySelector(".entry-overlay .caption .writing");
    const author = document.querySelector(".entry-overlay .caption .author b");
    let author_string;
    overlay.style.display = "flex";
    console.log(entryData[id]);
    title.textContent = entryData[id][CSVCol.ENTRY_TITLE];
    image.src = "04_Entries/02_lobby/"+number_id+"_entry.png";
    writing.textContent = entryData[id][CSVCol.CAPTION];
    if (entryData[id][CSVCol.ARTIST].trim() === entryData[id][CSVCol.WRITER].trim()){
        author_string = "Image and Captions by "+entryData[id][CSVCol.ARTIST];
    }
    else {
        author_string = "Image by "+entryData[id][CSVCol.ARTIST]+"\r\nWriting by "+entryData[id][CSVCol.WRITER];
    }
    author.setAttribute('style', 'white-space: pre;')
    author.textContent = author_string;
    document.body.style.overflow = "hidden";
    caption.scrollTop = 0;
}
function deactivateOverlay(){
    const overlay = document.querySelector(".entry-overlay");
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onresize = scaleEntries