class ObjectLoader {
    constructor({path, material, objectFile, scaleSize = {x: x = 1, y: y = 1, z: z = 1} = {}, position = {x: x = 0, y: y = 0, z: z = 0} = {}} ) {
        this.path = path;
        this.material = material;
        this.objectFile = objectFile;
        this.scaleX = scaleSize.x;
        this.scaleY = scaleSize.y;
        this.scaleZ = scaleSize.z;
        this.posX = position.x;
        this.posY = position.y;
        this.posZ = position.z;

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