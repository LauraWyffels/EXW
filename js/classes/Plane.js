class Plane {
    constructor() {
        const geom = new THREE.CylinderGeometry(600, 600, 800, 40, 10);
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
export default Plane;