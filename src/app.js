/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  randomizeCard();
  document.getElementById("button").addEventListener("click", function() {
    randomizeCard();
  });
};

function randomizeCard() {
  let cardIcon = getRandomInt(4) + 1;
  let cardNumber = getRandomInt(14) + 1;
  randomIcons(cardIcon);
  randomNumbers(cardNumber);
}

function randomIcons(cardIcon) {
  let icons = document.getElementsByClassName("cardIcon");

  if (cardIcon == 1) {
    Array.from(icons).forEach(element => {
      element.innerHTML = "♦";
      element.classList.add("text-danger");
    });
  } else if (cardIcon == 2) {
    Array.from(icons).forEach(element => {
      element.innerHTML = "♥";
      element.classList.add("text-danger");
    });
  } else if (cardIcon == 3) {
    Array.from(icons).forEach(element => {
      element.innerHTML = "♠";
      element.classList.add("text-dark");
    });
  } else {
    Array.from(icons).forEach(element => {
      element.innerHTML = "♣";
      element.classList.add("text-dark");
    });
  }
}

function randomNumbers(cardNumber) {
  let carta = document.getElementById("cardNumber");

  if (cardNumber == 1 || cardNumber == 14) {
    carta.innerHTML = "A";
  } else if (cardNumber == 11) {
    carta.innerHTML = "J";
  } else if (cardNumber == 12) {
    carta.innerHTML = "Q";
  } else if (cardNumber == 13) {
    carta.innerHTML = "K";
  } else {
    carta.innerHTML = cardNumber;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
