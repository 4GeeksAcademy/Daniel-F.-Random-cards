import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let palos = ['♠','♥','♦','♣'];
let valores = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

function generarCarta() {
  let palo = palos[Math.floor(Math.random() * palos.length)];
  let valor = valores[Math.floor(Math.random() * valores.length)];

  let carta = document.getElementById("carta");
  let paloArriba = document.getElementById("palo-arriba");
  let paloAbajo = document.getElementById("palo-abajo");
  let valorCarta = document.getElementById("valor");

  paloArriba.innerHTML = palo;
  paloAbajo.innerHTML = palo;
  valorCarta.innerHTML = valor;

  // color según palo -
  if (palo === '♥' || palo === '♦') {
    carta.classList.add("rojo");
    carta.classList.remove("negro");
  } else {
    carta.classList.add("negro");
    carta.classList.remove("rojo");
  }
}

// Generar una carta al cargar
onclick = generarCarta;
window.onload = generarCarta;