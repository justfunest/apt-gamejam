class HealthBar {
    constructor(scene, x, y, max = 100, current = 100) {
        this.bar = scene.add.sprite(x, y, 'healthbar').setScale(0.3, 0.3)
        this.maskbar = scene.add.image(x, y, 'healthbar').setScale(0.3,0.3).setVisible(false);
        this.mask = this.maskbar.createBitmapMask();
        this.startX = this.maskbar.x;
        this.bar.setMask(this.mask);
        this.max = max;
        this.current = current;

    }

    update(current) {
        this.current = current;
        this.maskbar.x = this.startX - this.bar.width + (this.current / this.max * this.bar.width);
    }

}

export default HealthBar;