'use strict'
const map = L.map('map').setView([60.2238, 24.758], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([60.2238, 24.758]).addTo(map)
  .bindPopup("<a href='https://www.metropolia.fi/fi/metropoliasta/kampukset/karamalmi' target='_blank'>Metropolia Karamalmin kampus</a>")
  .openPopup();

var icon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/iconic/open-iconic/master/png/map-marker-8x.png',
  iconSize: [32, 32],
  iconAnchor: [16,32]
});


/*Uusi sijainti hakiessa*/
function uusiSijainti(latitude, longitude){
  map.setView([latitude, longitude], 10);

  marker.setLatLng([latitude, longitude]);
  marker.closePopup();

}