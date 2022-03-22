window.onload = () => { //tells program what to do once window is loaded
  render(); //runs a function called "render"
};

const models = [ //creates a constant variable "models"
  {
    url: './assets/myModel/scene.gltf', //access the 3D model's gltf file
    scale: '0.5 0.5 0.5', //set model's scale to half of original size
    rotation: '0 225 0' //set model's rotation on y-axis to 225
  },
];

let modelIndex = 0;
const setModel = (model, entity) => {
  if (model.position) {
    entity.setAttribute('position', model.position);
  }

  entity.setAttribute('gltf-model', model.url);
};

function render() {
  const scene = document.querySelector('a-scene');

  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const model = document.createElement('a-entity');
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

    setModel(models[modelIndex], model);

    model.setAttribute('animation-mixer', '');

    scene.appendChild(model);
  });
}
