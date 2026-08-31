let flowers = [];

function setup(){
	createCanvas(800,800);
}

function draw(){
	background(255);
	
	for (let f in flowers)
		flowers[f].display();

}

function mousePressed(){
	flowers.push(new Flower(mouseX, mouseY));
}

