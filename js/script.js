import Plane from './classes/Plane.js';
import Cockpit from './classes/Cockpit.js';

{

    let scene,
        WIDTH, HEIGHT,
        camera, fieldOfView, aspectRatio, nearPlane, farPlane, renderer, container;
    let plane;
    let cockpit;
    let hemisphereLight, shadowLight, ambientLight;


    const init = () => {


        createScene();
        // createPlane();
        createCockpit();

        loop();
    };

    const createPlane = () => {
        plane = new Plane();
        plane.mesh.position.y = 0;
        scene.add(plane.mesh);
    }

    const createCockpit = () => {
        cockpit = new Cockpit();
        cockpit.mesh.position.y = 1;
        scene.add(cockpit.mesh);
    }

    const createScene = () => {



        WIDTH = window.innerWidth;
        HEIGHT = window.innerHeight;
        scene = new THREE.Scene();
        aspectRatio = WIDTH / HEIGHT;
        fieldOfView = 60;
        nearPlane = 1;
        farPlane = 10000;
        camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        camera.position.x = 0;
        camera.position.y = 100;
        camera.position.z = 200;

        renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        renderer.setSize(WIDTH, HEIGHT);
        renderer.shadowMap.enabled = true;

        document.body.appendChild(WEBVR.createButton(renderer));
        renderer.vr.enabled = true;
        renderer.setAnimationLoop(function () {
            renderer.render(scene, camera);
        });

        container = document.getElementById('world');
        container.appendChild(renderer.domElement);
    };

    // const createLight = () => {

    //     hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9);
    //     shadowLight = new THREE.DirectionalLight(0xffffff, .9);
    //     ambientLight = new THREE.AmbientLight(0xdc8874, .4);


    //     shadowLight.position.set(150, 350, 350);

    //     // shadowLight.castShadow = true;

    //     // shadowLight.shadow.camera.left = -400;
    //     // shadowLight.shadow.camera.right = 400;
    //     // shadowLight.shadow.camera.top = 400;
    //     // shadowLight.shadow.camera.bottom = -400;
    //     // shadowLight.shadow.camera.near = 1;
    //     // shadowLight.shadow.camera.far = 1000;
    //     // shadowLight.shadow.mapSize.width = 2048;
    //     // shadowLight.shadow.mapSize.height = 2048;
    //     scene.add(hemisphereLight);
    //     scene.add(shadowLight);
    //     scene.add(ambientLight);
    // }



    const loop = () => {
        requestAnimationFrame(loop);


        renderer.render(scene, camera);
    };

    init();
}