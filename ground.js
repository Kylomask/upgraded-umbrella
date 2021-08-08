class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);

    var options = {
      bodyA:body1,
      bodyB:body2,
      pointB:{x:this.pointA, y:this.pointB}
    }
  }

  show() {
    let pos = this.body.position;

    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
}
