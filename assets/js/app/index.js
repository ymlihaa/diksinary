// var albums;
var node;

const lang = "tr";
const API_KEY =
  " trnsl.1.1.20200418T031625Z.9cec77fc8baa52af.4342049eae7cc356f4d7cd8f54034fd7a001783f";
let URL =
  "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" +
  API_KEY +
  "&text=" +
  document.getElementById("word-input").value +
  "&lang=" +
  lang;
console.log(URL);

function addReq() {
  console.log("input : " + document.getElementById("word-input").value);
  var flag;
  // req
  //   .get(
  //     "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" +
  //       API_KEY +
  //       "&text=" +
  //       document.getElementById("word-input").value +
  //       "&lang=" +
  //       lang
  //   )
  //   .then((data) => {
  //     albums = data;
  //     console.log("albums : " + albums);

  //     console.log("data : " + data);
  //   })
  //   .catch((err) => console.log(err));

  fetch(
    "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" +
      API_KEY +
      "&text=" +
      document.getElementById("word-input").value +
      "&lang=" +
      lang
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      flag = data.text;
      console.log(data);
      node = document.createTextNode(flag);
    });

  return node;
}

// -------------------------------------------------------------------

function addWord() {
  var time = new Date();
  time = time.toDateString();

  // CARDLARIN HTML ELEMENTİ OLARAK KURULUMU

  cardsTag = document.getElementById("cards");

  var strHtml = document.createElement("section");
  var attr = document.createAttribute("class");
  attr.value = "card";
  strHtml.setAttributeNode(attr);
  var h2 = document.createElement("h2");
  attr = document.createAttribute("id");
  attr.value = "card-title";

  h2.setAttributeNode(attr);
  var node = document.createTextNode(
    document.getElementById("word-input").value.toUpperCase()
  );
  h2.appendChild(node);
  strHtml.appendChild(h2);

  var p = document.createElement("p");
  attr = document.createAttribute("id");
  attr.value = "card-body";
  p.setAttributeNode(attr);

  node = addReq();
  p.appendChild(node);
  strHtml.appendChild(p);

  var h5 = document.createElement("h5");
  attr = document.createAttribute("id");
  attr.value = "card-timeStamp";
  h5.setAttributeNode(attr);
  node = document.createTextNode(time);
  h5.appendChild(node);
  strHtml.appendChild(h5);

  document.getElementById("cards").appendChild(strHtml);
}

function clear_Input() {
  document.getElementById("word-input").value = "";
}
