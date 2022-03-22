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

function renderPlaces(places) { //define new function with the "places" object as a parameter
    let scene = document.querySelector('a-scene'); //create a new 3D scene from a-frame library

    places.forEach((place) => { //accesses each element in the places object
        let latitude = place.location.lat; //set latitude to whatever value "lat" holds
        let longitude = place.location.lng; //set longitude to whatever value "lng" holds

        let model = document.createElement('a-entity'); //create a new model from a-frame library
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`); //set model's location to saved gps coordinates
        model.setAttribute('gltf-model', './assets/MyModel/scene.gltf'); //accesses model's gltf file
        model.setAttribute('rotation', '0 180 0'); //sets model's y-axis rotaton to 180 degrees
        model.setAttribute('animation-mixer', ''); //allow model to animate
        model.setAttribute('scale', '0.5 0.5 0.5'); //scale model down to 50% its original size

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}