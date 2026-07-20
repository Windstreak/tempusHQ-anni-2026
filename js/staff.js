const staff_txt = "05_staff_assets/staffcredit.txt";
const promos_path = "05_Staff_Assets/social_media/";

$(function placeStaffCredits() {
    const staff_credits = document.querySelector(".credits.staff");
    var text = loadFile(staff_txt);
    staff_credits.innerHTML = text;
});

$(function scrolltoTop() {
    $.ajax({
        url : promos_path,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                    $(".gallery").append( "<img class=promo_image src='"+ promos_path + val +"'>" );
                } 
            });
        }
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