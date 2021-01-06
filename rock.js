class Rock{
    constructor(x,y,r){
        var options={
            IsStatic:true
        }
        
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r*2, options)
        this.image=loadImage("stone.png")
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.x,this.y, this.r,this.r);
       
 
        
    }
}