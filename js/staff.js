const staff_txt = "05_staff_assets/staffcredit.txt";
const promos_path = "/05_staff_assets/social_media/";
const promos_txt = "05_staff_assets/promo_image_paths.txt/";

$(function placeStaffCredits() {
    const staff_credits = document.querySelector(".credits.staff");
    var text = loadFile(staff_txt);
    staff_credits.innerHTML = text;
});

$(function placePromos() {
    var text = loadFile(promos_txt).split("\r\n"); ;
    for(let i = 0; i < text.length; i++){
        $(".gallery").append( "<div class=promo><img class=promo_image src='"+ text[i] +"'><p class=promo_credit>kill me</p></div>" );
    }
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