import HealthBar from '../gameObjects/HealthBar'
import {CHARACTER_STATE} from "../config/config";
import {ANIMATIONS} from "../config/config";

class Character extends Phaser.GameObjects.Sprite {
    constructor(scene, type, state = CHARACTER_STATE) {
        super(scene, type);
        this.scene = scene;
        this.state = state;
        this.sprite = scene.add.sprite(this.state.position.x, this.state.position.y, 'angry', 'k01.png');
        this.sprite.setScale(0.5, 0.5);
        this.addHealthBar();
        this.animate(ANIMATIONS.drunk.name)
    }

    addHealthBar() {
        let healthXPos = this.state.position.x;
        let healthYPos = this.state.position.y - this.sprite.height/2 - 50;
        this.healthBar = new HealthBar(this.scene, healthXPos, healthYPos, this.state.soberness.max, this.state.soberness.current)
    }

    animate(id) {
        this.sprite.anims.play(id)
    }

    drink(recipie) {
        this.state.soberness.current += recipie.power;
        if (this.state.soberness.current > this.state.soberness.max) {
            this.state.soberness.current = this.state.soberness.max;
        }
    }

    getSober() {
        this.state.soberness.current -= this.state.soberness.decayRate;
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
        this.healthBar.update(this.state.soberness.current);
    }

}

export default Character;