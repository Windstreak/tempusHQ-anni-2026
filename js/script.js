$(function placeNavButtons() {
    let page_titles = ["Home", "Lobby", "Hallway", "Green Room", "Altare's Room", "Axel's Room", "Stage"];
    let pages = ['index.php','lobby.php','#','#','#','#','stage.php'];
    for (i = 1; i <= 7; i++){
        number = i < 10? '0'+i : i;
        $(".sidebar").append('<li><a href = "'+pages[i-1]+'"><h1>'+page_titles[i-1]+'</h1></a></li>');
        $(".topbar").append('<li class="hideOnMobile"><a href = "'+pages[i-1]+'"><img id="button_'+number+'" src="Buttons/button_'+number+'.png" onmouseenter="buttonHover('+i+')" onmouseleave="buttonHover('+i+', false)"></a></li>');
    }
});
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
function buttonHover(id, enter = true){
    let button_id;
    let imgPathHover;
    let imgPathNormal;
    let image;
    if (id < 10){
        button_id = "button_0"+id;
        imgPathHover = "Buttons/button_0"+id+"_hover.png";
        imgPathNormal = "Buttons/button_0"+id+".png";
    }
    else{
        button_id = "button_"+id;
        imgPathHover = "Buttons/button_"+id+"_hover.png";
        imgPathNormal = "Buttons/button_"+id+".png";
    }
    image = document.getElementById(button_id);
    image.src = enter? imgPathHover: imgPathNormal;
}
