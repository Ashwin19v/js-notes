var downbut = document.getElementById("addbut");
var black = document.getElementById("disblack");
var pop = document.getElementById("pop");
downbut.addEventListener("click", function () {
  black.style.display = "block";
  pop.style.display = "block";
});

var canbut = document.getElementById("can");
canbut.addEventListener("click", function (event) {
  event.preventDefault();
  black.style.display = "none";
  pop.style.display = "none";
});
var divcont = document.getElementById("cont");
var addbut = document.getElementById("ok");
var sltbut = document.getElementById("popslt");
var inpbut = document.getElementById("pophead");
var desbut = document.getElementById("popdescrip");

addbut.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "notescont");
  div.innerHTML = `<h1> ${sltbut.value}</h1> <h1> ${inpbut.value}</h1> <textarea>${desbut.value}</textarea><button onclick="del(event)">Delete</button>`;
  if (sltbut.value && inpbut.value && desbut.value) {
    divcont.append(div);
  }
  black.style.display = "none";
  pop.style.display = "none";
});
function del(event) {
  event.target.parentElement.remove();
}
