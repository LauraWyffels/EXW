class Cube {
    constructor() {
        this.cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        this.cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xe79d9f });
        this.cube = new THREE.Mesh(this.cubeGeometry, this.cubeMaterial);
    }
}

export default Cube;