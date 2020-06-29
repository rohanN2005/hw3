class Slingshot{
    constructor(body,point){
        var options = {
            stifness: 0.05,
            length: 10,
            bodyA:body,
            pointB:point,
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        console.log(this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(5);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    fly(){
        this.sling.bodyA = null;
    }
}
