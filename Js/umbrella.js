class Umbrella {
    constructor(x, y, radius) {
        var options = {
            isStatic : true,
            restitution : 0.5
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("images/walking_1.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 400, 400);
        pop();
    }
}