import Plane from './classes/Plane.js';
// import ObjectLoader from './classes/ObjectLoader.js';
import Clock from './classes/Clock.js';
import Explosion from './classes/Explosion.js';

{
    const WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight

    let scene, camera, renderer, body;
    let plane, sky, clock;

    let hemisphereLight, shadowLight, ambientLight;

    const createClock = () => {
        clock = new Clock();
     }

    const createExplosion = () => {
        clock = new Explosion();

    }

    const createPlane = () => {
        const planeScaleSize = {
            x: 2,
            y: -2,
            z: 2
        }
        const planePosition = {
            x: 0,
            y: 0,
            z: 0
        }

        const cockPitSizes = {
            x: .084,
            y: .084,
            z: -.12
        }
        const cockPitPosition = {
            x: 0,
            y: -9.5,
            z: -111
        }

        const planeBodyObjectDetails = {
            path: `../assets/objects/`, 
            material: `airplane_inside.mtl`, 
            objectFile: `airplane_inside.obj`, 
            scaleSize: planeScaleSize, 
            position: planePosition
        }

        const cockpitObjectDetails = {
            path: `../assets/objects/`, 
            material: `plane.mtl`, 
            objectFile: `plane.obj`, 
            scaleSize: cockPitSizes, 
            position: cockPitPosition
        }

        const planeObject = new Plane(planeBodyObjectDetails, cockpitObjectDetails);
        setTimeout(() => {
            // --------------------------------------- Korter proberen doen ---------------------------------------
            plane = new THREE.Group();
            const planeBody = planeObject.plane;
            plane.add(planeBody);
            const cockpit = planeObject.cockpit;
            plane.add(cockpit);
            scene.add(plane);
        }, 2000);
    }

    const loop = () => { 
        renderer.render(scene, camera);
    }

    const createBody = camera => {
        body = new THREE.Object3D;
        scene.add(body);
        body.add(camera);
    }

    const createScene = () => {
        scene = new THREE.Scene();
        const nearPlane = 1;
        const farPlane = 100000;
        const aspectRatio = WIDTH / HEIGHT;
        const fieldOfView = 75;
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
        const skyMaterials = [
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("../assets/images/skybox/front.JPG"), side: THREE.DoubleSide }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("../assets/images/skybox/back.JPG"), side: THREE.DoubleSide }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("../assets/images/skybox/up.JPG"), side: THREE.DoubleSide }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("../assets/images/skybox/down.JPG"), side: THREE.DoubleSide }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("../assets/images/skybox/right.JPG"), side: THREE.DoubleSide }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("../assets/images/skybox/left.JPG"), side: THREE.DoubleSide })
        ]

        const skyMaterial = new THREE.MeshFaceMaterial(skyMaterials);
        const sky = new THREE.Mesh(skyGeometry, skyMaterial);
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
        createLight();
        createClock();
        createExplosion();
    };

    init();
}