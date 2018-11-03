class HealthBar {
    constructor(scene, x, y, max = 100, current = 100) {
        this.scale = {
            x:0.3,
            y:0.2
        }
        this.bar = scene.add.sprite(x, y, 'healthbar').setScale(this.scale.x, this.scale.y)
        this.maskbar = scene.add.image(x, y, 'healthbar').setScale(this.scale.x,this.scale.y).setVisible(false);
        this.mask = this.maskbar.createBitmapMask();
        this.startX = this.maskbar.x;
        this.bar.setMask(this.mask);
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
        this.maskbar.x = this.startX - this.bar.width*this.scale.x + (this.current / this.max * this.bar.width* this.scale.x);
    }

}

export default HealthBar;