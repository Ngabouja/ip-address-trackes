const inputSearch = document.querySelector("#inputSearch");
const btn = document.querySelector("#btn");
const spanIp = document.querySelector("#spanIp");
const spanVille = document.querySelector("#spanVille");
const spanHoraire = document.querySelector("#spanHoraire");
const spanISP = document.querySelector("#spanISP");

const map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
const marker = L.marker([51.5, -0.09]).addTo(map);

btn.addEventListener("click", async () => {
	const ip = inputSearch.value;

	const rep = await fetch(
		"https://geo.ipify.org/api/v2/country,city?apiKey=at_SNV38WfiHuLZjUqoMJsf9iNs7V7dc&ipAddress=" +
			ip,
	);

	const data = await rep.json();

	spanIp.textContent = data.ip;
	spanVille.textContent = data.location.city;
	spanHoraire.textContent = data.location.timezone;
	spanISP.textContent = data.isp;

	const lat = data.location.lat;
	const lng = data.location.lng;

	map.setView([lat, lng], 13);
	marker.setLatLng([lat, lng]);

	console.log(data);
});
