window.onload = () => { //tells program what to do once window is loaded
  render(); //runs a function called "render"
};

const models = [ //creates an array of objects called "models"
  {
    url: './assets/myModel/scene.gltf', //access the 3D model's gltf file
    scale: '0.5 0.5 0.5', //set model's scale to half of original size
    rotation: '0 225 0' //set model's rotation on y-axis to 225
  },
];

let modelIndex = 0; //set variable to 0
const setModel = (model, entity) => { //create an object called "setModel"
  if (model.position) { //if position is accessed...
    entity.setAttribute('position', model.position);//update position value
  }

  entity.setAttribute('gltf-model', model.url);//update model file
};

function render() {//create function called render
  const scene = document.querySelector('a-scene');//create an object called "scene" out of the a-scene element

  navigator.geolocation.getCurrentPosition(function (position) {//get the position of the device
    const latitude = position.coords.latitude;//set latitude coordinate
    const longitude = position.coords.longitude;//set longitude coordinate

    const model = document.createElement('a-entity');//create an element out of the a-entity element
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);//update model attributes to have gps positions

    setModel(models[modelIndex], model);//call all model objects in the models array to render

    model.setAttribute('animation-mixer', '');//allow model to animate

    scene.appendChild(model);//add model to scene
  });
}

/* 
This script uses objects in an OOP style by creating an array of objects "models" with certain properties which are all later given unique positions and called upon at the end.
- I would handle the model's scale, rotation, and position by specifying them in the models array.
- I would add more models by putting another object with its base properties (url, scale, rotation) into the models array.
- If I wanted to add something like a button for interaction, I would put it somewhere in the index.html file.
*/