const staff_txt = "05_staff_assets/staffcredit.txt";
const promos_path = "/05_staff_assets/social_media/";
const promos_txt = "05_staff_assets/socialmediapromos.txt";

$(function placeStaffCredits() {
    const staff_credits = document.querySelector(".credits.staff");
    var text = loadFile(staff_txt);
    staff_credits.innerHTML = text;
});

$(function placePromos() {
    var tokens = loadFile(promos_txt).split("\n");
    for(let i = 0; i < tokens.length; i++){
        let text = tokens[i].trim()
        let id = text.split(".")[0]
        let artist = id.split("-")[1]
        $(".gallery").append( "<div class=promo><img class=promo_image src="+ promos_path+text +" alt="+artist+"><p class=promo_credit id="+id+">"+artist+"</p></div>" );
    }
    $(".gallery").on("mouseenter", "div.promo", function(e){
        promoHover(e.target, true);
    }).on( "mouseleave", ".promo", function(e){
        promoHover(e.target, false);
    });
});

$(function scrolltoTop() {
    const scrollframe = document.querySelector('.scrollframe');
    scrollframe.scrollTop = 0;
});

function loadFile(filePath) {
  let result;
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

function promoHover(promo_img, hover){
    let tokens = promo_img.src.split("/");
    let id = tokens[tokens.length-1];
    id = id.split(".")[0];
    let promo_text = document.getElementById(id);
    if (hover){
        promo_img.style = "filter: brightness(50%)";
        promo_text.style = "display: inline";
    }
    else{
        promo_img.style = "filter: brightness(100%)";
        promo_text.style = "display: none";
    }
    
}