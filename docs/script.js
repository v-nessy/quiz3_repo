window.onload = () => { //function tells the window what to do on load
     let places = staticLoadPlaces(); //sets the variable "places" to the function "staticLoadPlaces()"
     renderPlaces(places); //applies the function "renderPlaces()" to the variable "places"
};

function staticLoadPlaces() { //define a new function
    return [ //returns any specified expressions within square brackets
        {
            name: 'MyModel', //stores the string 'MyModel' for name key
            location: { //sets values for location
                lat: 43.89623966685822, //sets value for latitude
                lng: -79.22635749135085, //sets value for longitude
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/MyModel/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}