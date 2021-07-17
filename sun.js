class Sun {
    constructor(x,y,r){
        var sun_options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,r,sun_options);
        this.width = r;
    
        this.image = loadImage("Images/Sun.png");

    }
    display(){
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.width);
    }
}