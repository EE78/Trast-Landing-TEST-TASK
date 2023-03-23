let catalog = document.getElementById("catalog");

document.getElementById("showCatalog").addEventListener("click", () => {
  catalog.style.display =
    getComputedStyle(catalog).display === "none" ? "flex" : "none";
});


let isNumOfFooterImgActive = false;
let slide1 = document.getElementById("changer__first-link");
let slide2 = document.getElementById("changer__second-link");
let slide3 = document.getElementById("changer__third-link");
let slide4 = document.getElementById("changer__fourth-link");
let setFooterImg5 = document.getElementById("changer__fifth-link");

function SetSlide1() {
  isNumOfFooterImgActive = true;
  if (isNumOfFooterImgActive) {
    slide1.style.backgroundColor = "#DC1919";
    slide2.style.backgroundColor = "#3E3E3E";
    slide3.style.backgroundColor = "#3E3E3E";
    slide4.style.backgroundColor = "#3E3E3E";
    setFooterImg5.style.backgroundColor = "#3E3E3E";
  }
}
function SetSlide2() {
  isNumOfFooterImgActive = true;
  if (isNumOfFooterImgActive) {
    slide1.style.backgroundColor = "#3E3E3E";
    slide2.style.backgroundColor = "#DC1919";
    slide3.style.backgroundColor = "#3E3E3E";
    slide4.style.backgroundColor = "#3E3E3E";
    setFooterImg5.style.backgroundColor = "#3E3E3E";
  }
}

function SetSlide3() {
  isNumOfFooterImgActive = true;
  if (isNumOfFooterImgActive) {
    slide1.style.backgroundColor = "#3E3E3E";
    slide2.style.backgroundColor = "#3E3E3E";
    slide3.style.backgroundColor = "#DC1919";
    slide4.style.backgroundColor = "#3E3E3E";
    setFooterImg5.style.backgroundColor = "#3E3E3E";
  }
}

function SetSlide4() {
  isNumOfFooterImgActive = true;
  if (isNumOfFooterImgActive) {
    slide1.style.backgroundColor = "#3E3E3E";
    slide2.style.backgroundColor = "#3E3E3E";
    slide3.style.backgroundColor = "#3E3E3E";
    slide4.style.backgroundColor = "#DC1919";
    setFooterImg5.style.backgroundColor = "#3E3E3E";
  }
}

function SetSlide5() {
  isNumOfFooterImgActive = true;
  if (isNumOfFooterImgActive) {
    slide1.style.backgroundColor = "#3E3E3E";
    slide2.style.backgroundColor = "#3E3E3E";
    slide3.style.backgroundColor = "#3E3E3E";
    slide4.style.backgroundColor = "#3E3E3E";
    setFooterImg5.style.backgroundColor = "#DC1919";
  }
}
