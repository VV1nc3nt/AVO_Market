let popup = document.getElementById("popup");
let closeBtn = document.getElementById("close");


closeBtn.onclick = function () {
  popup.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}