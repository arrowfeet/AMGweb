var A_Class = 0;
var C_Class = 0;
var CL_Class = 0;
var E_Class = 0;
var S_Class = 0;
var G_Class = 0;
var GL_Class = 0;
var GT_Class = 0;

function refreshResults() {
  var results = document.getElementById("results");
  results.innerHTML =
    "TOTAL: " +
    (A_Class +
      C_Class +
      CL_Class +
      E_Class +
      S_Class +
      G_Class +
      GL_Class +
      GT_Class);
  results.innerHTML += "<br />A-Class: " + A_Class;
  results.innerHTML += "<br />C-Class: " + C_Class;
  results.innerHTML += "<br />CL-Class: " + CL_Class;
  results.innerHTML += "<br />E-Class: " + E_Class;
  results.innerHTML += "<br />S-Class: " + S_Class;
  results.innerHTML += "<br />G-Class: " + G_Class;
  results.innerHTML += "<br />GL-Class: " + GL_Class;
  results.innerHTML += "<br />GT-Class: " + GT_Class;
}

function aclass() {
  A_Class++;
  refreshResults();
}

function cclass() {
  C_Class++;
  refreshResults();
}

function clclass() {
  CL_Class++;
  refreshResults();
}

function eclass() {
  E_Class++;
  refreshResults();
}

function sclass() {
  S_Class++;
  refreshResults();
}

function gclass() {
  G_Class++;
  refreshResults();
}

function glclass() {
  GL_Class++;
  refreshResults();
}

function gtclass() {
  GT_Class++;
  refreshResults();
}
