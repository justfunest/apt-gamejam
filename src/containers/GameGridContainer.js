
export default class GameGridContainer extends Phaser.GameObjects.Container
{
    constructor(config) {
        super(config.scene, config.x, config.y, config.children);
        //this.grid = config.scene.add.grid();
        this.grid = new Phaser.GameObjects.Grid(config.scene, 100, 100, 100, 100, 20, 20, 0xff0000 );
        console.log(this.grid)
    }
}