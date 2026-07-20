const buttonPath = "/02_buttons/"
$(function placeHeaderFooter(){
    $("header").load("header.html"); 
    $("footer").load("footer.html");
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
