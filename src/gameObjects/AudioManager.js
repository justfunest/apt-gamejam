import {AUDIO_STATE} from '../config/config';

class AudioManager {
    constructor(scene, state = AUDIO_STATE) {
        this.state = state;
        scene.sound.add('slurp')
    }

    static loadResources(scene) {
        AUDIO_STATE.resources.forEach( resource => {
            scene.load.audio(resource.id, resource.filename)
        })
    }
}

export default AudioManager;