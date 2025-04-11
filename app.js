const inputSearch = document.querySelector("#inputSearch");
const btn = document.querySelector("#btn");
const spanIp = document.querySelector("#spanIp");
const spanVille = document.querySelector("#spanVille");
const spanHoraire = document.querySelector("#spanHoraire");
const spanISP = document.querySelector("#spanISP");

inputSearch.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    console.log(inputSearch.value);
  }
});

btn.addEventListener("click", () => {
  console.log(inputSearch.value);
});

const reponds = await fetch(
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_RudMtWKnMBaLOS1GVANssM7tX1vL0&ipAddress=" +
    inputSearch.value,
  {
    method: "GET",
  }
);

const data = await reponds.json();
spanIp.textContent = inputSearch.value;
