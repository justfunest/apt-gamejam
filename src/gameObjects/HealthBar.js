class HealthBar {
    constructor(scene, x, y, max = 100, current = 100) {
        this.scale = {
            x:0.3,
            y:0.2
        }
        this.bar_empty = scene.add.sprite(x, y, 'healthbar_empty').setScale(this.scale.x, this.scale.y)
        this.bar_full = scene.add.sprite(x, y, 'healthbar_full').setScale(this.scale.x, this.scale.y)
        this.maskbar = scene.add.image(x, y, 'healthbar_mask').setScale(this.scale.x,this.scale.y).setVisible(false);

        this.mask = this.maskbar.createBitmapMask();
        this.startY = this.maskbar.y;
        this.bar_full.setMask(this.mask);
        this.max = max;
        this.current = current;
        this.text = scene.add.text(x, y, this.getText());
        this.text.x -= this.text.width/2;
        this.text.y -= this.text.height/2;

    }

    getText() {
        return Math.floor(this.current) + '/' + this.max;
    }
    update(current) {
        this.current = current;
        this.text.setText(this.getText());
        this.maskbar.y = this.startY + this.bar_full.displayHeight - (this.current / this.max * this.bar_full.displayHeight);
    }

}

export default HealthBar;