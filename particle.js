class Particles{
 constructor(x, y) {
    var options = {
        restitution: 4,
        friction: 0,
        isStatic:true
    }
    this.r = 10;
    this.body = Bodies.circle(x, y, this.r, options);
    this.colour=colour(random(0,255),random(0,255),random(0,255));
    World.add(world, this.body);
  
 
 }
 push();

 rotate(angle);
 imageMode(CENTER);
 noStroke();
 colour=colour(random(0,255),random(0,255),random(0,255));
 ellipseMode(RADIUS);
 

 pop();
}


