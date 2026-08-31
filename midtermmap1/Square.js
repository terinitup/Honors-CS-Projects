class Square {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vx = 0;
    this.vy = 0;
    this.c = color(0, 174, 243);
    //this.r = random(5, 30);
  }

  display() {
    noStroke();
    fill(this.c);
    square(this.x, this.y, this.size);

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < this.r || this.x > width - this.r) this.vx *= -1;
    if (this.y < this.r || this.y > width - this.r) this.vy *= -1;
  }
}
