function showDropdown() {
  document.getElementById("dropdown").classList.toggle("dropdown__show"); 
  // document.getElementById("btn_catalog_img").setAttribute("src", "./svg/cross-small.svg");
}

window.onclick = function (event) {
  if (event.target == document.getElementById("dropdown")) {
    document.getElementById("dropdown").classList.toggle("dropdown__show"); 
  }
}