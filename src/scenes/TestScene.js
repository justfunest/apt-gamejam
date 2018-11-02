import Drink from '../sprites/Drink';

class TestScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'TestScene'
        });
    }

    create() {
        this.drink = new Drink({
            scene: this,
            key: 'drink',
            x: 100,
            y: 100
        })
    }
}

export default TestScene;