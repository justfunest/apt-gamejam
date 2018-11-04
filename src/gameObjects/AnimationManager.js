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
        for (let animationId in ANIMATIONS) {
            if (ANIMATIONS.hasOwnProperty(animationId)) {
                let animation = ANIMATIONS[animationId];
                scene.load.multiatlas(animationId, animation.json, animation.dir);
            }
        }
    }
}

export default AnimationManager;