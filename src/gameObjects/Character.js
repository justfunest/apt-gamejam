

export const INITIAL_STATE = {
    soberness: {
        max : 500,
        current: 500,
        decayRate: 0.1
    },
    position: {
        x: 700,
        y: 300
    },
    alive : true,
    sprites: {
        init: 'character'
    }
};
import HealthBar from '../gameObjects/HealthBar'
class Character extends Phaser.GameObjects.Sprite {
    constructor(scene, type, state = INITIAL_STATE) {
        super(scene, type);
        this.state = state;
        this.name = 'character';
        this.sprite = scene.add.sprite(this.state.position.x, this.state.position.y, 'character');

        this.masksprite = scene.add.image(this.state.position.x, this.state.position.y, 'character').setVisible(false);
        this.mask = this.masksprite.createBitmapMask();
        this.sprite.setMask(this.mask);

        this.bar = new HealthBar(scene, this.state.position.x + this.sprite.width/2 + 20, this.state.position.y - this.sprite.height/2, this.state.soberness.max, this.state.soberness.current)
        //0xF0AF6B
        let rect = new Phaser.Geom.Rectangle(this.state.position.x + this.sprite.width/2 + 20, this.state.position.y - this.sprite.height/2, 40, this.sprite.height);
        let graphics = scene.add.graphics({ fillStyle: { color: 0x66ff66 } });
        graphics.fillRectShape(rect);

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
        this.masksprite.x += 0.1
        this.bar.update(this.state.soberness.current);

        //console.log(this.state.soberness.current)
    }

}

export default Character;