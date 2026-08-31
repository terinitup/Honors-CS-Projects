let squares=[];

function setup() {
  createCanvas(windowWidth, windowHeight);

  let size=60;
  let spacing = 20;
  let xstart = width/5;
  let ystart = height/5;
  
  
  for (let r= 0; r<5; r++){
	for (let c=0; c<4; c++){
		let x = xstart + c*(size+spacing)
		let y = ystart + r*(size+spacing)
		squares.push(new Square(x, y, size, c));
	}
	
	}
}

function draw() {
  background(205);

  fill(0);
  textAlign(CENTER);
  textSize(20);
  text("Click me!", width/10, height/2);
  
  for (let i = 0; i<squares.length; i++){
	squares[i].display();
	}
}
	  

  //for (let s in squares)
    //squares[s].display();
    

//function mousePressed() {
  //squares.push(new Square(mouseX, mouseY));
//}
