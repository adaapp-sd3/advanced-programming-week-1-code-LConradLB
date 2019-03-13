class Crop {
    constructor(type, field, x, y, image) {
        this.type = type
        // Get the image based on the name of the field
        this.image = image
        this.health = 0
        this.x = x
        this.y = y
        this.birthstamp = millis() / 1000
        this.width = 1
        this.height = 1
        this._healthySize = 30

        // Draw the crop when it's created
        this.draw()
    }

    static plant(cropName, x, y){
        switch(cropName){
            case "Carrot": return new Carrot(x,y);
            case "Wheat" : return new Wheat(x,y); 
            case "Pumpkin" : return new Pumpkin(x,y);
            default: return;
        }
    }

    getAge() {
        // return the amount of time it's been alive
        return millis() / 1000 - this.birthstamp
    }

    draw() {
        // set a width for the image based on its age
        var width;
        var height;
        if (this.getAge() < this._healthySize ) {
            width = this.width * this.getAge()
            height = this.height * this.getAge()
        } else {
            width = 30;
            height = 30;
        }
 
        image(
            this.image,
            this.x,
            this.y,
            width,
            height
        )
    }
}