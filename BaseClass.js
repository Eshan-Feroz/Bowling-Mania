class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':2.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        //pop();
      }
}