import Drink from '../sprites/Drink';
import GameGridContainer from '../containers/GameGridContainer'

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
        });

        this.grid = new GameGridContainer({
            scene: this,
            x: 0,
            y: 0,
            children: []
        })
        console.log(this.grid);
    }
}

export default TestScene;