class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
	this.c = color(random(255), random(255), random(255));    
	this.r = random(20, 40);
	this.rt=random(30, 120);
    //floor() calculates the closest integer value that is less than 
    //or equal to the value of a number
    this.n = floor(random(5, 13));
    this.ra = TWO_PI / this.n;
  }

  display() {
	push();
    noStroke();
    
    translate (this.x, this.y);
   
	fill(this.c);
    for(let l=0; l<this.n; l++){
		rotate(this.ra);
		ellipse(0, this.rt/2, this.r, this.rt);
	}
	
	fill(255);
	circle(0, 0, 30);
	
	this.x += this.vx;
    this.y += this.vy;

    if (this.x < this.r || this.x > width - this.r) this.vx *= -1;
    if (this.y < this.r || this.y > width - this.r) this.vy *= -1;
	
	pop();
}

   
 
}
