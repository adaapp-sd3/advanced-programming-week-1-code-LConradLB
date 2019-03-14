
class Wheat extends Crop {

    constructor( x, y) {
        super("wheat", null, x, y, loadImage('./images/wheat.png'))
        this.image = loadImage('./images/wheat.png') 
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
