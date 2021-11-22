"use strict";

import "../scss/app.scss";

const cards = [
  {
    image: "../images/photo.png",
    title: "Наименование товара",
    descr:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: "5 000",
  },
  {
    image: "../images/photo.png",
    title: "Наименование товара",
    descr:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: "7 000",
  },
  {
    image: "../images/photo.png",
    title: "Наименование товара",
    descr:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: "10 000",
  },
  {
    image: "../images/photo.png",
    title: "Наименование товара",
    descr:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: "9 000",
  },
  {
    image: "../images/photo.png",
    title: "Наименование товара",
    descr:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: "8 000",
  },
  {
    image: "../images/photo.png",
    title: "Наименование товара",
    descr:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: "3 000",
  },
];

const trashButton = [];
const cardsContainer = document.querySelector(".cards");
const addButton = document.querySelector(".form__button");

cardsRender();

function cardsRender() {
  cardsContainer.innerHTML = "";
  trashButton.length = 0;
  cards.forEach((elem) => {
    cardsContainer.innerHTML += `
    <div class="card">
    <div class="card__image">
      <img src="${elem.image}" alt="photo" />
    </div>
    <div class="card__text">
      <h2 class="card__title">${elem.title}</h2>
      <p class="card__descr">${elem.descr}
      </p>
      <h2 class="card__price">${elem.price}</h2>
    </div>
    <button class="card__del">
    </button>
  </div>
  `;
  });

  trashButton.push(...document.getElementsByClassName("card__del"));
  for (let i = 0; i < trashButton.length; i++) {
    trashButton[i].addEventListener("click", () => {
      cards.splice(i, 1);
      cardsRender();
    });
  }
}

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const errorMessage = document.getElementsByClassName("form__error");
  const cardName = document.querySelector('.form [name="name"]').value;
  const cardDescr = document.querySelector('.form [name="descr"]').value;
  const cardLink = document.querySelector('.form [name="link"]').value;
  const cardPrice = document.querySelector('.form [name="price"]').value;
  for (let i = 0; i < errorMessage.length; i++)
    errorMessage[i].style.display = "none";

  if (cardName === "" || cardLink === "" || cardPrice === "") {
    cardName === "" ? (errorMessage[0].style.display = "flex") : null;
    cardLink === "" ? (errorMessage[1].style.display = "flex") : null;
    cardPrice === "" ? (errorMessage[2].style.display = "flex") : null;
  } else {
    cards.push({
      image: cardLink,
      title: cardName,
      descr: cardDescr,
      price: cardPrice,
    });
    cardsRender();
  }
});
