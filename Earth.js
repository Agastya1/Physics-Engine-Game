class Earth extends BasePlanet{
    constructor(x,y,r){
        super(x,y,r)
        this.image = loadImage("Images/Earth.png");

    }
    display(){
        super.display();
    }
}