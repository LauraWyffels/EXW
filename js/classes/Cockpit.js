class Cockpit {
    constructor() {
        const geom = new THREE.SphereGeometry(5, 32, 32);
        geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));

        const mat = new THREE.MeshBasicMaterial({
            color: 0xf2d4ca,
            transparent: true,
            opacity: .6,
            flatShading: true,
            wireframe: true
        });
        this.mesh = new THREE.Mesh(geom, mat);
    }

};
export default Cockpit;