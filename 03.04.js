// import { data } from "./emoji.js";

// let div = document.querySelector("div")
// div.innerHTML = "<p>inner div</p>"
// console.dir(div);
// let li = document.querySelector("#id")
// let p = document.createElement("p")
// // p.innerText = "hi"
// p.textContent = "hello"
// p.id = "123"
// p.setAttribute("class", "container")
// console.log(p.getAttribute("class"));
// console.log(p);
// console.dir(p);
// il.append(p)
// document.body.append(p)
// document.body.prepend(p)

// let obj = {
//   symbol: "100",
//   title: "100",
//   description: "some desc",
// };

// function createCard(obj) {
//   let card = document.createElement("div");
//   card.setAttribute("class", "card");

//   let img = document.createElement("img");
//   img.setAttribute(
//     "src",
//     "https://media.proglib.io/wp-uploads/2018/03/EzgdmaCQuT84bgDL4fhXZS.jpg"
//   );
//   img.setAttribute("width", 400);

//   let h2 = document.createElement("h2");
//   h2.textContent = obj.title;

//   let p = document.createElement("p");
//   p.textContent = obj.description;

//   let btn = document.createElement("button");
//   btn.textContent = "Send";

//   card.append(img, h2, p, btn);
//   console.log(card);
//   document.body.prepend(card);
// }

// createCard(obj);

// function myFunc(object) {
//   let card = document.createElement("div");
//   card.setAttribute("class", "card");
//     let a = document.createElement("icon");
//   let b = document.createElement("100");
//   let с = document.createElement('card text');
//     c.textContent = "Hundred, points, symbol, wow, win, perfect, parties";
// }

// let data = {
//   title: "100",
//   symbol: "💯",
//   keywords: "Hundred, points, symbol, wow, win, perfect, parties",
// };
// function myFunc(object) {
//   let card = document.createElement("div");
//   let a = document.createElement("p");
//   let b = document.createElement("p");
//   let c = document.createElement("p");
//   document.body.card.prepend(a, b, c);
//   a.textContent = card.title;
//   b.textContent = card.symbol;
//   c.textContent = card.keywords;
//   card.setAttribute("class", "card");
//   a.setAttribute("class", "icon__img");
//   b.setAttribute("class", "icon__name");
//   c.setAttribute("class", "icon__text");
//   document.body.prepend(card);
//   console.log(card);
// }
// myFunc(data)

import { data } from "./emoji.js";

data.forEach(createCard);

let obj = {
  symbol: "💯",
  title: "100",
  keywords: "Hundred, points, symbol, wow, win, perfect, parties",
};

function createCard(obj) {
  let article = document.createElement("div");
  article.setAttribute("class", "article");

  let articleImg = document.createElement("p");
  articleImg.textContent = obj.symbol;
  articleImg.setAttribute("class", "article__img");

  let articleTitle = document.createElement("p");
  articleTitle.textContent = obj.title;
  articleTitle.setAttribute("class", "article__title");

  let articleSubtitle = document.createElement("p");
  articleSubtitle.textContent = obj.keywords;
  articleSubtitle.setAttribute("class", "article__subtitle");

  article.append(articleImg, articleTitle, articleSubtitle);
  document.getElementById("cards").append(article);
}

createCard(obj);

const input = document.querySelector("input");
input.addEventListener("input", search);
function search(e) {
  let value = e.target.value;
  let res = data.filter((e) => e.title.includes(input.value))

  cards.innerHTML = "";
  res.forEach(createCard);
}

