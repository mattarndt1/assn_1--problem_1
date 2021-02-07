var mymap = L.map('mapid').setView([38, -94], 13);

var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(mymap);

var marker1 = L.marker([38.63660, -90.20268]).addTo(mymap);
var marker2 = L.marker([38.65540, -90.32204]).addTo(mymap);
var marker3 = L.marker([38.67721, -90.40416]).addTo(mymap);
var marker4 = L.marker([38.46775, -90.39442]).addTo(mymap);
var marker5 = L.marker([38.63226, -90.35887]).addTo(mymap);


marker1.bindPopup("Chipotle #1");
marker2.bindPopup("Chipotle #2");
marker3.bindPopup("Chipotle #3");
marker4.bindPopup("Chipotle #4");
marker5.bindPopup("Chipotle #5");

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
