import ObjectLoader from './ObjectLoader.js';

class Plane {
    constructor(path, material, objectFile, planeScaleSize = {}, planePosition = {}) {
        this.path = path;
        this.material = material;
        this.objectFile = objectFile;
        this.planeScaleSize = planeScaleSize;
        this.planePosition = planePosition;

        this.object = this.loadPlaneObject();        
    }

    loadPlaneObject() {
        const objectLoader = new ObjectLoader(`../assets/objects/`, `airplane_inside.mtl`, `airplane_inside.obj`, this.planeScaleSize, this.planePosition);
        setTimeout(() => {
            this.object = objectLoader.object;
            return this.object;
        }, 1000);
    }

};
export default Plane;