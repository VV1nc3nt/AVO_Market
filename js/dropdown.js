function showDropdown() {
  document.getElementById("dropdown").classList.toggle("dropdown__show");
  let btnShow = document.getElementById("btn_catalog_img");
  if (btnShow.getAttribute("src") === "./svg/menu-burger.svg") {
    btnShow.setAttribute("src", "./svg/cross-small.svg");
  } else {
    btnShow.setAttribute("src", "./svg/menu-burger.svg");
  }
}

window.onclick = function (event) {
  let btnShow = document.getElementById("btn_catalog_img");
  if (event.target == document.getElementById("dropdown")) {
    document.getElementById("dropdown").classList.toggle("dropdown__show");
    btnShow.setAttribute("src", "./svg/menu-burger.svg");
  }
}

function showDropdownInput() {
  document.getElementById("price_input").classList.toggle("price_input_show");
  let arrowSvg = document.getElementById("category_dropdown");
  if (arrowSvg.getAttribute("src") === "../svg/arrow_bot.svg") {
    arrowSvg.setAttribute("src", "../svg/arrow_top.svg");
  } else {
    arrowSvg.setAttribute("src", "../svg/arrow_bot.svg");
  }
}

function showDropdownCheckbox() {
  document.getElementById("checkbox_wrapper").classList.toggle("checkbox_wrapper_show"); 
  let arrowSvg = document.getElementById("checkbox_dropdown");
  if (arrowSvg.getAttribute("src") === "../svg/arrow_bot.svg") {
    arrowSvg.setAttribute("src", "../svg/arrow_top.svg");
  } else {
    arrowSvg.setAttribute("src", "../svg/arrow_bot.svg");
  }
}

function boxToRow() {
  let box = document.getElementById("catalog_box_wrapper");
  let row = document.getElementById("catalog_row_wrapper");
  let boxButton = document.getElementById("sort_block_svg");
  let rowButton = document.getElementById("sort_row_svg");
  box.style.display = "none";
  boxButton.style.stroke = "#E6E6E6";
  row.style.display = "block";
  rowButton.style.stroke = "#374957";
}

function rowToBox() {
  let box = document.getElementById("catalog_box_wrapper");
  let row = document.getElementById("catalog_row_wrapper");
  let boxButton = document.getElementById("sort_block_svg");
  let rowButton = document.getElementById("sort_row_svg");
  row.style.display = "none";
  rowButton.style.stroke = "#E6E6E6";
  box.style.display = "flex";
  boxButton.style.stroke = "#374957";
}