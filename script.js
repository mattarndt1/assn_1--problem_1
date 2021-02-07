var mymap = L.map('mapid').setView([38.5, -90.3], 7);

var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(mymap);

var marker1 = L.marker([38.6057018,-90.4263799]).addTo(mymap);
var marker2 = L.marker([38.6727119,-90.5671538]).addTo(mymap);
var marker3 = L.marker([38.5922542,-90.4881896]).addTo(mymap);
var marker4 = L.marker([38.5922542,-90.4881896]).addTo(mymap);
var marker5 = L.marker([38.5922542,-90.4881896]).addTo(mymap);


marker1.bindPopup("Chipotle - Grand Blvd STL");
marker2.bindPopup("Chipotle - Creve Coeur");
marker3.bindPopup("Chipotle - Clayton");
marker4.bindPopup("Chipotle - Hanley Rd STL");
marker5.bindPopup("Chipotle - Kirkwood");

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
