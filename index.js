"use strict";

// variables
let cardFlag = $("#card-flag");
let searchFlag = $("#search-flag");
let selectFlag = $("#select-flag");
let body = $("body");
let darkbtn = $("#dark-btn");

// functions
function getData() {
  let url = "https://restcountries.com/v2/all";
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => "No data found")
    .finally(() => console.log("done"));
}

function renderFlags(data) {
  if (data.length > 0) {
    data.forEach((el) => {
      let flag_card = createElement("div", "card");
      flag_card.innerHTML = `
                <img src="${el.flag}" alt="${el.name}">
                <div class="card-body">
                    <h5>${el.name}</h5>
                    <p><span>Population: </span>${el.population}</p>
                    <p><span>Region: </span>${el.region}</p>
                    <p><span>Capital: </span>${el.capital}</p>
                </div>
            `;

      cardFlag.appendChild(flag_card);
    });
  } else {
    cardFlag.innerHTML = "NOT FOUND";
  }
}

function searchRenderData(data) {
  cardFlag.innerHTML = "";
  if (data.length > 0) {
    data.forEach((el) => {
      let flag_card = createElement("div", "card");
      flag_card.innerHTML = `
                <img src="${el.flag}" alt="${el.name}">
                <div class="card-body">
                    <h5>${el.name}</h5>
                    <p><span>Population: </span>${el.population}</p>
                    <p><span>Region: </span>${el.region}</p>
                    <p><span>Capital: </span>${el.capital}</p>
                </div>
            `;

      cardFlag.appendChild(flag_card);
    });
  }
}

function searchFlags(data, searchWord) {
  data.then((el) =>
    searchRenderData(
      el.filter((ele) => ele.name.toLowerCase().includes(searchWord))
    )
  );
}

function sortOptionFlag(data, name) {
  data.then((el) =>
    searchRenderData(
      el.filter((ele) => ele.region.toLowerCase().includes(name))
    )
  );
}

const dataFlags = getData();
dataFlags.then(renderFlags);
