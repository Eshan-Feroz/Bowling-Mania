class Box2 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      //this.image = loadImage("sprites/wood1.png");
      this.Visibility = 255;
    }
    display(){
        //var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        
        //pop();
        //console.log(this.body.speed);
        if(this.body.speed < 3){
          rectMode(CENTER);
        fill(84, 193, 68);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility - 5;
          tint(255, this.Visibility);
          //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop();
        }
      }
  };
  