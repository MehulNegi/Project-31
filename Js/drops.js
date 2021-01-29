class Drops {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.9,
            friction: 0.01,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;
        World.add(world, this.body);
    }
    Update(){     
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,700), y:random(0,600)})
        }
    }

    Drop(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}
