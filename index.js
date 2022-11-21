function sunset() {
  document.getElementById("p2").style.filter = "saturate(3)";
  document.getElementById("navbar-black").style.backgroundColor = "black";
  document.getElementById("p2").style.transition = "all 1s";
}

function cloudy() {
  document.getElementById("p2").style.filter = "none";
  document.getElementById("navbar-black").style.backgroundColor = "#477890";
}
