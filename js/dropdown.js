function showDropdown() {
  document.getElementById("dropdown").classList.toggle("dropdown__show"); 
}

window.onclick = function (event) {
  if (event.target == document.getElementById("dropdown")) {
    document.getElementById("dropdown").classList.toggle("dropdown__show"); 
  }
}