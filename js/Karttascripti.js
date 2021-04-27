'use strict'
const map = L.map('map').setView([60, 25], 5);
map.flyTo([60.2238, 24.758], 17)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);