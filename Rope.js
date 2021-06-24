class Rope{
    constructor(body1,body2,pointA,pointB){
        this.pointA=pointA;
        this.pointB=pointB;

        var opt={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.pointA,y:this.pointB},
        }
        
        this.body=Matter.Constraint.create(opt.bodyA,opt.bodyB,pointA,opt.pointB,opt)
        World.add(world,this.body)
    }
    display(){
        push();
        strokeWeight(2);
        stroke(255);
        line(this.body.pointA.x,this.body.pointA.y,this.bodyB.pointB.x,this.bodyB.pointB.y);
        pop();
    }
}