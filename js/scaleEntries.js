function scaleEntries(){
    console.log("triggered scale entries");
    let screenwidth = $("main").width();
    let entries = document.querySelectorAll(".entry");
    console.log(entries);
    for (let i = 0; i < entries.length; i++){
        let number = i < 10? '0'+i : i;
        entries[i].style="scale:"+screenwidth/1920+";";
    }
}

export {scaleEntries};