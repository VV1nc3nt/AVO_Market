function showDropdown() {
  document.getElementById("dropdown").classList.toggle("dropdown__show"); 
}

window.onclick = function (event) {
  if (event.target == document.getElementById("dropdown")) {
    document.getElementById("dropdown").classList.toggle("dropdown__show"); 
  }
}

function showDropdownInput() {
  document.getElementById("price_input").classList.toggle("price_input_show"); 
}

function showDropdownCheckbox() {
  document.getElementById("checkbox_wrapper").classList.toggle("checkbox_wrapper_show"); 
}

function boxToRow() {
  let box = document.getElementById("catalog_box_wrapper");
  let row = document.getElementById("catalog_row_wrapper");
}