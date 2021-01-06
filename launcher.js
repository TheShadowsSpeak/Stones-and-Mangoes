class Launch{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:17,
            stiffness:0.04
        }
        this.body=Matter.Constraint.create(options);
        World.add(world,this.body);
    }
    fly(){
        this.body.pointB=null;
    }
    display(){
        
        var posA=this.body.bodyA.position;
        var posB=this.body.pointB;
        stroke("white")
        strokeWeight(5)
        line(posA.x,posA.y,posB.x,posB.y);
        //console.log(this.body)
        

    }
}