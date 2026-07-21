function scaleEntries(){
    let screenwidth = $("main").width();
    let entries = document.querySelectorAll(".entry");
    for (let i = 0; i < entries.length; i++){
        let number = i < 10? '0'+i : i;
        entries[i].style="scale:"+screenwidth/1920+";";
    }
}

export {scaleEntries};