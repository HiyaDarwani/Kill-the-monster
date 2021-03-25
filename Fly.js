class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 400,
            frictionAir: 1
        }

        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly(){ 
        this.chain.bodyA = null
     }


    display(){

            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y)
            pop();
        
    }
    
}