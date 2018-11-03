import {IMAGE_STATE} from '../config/config';

class ImageManager {
    constructor(scene, state = IMAGE_STATE) {
        this.state = state;
    }

    static loadResources(scene) {
        IMAGE_STATE.resources.forEach( resource => {
            scene.load.image(resource.id, resource.filename)
        })
    }
}

export default ImageManager;