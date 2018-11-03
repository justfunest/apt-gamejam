import {ANIMATIONS} from '../config/config';

class AnimationManager {
    constructor(scene) {
        this.scene = scene;

        for (let animationId in ANIMATIONS) {
            if (ANIMATIONS.hasOwnProperty(animationId)) {
                let animation = ANIMATIONS[animationId];
                this.scene.anims.create({
                    key: animationId,
                    frames: this.scene.anims.generateFrameNames(animationId, animation.frames),
                    frameRate: animation.frameRate,
                    repeat: animation.repeat
                });
            }
        }
    }

    static loadResources(scene) {
        scene.load.multiatlas('angry', 'assets/images/kuri0/kuri0.json', 'assets/images/kuri0');
        scene.load.multiatlas('happy', 'assets/images/happy/onnelik0.json', 'assets/images/happy');
        scene.load.multiatlas('drunk', 'assets/images/drunk/koikumine0.json', 'assets/images/drunk');
    }
}

export default AnimationManager;