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


const dropdown = document.getElementsByClassName("show_catalog");

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("price_input_show");
    var dropdownContent = this.nextElementSibling;
    let arrow = dropdown[i].children[1].getAttribute('src');
    if (arrow === "./svg/arrow_bot.svg") {
      dropdown[i].children[1].setAttribute("src", "./svg/arrow_top.svg");
    } else {
      dropdown[i].children[1].setAttribute("src", "./svg/arrow_bot.svg");
    }
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
    }
  });
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
  box.style.display = "block";
  boxButton.style.stroke = "#374957";
}

function arrowDown() {
  let basketNumber = document.getElementById("basket_number");
  basketNumber.stepDown();
}

function arrowUp() {
  let basketNumber = document.getElementById("basket_number");
  basketNumber.stepUp();
}

document.addEventListener('change', function(e){
  if(!e.target.hasAttribute('data-type-legal')) return;
  autodelivery.hidden = !autodelivery.hidden
  selfdelivery.hidden = !selfdelivery.hidden
});
   if (document.documentElement.hidden === undefined) {
Object.defineProperty(Element.prototype, "hidden", {
  set: function(value) {
    this.setAttribute('hidden', value);
  },
  get: function() {
    return this.getAttribute('hidden');
  }
});
}
