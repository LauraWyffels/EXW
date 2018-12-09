
class Plane {
    constructor(planeBodyObjectLoader, planeCockpitObjectLoader) {
        this.planeInside = planeBodyObjectLoader.object;
        this.cockpit = planeCockpitObjectLoader.object;
        this.plane = this.createTotalPlane();
    }

    createTotalPlane() {
        const planeGroup = new THREE.Group();
        planeGroup.add(this.planeInside);
        planeGroup.add(this.cockpit);
        this.plane = planeGroup;
        return this.plane;
    }

};
export default Plane;