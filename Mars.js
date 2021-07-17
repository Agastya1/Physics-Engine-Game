class Mars extends BasePlanet{
    constructor(x,y,r){
        super(x,y,r)
        this.image = loadImage("Images/Mars.png");

    }
    display(){
        super.display();
    }
}