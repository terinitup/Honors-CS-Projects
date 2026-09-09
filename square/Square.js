class Square {
  constructor(x, y, size) {
    this.pos = createVector(x, y);
    this.size = size;
    this.vel = createVector(0,0);
    
    this.c = color(0, 174, 243);
    this.target = createVector(x, y);
  }

  display() {
   noStroke();
   fill(this.c);
   rectMode(CENTER);
   square(this.pos.x, this.pos.y, this.size);
   
   //this.pos.add(this.vel);
   
   //this.x += this.vx;
   //this.y += this.vy;


  }
  
  setTarget(tx, ty){
	  this.target.set(tx, ty);
  }
	  
  
  shift() {
	  
	  this.pos.lerp(this.target, 0.05); 
	  //= p5.Vector.lerp(this.pos, this.target, 0.05);
	 
	  
  }
  
  
 hover(){
	 
	 
	
	
	
	}
}
