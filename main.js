var latitude, longitude , destination;



//alert box
$(document).ready(function(){
    alert("PLEASE ALLOW THE LOCATION"),
    initGeolocation()
})



function initGeolocation(){
    if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(success)

	}
	else{
		alert("sorry")
	}
}


function success(position){
    console.log(position)
    latitude = position.coords.latitude
    longitude = position.coords.longitude


    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

    
var map = new mapboxgl.Map({
    container: "map" , 
    style: 'mapbox://styles/mapbox/streets-v11',
    // this is specially designed in Geojson
    centre: [longitude,latitude], 
    zoom: 4


})



map.addControl( 
    new MapboxDirections({ 
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }) )


//add marker
var img1 = document.querySelector("#amber")


   // create a amber palace , jaipur marker and add it to the map

var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map);



//add marker
var img2 = document.querySelector("#gateway")


   // create a gateway of India , mumbai marker and add it to the map

var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([ 72.834654 , 18.92198503])
.addTo(map);


//add marker
var img3 = document.querySelector("#IndiaGate")


   // create a india gate, delhi marker and add it to the map

var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([ 77.2295 , 28.6129])
.addTo(map);






//add marker
var img4 = document.querySelector("#lotus")


   // create a lotus temple, delhi marker and add it to the map

var marker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([77.259132 , 28.553558])
.addTo(map);



//add marker
var img5 = document.querySelector("#victoria")


   // create a victoria memorial , kolkata marker and add it to the map

var marker5 = new mapboxgl.Marker({
    element:img5
})
.setLngLat([88.3425 , 22.5448])
.addTo(map);



//create button in map 
map.addControl (new mapboxgl.GeolocateControl({

    // we can easily find top right,left
    positionOptions : {
        enableHighAcccuracy : true
    },
    trackUserLocation : true,
   

}

));

//result
map.addControl(

    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl    
    }).on('result', function (e){
        destination = e.result.center
    })
);



//navigation

$(function (){
    $("navigate-button").click(function(){
        window.location.href = 'ar_weather.html?source=${latitude};$(longitude=${destination[1]};${destination[0]})'
    })
})

}

