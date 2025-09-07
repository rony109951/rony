const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");

menuBtn.addEventListener("click", () => {
  if (sideMenu.style.right === "0px") {
    sideMenu.style.right = "-250px";
  } else {
    sideMenu.style.right = "0px";
  }
});