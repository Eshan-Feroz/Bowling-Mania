class Box4 extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bowlingpin.png");
  }


display(){
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image, 0, 0, this.width, this.height);
  pop();
}

}
