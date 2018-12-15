import Clock from './classes/Clock.js';
import Explosion from './classes/Explosion.js';



{
    const WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight

    let scene, camera, renderer, body;
    let sky = document.querySelector('#sky');

    let hemisphereLight, shadowLight, ambientLight;


    // var cockpit = document.querySelector('#cockpit');


    AFRAME.registerComponent('example-mesh', {
        init: function () {
            var plane = document.querySelector('#plane').object3D;
            plane.setObject3D('mesh', new THREE.Mesh());
            plane.getObject3D('mesh');  // Returns THREE.Mesh that was just created.
        }
    });

    const createClock = () => {
        clock = new Clock();
    }

    const createExplosion = () => {
        clock = new Explosion();

    }

    const loop = () => {
        renderer.render(scene, camera);

        // test walking
        if (body.position.z > -135) {
            body.position.z -= ((1 * (135 + body.position.z)) / 100);
        }
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


    };

    const createSky = () => {
        const skyGeometry = new THREE.CubeGeometry(100000, 10000, 100000);
        const skyMaterials = [
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("./assets/images/skybox/front.JPG"), side: THREE.DoubleSide }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("./assets/images/skybox/back.JPG"), side: THREE.DoubleSide }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("./assets/images/skybox/up.JPG"), side: THREE.DoubleSide }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("./assets/images/skybox/down.JPG"), side: THREE.DoubleSide }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("./assets/images/skybox/right.JPG"), side: THREE.DoubleSide }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("./assets/images/skybox/left.JPG"), side: THREE.DoubleSide })
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


    const addObjectsToScene = () => {
        createLight();
        // createClock();
        // createExplosion();
    }

    const init = () => {
        // 1. Create basic scene & preload .obj-files first
        createScene();
        createSky();

        // 2. When everything is loaded, then add everything to the scene
        setTimeout(() => {
            addObjectsToScene();
        }, 2000)
    };

    init();
}