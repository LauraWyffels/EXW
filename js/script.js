import Plane from './classes/Plane.js';
import Cockpit from './classes/Cockpit.js';

{
    const WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight,
        aspectRatio = WIDTH / HEIGHT,
        fieldOfView = 75;

    let scene, camera, nearPlane, farPlane, renderer, body;
    let plane, cockpit, sky;


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
                object.scale.y = -2;
                object.scale.x = 2;
                object.scale.z = 2;
                plane = object;
            });
        });

    }

    const createCockpit = () => {
        // cockpit = new Cockpit();
        // cockpit.mesh.position.y = 1;
        // scene.add(cockpit.mesh);

        const mtlLoader = new THREE.MTLLoader();
        mtlLoader.setTexturePath('../assets/objects/');
        mtlLoader.setPath('../assets/objects/');
        mtlLoader.load('plane.mtl', (materials) => {
            materials.preload();

            const objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('../assets/objects/');
            objLoader.load('plane.obj', (object) => {
                scene.add(object);
                object.scale.set(0.12, 0.12, -0.12);
                object.position.set(-1, -20, -88);
                cockpit = object;
            });
        });
    }

    const loop = () => {
        renderer.render(scene, camera);

        // test walking 
        if(body.position.z > 0) {
            body.position.z -= .15;
        } 
    }

    const createBody = camera => {
        body = new THREE.Object3D;
        scene.add(body);
        body.position.z = 100;
        body.add(camera);
    }

    const createScene = () => {
        scene = new THREE.Scene();
        nearPlane = 1;
        farPlane = 100000;
        camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        createBody(camera);

        renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        renderer.setSize(WIDTH, HEIGHT);
        renderer.autoClear = false;
        renderer.setClearColor(0xff0000, 0.0);
        renderer.shadowMap.enabled = true;

        // Enable VR 
        const $container = document.getElementById(`world`);
        document.body.appendChild(WEBVR.createButton(renderer));
        renderer.vr.enabled = true;
        renderer.setAnimationLoop(() => loop());
        $container.appendChild(renderer.domElement);  
    };

    const createSky = () => {
        const skyGeometry = new THREE.CubeGeometry(100000, 10000, 100000);
        const skyMaterials =  [
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("../assets/images/skybox/front.JPG"), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("../assets/images/skybox/back.JPG"), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("../assets/images/skybox/up.JPG"), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("../assets/images/skybox/down.JPG"), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("../assets/images/skybox/right.JPG"), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("../assets/images/skybox/left.JPG"), side: THREE.DoubleSide})
        ]

        const skyMaterial = new THREE.MeshFaceMaterial(skyMaterials);
        sky = new THREE.Mesh(skyGeometry, skyMaterial);
        scene.add(sky);
    }

    const createLight = () => {
        hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, .4);
        shadowLight = new THREE.DirectionalLight(0xffffff, .9);
        ambientLight = new THREE.AmbientLight(0xaaaadd, .3);

        shadowLight.position.set(350, 350, 350);
        shadowLight.castShadow = true;

        scene.add(hemisphereLight);
        scene.add(shadowLight);
        scene.add(ambientLight);
    }

    const init = () => {
        createScene();
        createSky();
        createPlane();
        createCockpit();
        createLight();
    };

    init();
}