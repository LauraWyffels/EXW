import Plane from './classes/Plane.js';
import Cockpit from './classes/Cockpit.js';

{
    const WIDTH = window.innerWidth, 
        HEIGHT = window.innerHeight,
        aspectRatio = WIDTH / HEIGHT,
        fieldOfView = 75;

    let scene, camera, nearPlane, farPlane, renderer, container;
    let plane, cockpit;

    let hemisphereLight, shadowLight, ambientLight;

    const createPlane = () => {
        // plane = new Plane();
        // plane.mesh.position.y = 0;
        // scene.add(plane.mesh);

        const mtlLoader = new THREE.MTLLoader();
        mtlLoader.setTexturePath('../assets/objects/');
        mtlLoader.setPath('../assets/objects/');
        mtlLoader.load('airplane_inside.mtl', (materials) => {
            materials.preload();

            const objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('../assets/objects/');
            objLoader.load('airplane_inside.obj', (object) => {
                scene.add(object);
        });
        });
    }

    const createCockpit = () => {
        cockpit = new Cockpit();
        cockpit.mesh.position.y = 1;
        scene.add(cockpit.mesh);
    }

    const loop = () => {
        requestAnimationFrame(loop);
        renderer.render(scene, camera);
    };

    const createScene = () => {
        scene = new THREE.Scene();
        nearPlane = 1;
        farPlane = 10000;
        camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        renderer.setSize(WIDTH, HEIGHT);
        renderer.autoClear = false;
        renderer.setClearColor(0x000000, 0.0);
        renderer.shadowMap.enabled = true;

        // Enable VR 
        const $container = document.getElementById(`world`);
        document.body.appendChild(WEBVR.createButton( renderer ));
        renderer.vr.enabled = true;
        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });
        $container.appendChild(renderer.domElement);
    };

    const createSky = () => {
        const skyGeometry = new THREE.BoxGeometry(WIDTH, HEIGHT, 300, 10, 2, 10);
        const skyMaterial = new THREE.MeshPhongMaterial({
            color: 0xff0000,
            wireframe: false,
            // opacity: 1,
            // transparent: true,
            side: THREE.BackSide
        });
        const sky = new THREE.Mesh(skyGeometry, skyMaterial);
        scene.add(sky);
    }

    const createLight = () => {
        hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9);
        shadowLight = new THREE.DirectionalLight(0xffffff, .9);
        ambientLight = new THREE.AmbientLight(0xdc8874, .4);

        shadowLight.position.set(150, 350, 350);
        shadowLight.castShadow = true;

        // shadowLight.shadow.camera.left = -400;
        // shadowLight.shadow.camera.right = 400;
        // shadowLight.shadow.camera.top = 400;
        // shadowLight.shadow.camera.bottom = -400;
        // shadowLight.shadow.camera.near = 1;
        // shadowLight.shadow.camera.far = 1000;
        // shadowLight.shadow.mapSize.width = 2048;
        // shadowLight.shadow.mapSize.height = 2048;
        scene.add(hemisphereLight);
        scene.add(shadowLight);
        scene.add(ambientLight);
    }

    const init = () => {
        createScene();
        createSky();
        createPlane();
        createLight();
        // createCockpit();
        
        loop();
    };

    init();
}