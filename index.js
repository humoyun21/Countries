"use strict";

let flagWrapper = $("#flags-wrapper");
let searchFlag = $("#search-flag");
let selectFlag = $("#select-flag");
let body = $("body");
let darkbtn = $("#dark-btn");

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

      flagWrapper.appendChild(flag_card);
    });
  } else {
    flagWrapper.innerHTML = "NOT FOUND";
  }
}

function searchRenderData(data) {
  flagWrapper.innerHTML = "";
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

      flagWrapper.appendChild(flag_card);
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

function darkMode() {
  body.classList.toggle("dark-Mode");
}

searchFlag.addEventListener("keyup", (e) => {
  let search = e.target.value.toLowerCase();
  searchFlags(dataFlags, search);
});

selectFlag.addEventListener("change", (el) => {
  sortOptionFlag(dataFlags, selectFlag.value.toLowerCase());
});

darkbtn.addEventListener("click", () => {
  darkMode();
});

const dataFlags = getData();
dataFlags.then(renderFlags);
