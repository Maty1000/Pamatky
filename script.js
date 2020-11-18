var BGpamatka = pamatky[Math.round(Math.random() * (pamatky.length - 1))];
document.getElementById("test").innerHTML = BGpamatka.name; 
document.getElementById("BG").style.backgroundImage = "url(\"" + BGpamatka.pic + "\")"; 

var markerImg = "assets/location-marker.svg";

var m = new SMap(JAK.gel("map"));
m.addControl(new SMap.Control.Sync()); /* Aby mapa reagovala na zmìnu velikosti prùhledu */
m.addDefaultLayer(SMap.DEF_BASE).enable(); /* Turistický podklad */
var mouse = new SMap.Control.Mouse(SMap.MOUSE_PAN | SMap.MOUSE_WHEEL | SMap.MOUSE_ZOOM); /* Ovládání myší */
m.addControl(mouse);

var vrstva = new SMap.Layer.Marker();     /* Vrstva se znaèkami */
var souradnice = [];


// vytvoreni markeru
pamatky.forEach(function (marker) {
    var c = SMap.Coords.fromWGS84(marker.coords); /* Souøadnice znaèky, z textového formátu souøadnic */

    var options = {
        url: markerImg,
        title: marker.name,
        anchor: { left: 10, bottom: 1 }  /* Ukotvení znaèky za bod uprostøed dole */
    }

    // duletize je prirazeni id jednotlivemu markeru - vlastni id, jinak se generuje nahodne
    var znacka = new SMap.Marker(c, marker.id, options);
    souradnice.push(c);
    vrstva.addMarker(znacka);
});

// zobrazime a povolime vrstvu - pokud by se vrstva povolila pred vkladanim markeru, tak by se s kazdym vlozenym markerem prekreslovala mapa a pocitaly pozice vsech markeru
m.addLayer(vrstva);                          /* Pøidat ji do mapy */
vrstva.enable();                         /* A povolit */

var cz = m.computeCenterZoom(souradnice); /* Spoèítat pozici mapy tak, aby znaèky byly vidìt */
m.setCenterZoom(cz[0], cz[1]);

// poslouchani na kliknuti u markeru
m.getSignals().addListener(this, "marker-click", function (e) {
    // vybrany marker
    var marker = e.target;
    var id = marker.getId();
    // zobrazime jeho jmeno - parovani vybraneho markeru pomoci jeho id a nasich vstupnich dat
    for (var i = 0; i < pamatky.length; i++) {
        if (pamatky[i].id == id) {
            alert(pamatky[i].name);
            break;
        }
    }
});
