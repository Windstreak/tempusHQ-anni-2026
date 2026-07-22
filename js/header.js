const buttonPath = "/02_buttons/";

$(function placeNavButtons() {
    let page_titles = ["Home", "Lobby", "Hallway", "Green Room", "Altare's Room", "Axel's Room", "Stage"];
    let pages = ['/','/lobby.html','/hallway.html','/greenroom.html','/altare.html','/axel.html','/stage.html'];
    for (let i = 1; i <= 7; i++){
        let number = i < 10? '0'+i : i;
        $(".sidebar").append('<li><a href = "'+pages[i-1]+'"><h1>'+page_titles[i-1]+'</h1></a></li>');
        $(".topbar").append('<li id="button_'+number+'"><a href = "'+pages[i-1]+'"><img src='+buttonPath+'button_'+number+'.png onmouseenter="buttonHover('+i+')"></a></li>');
        $(".topbar").append('<li class="hover" id="button_'+number+'_hover"><a href = "'+pages[i-1]+'"><img src='+buttonPath+'button_'+number+'_hover.png onmouseleave="buttonHover('+i+', false)"></a></li>');
    }
    $(".sidebar").append('<li><a href=https://docs.google.com/document/d/16qCeph3zUwMeJO6AiE1Xw6MM_ITC0YITXeryXpWOtG8 target="blank"><h1 class="external">Accessibility</h1></a></li>');
    $(".sidebar").append('<li><a href=/staff.html><h1>Staff</h1></a></li>');
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
    if (id < 10){
        button_id = "button_0"+id;
    }
    else{
        button_id = "button_"+id;
    }
    const button = document.querySelector("#"+button_id);
    const buttonHover = document.querySelector("#"+button_id+"_hover");
    
    if (enter){
        button.style.display = "none"
        buttonHover.style.display = "inline"
    }
    else{
        buttonHover.style.display = "none"
        button.style.display = "inline"
    }
}