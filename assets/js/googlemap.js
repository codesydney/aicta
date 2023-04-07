function myMap() {
    const mapProp= {
        center:new google.maps.LatLng(-33.8951565,151.0589396),
        zoom:16,
                };
    const map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    const marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(-33.8951565,151.0589396),
        map: map,
        title: "AICTA",
});

}
