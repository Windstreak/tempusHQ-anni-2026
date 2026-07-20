const staff_txt = "03_stage_assets/charitycredit.txt";

$(function placeStaffCredits() {
    const staff_credits = document.querySelector(".credits.stage");
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