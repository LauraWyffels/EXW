// let scene;


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0xe79d9f });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

var animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();

// const init = () => {
//     createScene();
// }

// const createScene = () => {
//     WIDTH = window.innerWidth;
//     HEIGHT = window.innerHeight;
//     scene = new THREE.Scene();
//     aspectRatio = WIDTH / HEIGHT;
//     fieldOfView = 60;
//     camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
//     camera.position.x = 0;
//     camera.position.y = 100;
//     camera.position.z = 200;
//     renderer = new THREE.WebGLRenderer({
//         alpha: true,
//         antialias: true
//     });
//     renderer.setSize(WIDTH, HEIGHT);
//     renderer.shadowMap.enabled = true;

//     container = document.getElementById('world');
//     container.appendChild(renderer.domElement);
// };

// init();