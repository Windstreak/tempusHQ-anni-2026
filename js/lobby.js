const file_path =  "04_Entries/02_lobby/entries.csv";

$(async function placeEntries() {
    var parsed_data = await loadCSV(file_path);
    for (i = 1; i <= 28; i++){
        number = i < 10? '0'+i : i;
        $(".entries").append('<img class="entry" id="entry_'+number+'" src="04_Entries/02_lobby/00_icons/'+number+'_entry_icon.PNG" loading="lazy">');
        entry = document.getElementById("entry_"+number);
        entry.addEventListener("click", activateOverlay)
    }
    $(".entries").append('<a href="https://www.kudoboard.com/boards/aZk5R0X8" target="_blank"><img class="entry" id="guestbook" src="04_Entries/02_lobby/00_icons/29_book_icon.PNG" loading="lazy"></a>');
    scaleEntries()
});

function scaleEntries(){
    let screenwidth = $("main").width();
    for (i = 1; i <= 28; i++){
        number = i < 10? '0'+i : i;
        $("#entry_"+number).css("scale", screenwidth/1920);
    }
    $("#guestbook").css("scale", screenwidth/1920);
}

function activateOverlay(){
    const overlay = document.querySelector(".entry-overlay");
    overlay.style.display = "flex";
    overlay.addEventListener("click", deactivateOverlay)
}
function deactivateOverlay(){
    const overlay = document.querySelector(".entry-overlay");
    overlay.style.display = "none";
}

window.onresize = scaleEntries