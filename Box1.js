class Box1 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image= loadImage("sprites/bowlingpin.png");
      this.Visibility = 255;
    }
    display(){
      //console.log(this.body.speed);
      if(this.body.speed < 3){
        //imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      }
      else{
        World.remove(world, this.body);
        // push();
        this.Visibility = this.Visibility - 5;
        //tint(255,this.Visibility);
        // image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        // pop();
      }
     }
   
     score(){
      if (this.Visibility < 0 && this.Visibility > -50){
        score++;
      }
    }
    }
   
   