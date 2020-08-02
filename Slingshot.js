class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 50
        }
        this.pointB = pointB;

        this.launch = Constraint.create(options);
        World.add(world, this.launch);
        
    }
    attach(body){
        this.launch.bodyA = body;
    }
    
    fly(){
        this.launch.bodyA = null;
    }
    display(){
        if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            fill("blue");
            
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}