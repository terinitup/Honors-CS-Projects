let squares=[];
let isDown=false;

let TopY;
let BottomY;

function setup() {
  createCanvas(1200, 800);
  TopY=height/6;
  BottomY=height-(height/random(2,8));
  //squares.push(new Square(width/6, TopY, 30));
  
  for (let col = 0; col <5; col++){
	  for (let row = 0; row<1; row++){
		  let x = 300 + col*60;
		 let y = TopY + row*50;
		 squares.push(new Square(x, y, 30))
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
		 



function keyPressed(){
	isDown = !isDown;
	
	let targetY;
	if(isDown){
		targetY=BottomY;
		}else{
			targetY=TopY;
		}
	
	for(let s of squares){
		s.setTarget(s.pos.x, targetY);
		}
}
	//for (let i = 0; i < squares.length; i += 1) {
    //squares[i].setTarget(squares[i].pos.x, targetY);
	
	
	//for (let i = 0; i<vectors.length; i++){
	//	vectors[i].setTarget(vectors[i].pos.x, targetY);
		 
