import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let palos = ['♠','♥','♦','♣'];
let valores = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

function sacar() {
  let palo = palos[Math.floor(Math.random()*4)];
  let valor = valores[Math.floor(Math.random()*13)];

  let carta = document.getElementById('carta');
  carta.textContent = valor + ' ' + palo;

  carta.style.color = (palo === '♥' || palo === '♦') ? 'red' : 'black';
}
