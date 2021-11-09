document.getElementById("sample1").onclick = function () {
  document.getElementById("sample1").innerHTML += "added text!";
  //this.innerHTML += "added text!"; =======>joftesh yakiue
};

//////////////////////////////////////////////////////////////////

document.getElementById("sample1").onclick = function () {
  this.innerHTML += "Click added some text!";
};
// document.getElementsByTagName("input")[0].onkeyup= function () {
//   document.getElementById("inputvalue").innerHTML = this.value;
// };
