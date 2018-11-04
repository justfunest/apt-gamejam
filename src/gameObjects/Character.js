import * as lodash from 'lodash'
import HealthBar from '../gameObjects/HealthBar'
import {CHARACTER_STATE} from "../config/config";
import {ANIMATIONS} from "../config/config";

class Character extends Phaser.GameObjects.Sprite {
    constructor(scene, type, state = CHARACTER_STATE) {
        super(scene, type);
        this.scene = scene;
        this.state = state;
        this.sprite = scene.add.sprite(this.state.position.x, this.state.position.y, 'drunk', 'k01.png');
        this.sprite.setScale(0.65, 0.65);
        this.addHealthBar();
    }

    addHealthBar() {
        let x = this.state.position.x;
        let y = this.state.position.y -this.sprite.displayHeight/2;
        this.healthBar = new HealthBar(this.scene, x, y, this.state.soberness.max, this.state.soberness.current)
    }

    animate(id) {
        this.sprite.anims.play(id)
    }

    updateAnimations() {
        if(!this.sprite.anims.isPlaying) {
            this.animate(ANIMATIONS.drunk.name)
        }
    }
    drink(recipie) {
        this.state.soberness.current += recipie.power;
        if (this.state.soberness.current > this.state.soberness.max) {
            this.state.soberness.current = this.state.soberness.max;
        }

        let playSound = lodash.sample(this.state.sounds.drink);
        console.log({sound: playSound})
        this.scene.sound.play(playSound);


        let animationName = lodash.sample(this.state.animations.drink);
        console.log({animationName: animationName})
        this.animate(animationName)

    }

    getSober() {
        this.state.soberness.current -= this.state.soberness.decayRate;
        if (this.state.soberness.current < 0) {
            this.state.soberness.current = 0;
        }
    }

    checkIsAlive() {
        if (this.state.soberness.current <= 0) {
            this.state.alive = false;
        }
    }

    update(time, delta) {
        if (this.state.alive) {
            this.getSober();
            this.checkIsAlive();
        }
        this.updateAnimations();
        this.healthBar.update(this.state.soberness.current);
    }

}

export default Character;