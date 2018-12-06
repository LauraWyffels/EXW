class ObjectLoader {
    constructor(path, material, objectFile, {x: scaleX = 1, y: scaleY = 1, z: scaleZ = 1} = {}, {x: posX = 0, y: posY = 0, z: posZ = 0} = {}) {
        this.path = path;
        this.material = material;
        this.objectFile = objectFile;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.scaleZ = scaleZ;
        this.posX = posX;
        this.posY = posY;
        this.posZ = posZ;

        this.mtlLoader = new THREE.MTLLoader();
        this.objLoader = new THREE.OBJLoader(); 

        this.object = this.loadObject();    
    }

    loadObject() {
        this.mtlLoader.setTexturePath(this.path);
        this.mtlLoader.setPath(this.path);
        this.mtlLoader.load(this.material, materials => {
            materials.preload();

            this.objLoader.setMaterials(materials);
 
            this.objLoader.setPath(this.path);
            this.objLoader.load(this.objectFile, object => {
                object.scale.set(this.scaleX, this.scaleY, this.scaleZ);
                object.position.set(this.posX, this.posY, this.posZ);
                this.object = object;
                return this.object;
            });
        });
    }
        
}

export default ObjectLoader;