export default class Drink extends Phaser.GameObjects.GameObject {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
    }
}