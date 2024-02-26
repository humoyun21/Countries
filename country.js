"use strict";

let countryWrapper = $(".countri--card-wrapper");

let country_name = localStorage.getItem("data-country");

let URl = "https://restcountries.com/v2";

async function fetchCountry(URL, name) {
  try {
    let response = await fetch(`${URL}/name/${name}?fullText=true`);
    let result = await response.json();
    renderCountry(result[0]);
  } catch (e) {
    console.log(e);
  }
}

fetchCountry(URl, country_name);

function renderCountry(country) {
  countryWrapper.innerHTML = `
              <div class="countri--card">
                <div class="countri--card--img">
                  <img src="${country.flags.png}"
                    alt="img"
                  />
                </div>
                <div class="countri-card--titil">
                  <h2>${country.name}</h2>
                  <div class="countri-card--titil--list">
                    <ul>
                      <li><strong>Native Name:</strong>${country.nativeName}</li>
                      <li><strong>Population:</strong>${country.population}</li>
                      <li><strong>Region:</strong>${country.region}</li>
                      <li><strong>Sub Region:</strong>${country.subregion}</li>
                      <li><strong>Capital:</strong>${country.capital}</li>
                    </ul>
                    <ul>
                      <li><strong>Top Level Domain:</strong>${country.topLevelDomain}</li>
                      <li><strong>Currencies:</strong>${country.currencies[0]?.name}</li>
                      <li><strong>Languages:</strong>${country.languages[0]?.nativeName}</li>
                    </ul>
                  </div>
                  <div class="countri-card--titil--botton">
                    <strong>Border Countries: </strong>
                    <p class="countri-card--titil--botton--pi">
                      <span>France</span><span>Germany</span
                      ><span>Netherlands</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
                `;
}
