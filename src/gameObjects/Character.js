import HealthBar from '../gameObjects/HealthBar'
import {CHARACTER_STATE} from "../config/config";
import {ANIMATIONS} from "../config/config";

class Character extends Phaser.GameObjects.Sprite {
    constructor(scene, type, state = CHARACTER_STATE) {
        super(scene, type);
        this.scene = scene;
        this.state = state;
        this.sprite = scene.add.sprite(this.state.position.x, this.state.position.y, 'angry', 'k01.png');
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
        let sounds = ['slurp_1','slurp_2','burp']
        this.scene.sound.play(sounds[this.getRndInteger(0, sounds.length)]);
        let keys = Object.keys(ANIMATIONS);
        let rnd = Math.floor(Math.random() * (keys.length-1))
        this.animate(ANIMATIONS[keys[rnd]].name)
    }

    getSober() {
        this.state.soberness.current -= this.state.soberness.decayRate;
        if (this.state.soberness.current < 0) {
            this.state.soberness.current = 0;
        }
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
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