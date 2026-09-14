let squares=[];
let isDown=false;

let TopY;
let BottomY;

function setup() {
  createCanvas(1200, 700);
  TopY=height/6;
  BottomY=random(height / 2, height - 50);
  //squares.push(new Square(width/6, TopY, 30));
  
   for (let col = 0; col <5; col++){
	for (let row = 0; row<1; row++){
		let x = 100 + col*60;
		let y = TopY + row*50;
		squares.push(new Square(x, y, 30, col+1))

	}
  }
  
}

function draw() {
  background(0);

  
   for (let s of squares){
	s.shift();
	s.display();
	}

}
		 



function mousePressed(){
	isDown = !isDown;
	
	
	
	let targetY;
	if(isDown){
		targetY=BottomY;
		for(let s of squares){
		s.changeColor(232, 27, 35);

		}
		}else{
			targetY=TopY;
			for(let s of squares){
		s.changeColor(0, 174, 243);

		}
		}
	
	for(let s of squares){
		s.setTarget(s.pos.x, targetY);

		}
}
	//for (let i = 0; i < squares.length; i += 1) {
    //squares[i].setTarget(squares[i].pos.x, targetY);
	
	
	//for (let i = 0; i<vectors.length; i++){
	//	vectors[i].setTarget(vectors[i].pos.x, targetY);
		 
