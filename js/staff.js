const staff_txt = "05_staff_assets/staffcredit.txt";

$(function placeStaffCredits() {
    const staff_credits = document.querySelector(".credits.staff");
    var text = loadFile(staff_txt);
    staff_credits.innerHTML = text;
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