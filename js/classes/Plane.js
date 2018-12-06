import ObjectLoader from './ObjectLoader.js';

class Plane {
    constructor(planeBodyObjectDetails, cockpitObjectDetails) {
        this.planeBodyObjectDetails = planeBodyObjectDetails;
        this.cockpitObjectDetails = cockpitObjectDetails;
        this.plane = this.loadInside();
        this.cockpit = this.loadCockpit();;
    }

    loadInside() {
        const objectLoader = new ObjectLoader(this.planeBodyObjectDetails);
        setTimeout(() => {
            this.plane = objectLoader.object;
            return this.plane
        }, 2000);
    }

    loadCockpit() {
        const objectLoader = new ObjectLoader(this.cockpitObjectDetails);
        setTimeout(() => {
            this.cockpit = objectLoader.object;
            return this.cockpit
        }, 2000);
    }

};
export default Plane;