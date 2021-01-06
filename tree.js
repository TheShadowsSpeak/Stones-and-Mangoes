class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.y=y;
        this.x=x;
        
            this.width=width;
            this.height=height;
            World.add(world,this.body)
            this.image=loadImage("tree.png")
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.x, this.y,this.width,this.height);
      
        

    }
}