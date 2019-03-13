
class Pumpkin extends Crop {
    
    constructor( x, y) {
        super("pumpkin", null, x, y, loadImage('./images/pumpkin.png'))
        this.image = loadImage('./images/pumpkin.png')
        this.health = 0
        this.x = x
        this.y = y
        this.birthstamp = millis() / 1000
        this.width = 1
        this.height = 1
        this._healthySize = 40

        // Draw the crop when it's created
        draw()
    }

    draw(){
        super.draw()
    }
}
