class Explosion {
  constructor() {

    const movementSpeed = 80;
    const totalObjects = 1000;
    const objectSize = 10;
    const sizeRandomness = 4000;
    const colors = [0xFF0FFF, 0xCCFF00, 0xFF000F, 0x996600, 0xFFFFFF];

    const dirs = [];
    const parts = [];
    const container = document.createElement(`div`);
    document.body.appendChild(container);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;

    const scene = new THREE.Scene();

    function ExplodeAnimation(x, y) {
      const geometry = new THREE.Geometry();

      for (let i = 0;i < totalObjects;i ++) {
        const vertex = new THREE.Vector3();
        vertex.x = x;
        vertex.y = y;
        vertex.z = 0;

        geometry.vertices.push(vertex);
        dirs.push({x: (Math.random() * movementSpeed) - (movementSpeed / 2), y: (Math.random() * movementSpeed) - (movementSpeed / 2), z: (Math.random() * movementSpeed) - (movementSpeed / 2)});
      }
      const material = new THREE.ParticleBasicMaterial({size: objectSize, color: colors[Math.round(Math.random() * colors.length)]});
      const particles = new THREE.ParticleSystem(geometry, material);

      this.object = particles;
      this.status = true;

      this.xDir = (Math.random() * movementSpeed) - (movementSpeed / 2);
      this.yDir = (Math.random() * movementSpeed) - (movementSpeed / 2);
      this.zDir = (Math.random() * movementSpeed) - (movementSpeed / 2);

      scene.add(this.object);

      this.update = function () {
        if (this.status == true) {
          let pCount = totalObjects;
          while (pCount --) {
            const particle = this.object.geometry.vertices[pCount];
            particle.y += dirs[pCount].y;
            particle.x += dirs[pCount].x;
            particle.z += dirs[pCount].z;
          }
          this.object.geometry.verticesNeedUpdate = true;
        }
      };

    }

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    renderer.render(scene, camera);
    parts.push(new ExplodeAnimation(0, 0));
    render();

    function render() {
      requestAnimationFrame(render);

      let pCount = parts.length;
      while (pCount --) {
        parts[pCount].update();
      }

      renderer.render(scene, camera);

    }


    window.addEventListener(`resize`, onWindowResize, false);



    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

    }



  }



}
export default Explosion;