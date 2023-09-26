/** @format */
let menuIcon = document.querySelector(".menu-icon")
let sideBar = document.querySelector(".sidebar")
let container = document.querySelector(".container")
// console.log(container)

menuIcon.onclick = function () {
  sideBar.classList.toggle("small")
  container.classList.toggle("big-container")
}

// window.document.body.style.backgroundColor = "yell#ccow"
