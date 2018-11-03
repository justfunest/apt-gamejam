import HealthBar from '../gameObjects/HealthBar'

export const INITIAL_STATE = {
    soberness: {
        max : 500,
        current: 500,
        decayRate: 0.05
    },
    position: {
        x: 900,
        y: 400
    },
    alive : true,
    sprites: {
        init: 'character'
    }
};

class Character extends Phaser.GameObjects.Sprite {
    constructor(scene, type, state = INITIAL_STATE) {
        super(scene, type);
        this.state = state;
        this.name = 'character';
        this.sprite = scene.add.sprite(this.state.position.x, this.state.position.y, 'character');
        let healthXPos = this.state.position.x;
        let healthYPos = this.state.position.y - this.sprite.height/2 - 50;
        this.healthBar = new HealthBar(scene, healthXPos, healthYPos, this.state.soberness.max, this.state.soberness.current)

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