//P5: INTERACTIVITY TUTORIAL



// //SKETCH 0: PRINTING MOUSEX AND MOUSEY VALUES TO THE CONSOLE
// 
// function draw() {
//   frameRate(12);
//   println("mouseX is: " + mouseX + "  mouseY is: " + mouseY);
// }
// 



// //SKETCH 1: CIRCLE MAPPED DIRECTLY TO CURSOR
// function setup() {
//   createCanvas(640, 480);
//   noStroke();
// }
// 
// function draw() {
//   background(126);
//   ellipse(mouseX, mouseY, 33, 33);
// }



// //SKETCH 2: CIRCLE USING ADDITION AND SUBSTRACTION TO CREATE OFFSETS
// function setup() {
//   	createCanvas(640, 480);
//   	noStroke();
// }
// 
// function draw() {
//   	background(126);
//   	ellipse(mouseX, mouseY, 33, 33); // Top circle, follows the cursor
//   	ellipse(mouseX+20, mouseY+40, 33, 33); // Middle circle, follows cursor offset by +20
// 	ellipse(mouseX-20, mouseY-40, 33, 33); // Bottomcircle, follows cursor offset by -20
// }



// //SKETCH 3: MULTIPLICATION AND DIVISION USED TO SCALE THE OFFSETS
// function setup() {
// 	createCanvas(640, 480);
//   	noStroke();
// }
// 
// function draw() {
//   	background(126);
//   	ellipse(mouseX, mouseY+10, 33, 33); // Top circle, follows the cursor
//   	ellipse(mouseX*2, mouseY+50, 33, 33); // Middle circle, follows cursor offset by double
// 	ellipse(mouseX/2, mouseY+90, 33, 33); // Bottomcircle, follows cursor offset by half
// }



// //SKETCH 4: INVERTING THE MOUSE
// function setup() {
// 	createCanvas(640, 480);
//   	noStroke();
// }
// 
// function draw() {
//   	var x = mouseX; // Set mouseX equal to x position - put in draw because it will change
//   	var y = mouseY; // Set mouseY equal to y position
//   	
//   	background(126);
//   	fill(255, 150);
//   	ellipse (x, y, 99, 99); //Circle that follows the cursor
//   	
//   	fill(0, 159);
//   	ellipse(width - x, height  - y, 66, 66);  //Circle that inverts where cursor is
// }



// //SKETCH 5: PRINTING PMOUSEX TO CONSOLE
// function draw() {
//   frameRate(12);
//   println(pmouseX - mouse);
// }



// //SKETCH 6: DRAWING A LINE USING PMOUSEX
// function setup() {
// 	createCanvas(640, 480);
//   	strokeWeight(10);
//   	background(126);
// }
// function draw() {
// 
//  	line (mouseX, mouseY, pmouseX, pmouseY);
// }



// //SKETCH 7: SELECTING REGIONS OF THE SCREEN - HALVES
// function setup() {
// 	createCanvas(640, 480);
//   	noStroke();
//   	fill(0);
// }
// 
// function draw() {
// 	background(126);
// 	if (mouseX < width/2) {
// 		rect(0,0,width/2,height);
// 	}
// 	else {
// 		rect(width/2,0,width/2, height);
// 	}
// }



// //SKETCH 8: SELECTING REGIONS OF THE SCREEN - THIRDS
// function setup() {
// 	createCanvas(640, 480);
//   	noStroke();
//   	fill(0);
// }
// 
// function draw() {
// 	background(126);
// 	if (mouseX < width/3) {
// 		rect(0,0,width/3,height);
// 	}
// 	else if (mouseX > width/3 && mouseX < 2*width/3) {
// 		rect(width/3,0,width/3, height);
// 	}
// 	else {
// 		rect(2*width/3, 0, width/3, height);
// 	}
// }



// //SKETCH 9: SELECTING REGIONS OF THE SCREEN - QUADRANTS
// function setup() {
// 	createCanvas(640, 480);
// 
//   	fill(0);
// 
// }
// 
// function draw() {
// 	background(126);
// 	
// 	//divide the Canvas into quadrants
// 	strokeWeight(1);
//   	line(width/2, 0, width/2, height);
//   	line (0, height/2, width, height/2);
//   	
// 	//if it's in the top left
// 	if (mouseX < width/2 && mouseY < height/2) {
// 		rect(0, 0, width/2, height/2);
// 	}
// 	//if it's in the top right
// 	else if (mouseX > width/2 && mouseY < height/2) {
// 		rect(width/2, 0, width/2, height/2);
// 	}
// 	//if it's in the bottom left
// 	else if (mouseX < width/2 && mouseY > height/2) {
// 		rect(0, height/2, width/2, height/2);
// 	}
// 	//if it's in the bottom right
// 	else {
// 		rect(width/2, height/2, width/2, height/2);
// 	}
// 
// }



// //SKETCH 10: BUTTON PREP
// function setup() {
//   createCanvas(640,480);
//   noStroke();
// }
// 
// function draw() {
//   	background(126);
//   	var w = 100;	//width of rectangle
// 		var h = 100;	//height of rectangle
// 	
// 	//if the mouse is in the rectangle fill it one color
// 	if (mouseX >= width/2 && mouseX <= width/2 + w && mouseY >= height/2 && mouseY <= height/2 +h) {
// 		fill(255);
// 	}
// 	//if the mouse is outside the rectangle, fill it another color
// 	else {
// 		fill(0);
// 	}	
// 	rect(width/2 - w/2, height/2 - h/2, w, h); //position a rectangle in the center
  


// //SKETCH 11: USING mouseIsPressed
// function setup() {
// 	createCanvas(640,480);
// 	noStroke();
// } 
// 
// function draw() {
//   background(126);
//   if (mouseIsPressed == true) {
//     fill(255); // White
//   } 
//   else {
//     fill(0); // Black
//   }
//   rect(width/2 - 50, height/2 - 50, 100, 100);
// }



// //SKETCH 12: USING mouseButton
// function setup() {
// 	createCanvas(640,480);
// 	noStroke();
// } 
// 
// function draw() {
//   background(126);
//   if (mouseButton == LEFT) {
//     fill(255); //white
//   } 
//   else if (mouseButton == RIGHT) {
//   	fill(0);	//black
//   }
//   else {
//     fill(140);
//   }
//   rect(width/2 - 50, height/2 - 50, 100, 100);
// }



// //SKETCH 13: USING mouseButton AND mouseIsPressed
// function setup() {
// 	createCanvas(640,480);
// 	noStroke();
// } 
// 
// function draw() {
//   background(126);
//   if (mouseIsPressed == true) {
//   	if (mouseButton == LEFT) {
//    	 	fill(255); //white
//  	 } 
//   	else if (mouseButton == RIGHT) {
//   		fill(0);	//black
//   	}
//   	else {
//     	fill(140);
//   	}
//   }
//   rect(width/2 - 50, height/2 - 50, 100, 100);
// }



// //SKETCH 14: USING keyIsPressed
// function setup() {
// 	createCanvas(640,480);
// 	strokeWeight(4);
// } 
// 
// function draw() {
//   background(126);
//   //if the key is pressed, draw a line
//   if (keyIsPressed == true) {
//   	line(width/2 - 50, height/2 - 50, width/2 + 50, height/2 + 50);
//   }
//   //otherwise, draw a rectangle
//   else {
//   rect(width/2 - 50, height/2 - 50, 100, 100);
//   }
// }



// //SKETCH 15: INCREMENT USING keyIsPressed
// var x = 20;
// 
// function setup() {
// 	createCanvas(640,480);
// 	strokeWeight(4);
// } 
// 
// function draw() {
// 	background(126);
// 	//if the key is pressed, draw a line
//   	if (keyIsPressed == true) {
//   		x++; //increment x by 1
//   	}
// 	rect(x, height/2, 100, 100);
// }



// //SKETCH 16: DRAWING KEY TO THE SCREEN
// function setup() {
// 	createCanvas(640,480);
// 	textSize(60);
// } 
// 
// function draw() {
//   background(0);
//   text(key, width/2 - 30, height/2 - 10); // Draw selected key in middle of canvas (roughly)
// }



// //SKETCH 17: USING SPECIFIC KEYS TO CONTROL
// function setup() {
// 	createCanvas(640,480);
// 	strokeWeight(4);
// } 
// 
// function draw() {
// 	background(126);
// 	//if the key is pressed AND that key is a capital A
//   	if (keyIsPressed == true && key=='A') { 
//   		rect(width/2 - 50, height/2 - 50, 100, 100);
//   	}
//   	else {
// 		ellipse(width/2, height/2, 100, 100);
// 	}
// }



// //SKETCH 18: USING ASCII VALUES OF KEYS
// var x;
// 
// function setup() {
// 	createCanvas(640,480);
// 	stroke(0);
// 	background(126);
// } 
// 
// function draw() {
// 	//using ASCII values
//   	if (keyIsPressed == true) { 
//   		x = keyCode + 100; //use the keyCode variable -- doesn't work with key
//   		line(x, 0, x, height);
//   	}
// }



// //SKETCH 19: USING KEY VALUE 
// var angle = 0;
// 
// function setup() {
// 	createCanvas(640,480);
// 	fill(0);	
// } 
// 
// function draw() {
// 	background(126);
// 	//if the key is alphanumeric, // use its value as an angles
//   	if (keyIsPressed == true) { 
//   		if((keyCode >= 32) && (keyCode<=126)) {
//   			angle = (keyCode - 32) * 3;
//   		}
//   	}
//   	arc(width/2 - 25, height/2 - 25, 100, 100, 0, radians(angle));
// }



// //SKETCH 20: USING KEY CODE
// var angle = 0;
// 
// function setup() {
// 	createCanvas(640,480);
// 	fill(0);	
// } 
// 
// function draw() {
// 	background(126);
// 	//if the key is alphanumeric, // use its value as an angles
//   	if (keyIsPressed == true) { 
//   		if((keyCode >= 32) && (keyCode<=126)) {
//   			angle = (keyCode - 32) * 3;
//   		}
//   	}
//   	arc(width/2 - 25, height/2 - 25, 100, 100, 0, radians(angle));
// }



// //SKETCH 21: MORE WITH KEY CODES!
// var y;
// 
// function setup() {
//   createCanvas(640,480);
//   y = height/2;
// }
// 
// function draw() {
//   background(126);
//   line(width/2 - 100, height/2, width/2 + 100, height/2); 
//   if (keyCode == UP_ARROW) { //use UP_ARROW instead of UP
//       y = height/2 - 30;
//     } 
//   else if (keyCode == DOWN_ARROW) { //use DOWN_ARROW instead of DOWN
//       y = height/2;
//     } 
// 
//   rect(width/2-50, y, 100, 30);
// }



// //SKETCH 22: MOUSEPRESSED -- THE FUNCTION!
// var gray = 0;
// 
// function setup() {
// 	createCanvas(640,480);
// }
// 
// function draw() {
// 	background(gray);	
// }
// 
// //every time you click the mouse, run this code
// function mousePressed() {
// 	gray = gray + 20;
// }



// //SKETCH 23: MOUSERELEASED
// var gray = 0;
// 
// function setup() {
// 	createCanvas(640,480);
// }
// 
// function draw() {
// 	background(gray);	
// }
// 
// //every time you click the mouse, run this code
// function mouseReleased() {
// 	gray = gray + 20;
// }



// //SKETCH 24: USING THE DRAW LOOP TO KEEP THE PROGRAM RUNNING
// function setup() {
// 	createCanvas(640,480);
// 	fill(0, 102);
// }
// 
// function draw() {
// 	//Empty draw keeps the program running
// }
// 
// //every time you click the mouse, run this code
// function mousePressed() {
// 	rect(mouseX - 50, mouseY - 50, 100, 100);
// }



// //SKETCH 25: MOUSED DRAGGED + MOUSE MOVED
// var dragX, dragY, moveX, moveY;
// 
// function setup() {
// 	createCanvas(640,480);
// 	noStroke();
// }
// 
// function draw() {
// 	background(126);
// 	fill(0);
// 	ellipse(dragX, dragY, 50, 50); //Black circle
// 	fill(160);
// 	ellipse(moveX, moveY, 50, 50); //Gray circle
// }
// 
// 
// function mouseMoved() { //When the mouse is moved, move the gray circle
// 	moveX = mouseX;
// 	moveY = mouseY;
// }
// 
// function mouseDragged() { //When the mouse is moved, move the black circle
// 	dragX = mouseX;
// 	dragY = mouseY
// }



// //SKETCH 26: KEY PRESSED AND KEY RELEASED - DRAWING A T
// var drawT = false; //drawT set to false when program starts
// 
// function setup() {
// 	createCanvas(640, 480);
// 	noStroke();
// }
// 
// function draw() {
// 	background(126);
// 	if (drawT == true) {
// 		rect(20, 20, 60, 20);
//     	rect(39, 40, 22, 45);
// 	}
// }
// 
// function keyPressed() { //if key T or t is pressed, set drawT equal to true
// 	if ((key == 'T') || (key =='t')) {
// 		drawT = true;
// 	}
// }
// 
// function mousePressed(){ //press the mouse to remove T from the screen
// 	drawT = false;
// }



// //SKETCH 27: BUILDS ON SKETCH 26 - USES KEY RELEASED
// var drawT = false; //drawT set to false when program starts
// 
// function setup() {
// 	createCanvas(640, 480);
// 	noStroke();
// }
// 
// function draw() {
// 	background(126);
// 	if (drawT == true) {
// 		rect(20, 20, 60, 20);
//     	rect(39, 40, 22, 45);
// 	}
// }
// 
// function keyPressed() { //if key T or t is pressed, set drawT equal to true
// 	if ((key == 'T') || (key =='t')) {
// 		drawT = true;
// 	}
// }
// 
// function keyReleased() {	//when key is released, set drawT equal to false
// 	drawT = false;
// }



// //SKETCH 28: CONTROLLING EVENT FLOW WITH MOUSEPRESSED
// //program keeps stopping until you press the mouse to advance it
// var frame = 0; //keeps track of what frame the sketch is on
// 
// function setup() {
// 	createCanvas(640,480);
// }
// 
// 
// function draw() {
// 	if (frame > 120) {  //if the frames get to 120 since mouse was pressed
// 		noLoop(); 		//pause the program
// 		background(0); 	//turn the background black
// 	}
// 	else {
// 		background(126);	//otherwise set the background to grey
// 		line(mouseX, 0, mouseX, height);	//draw lines
// 		line(0, mouseY, width, mouseY);
// 		frame++; 	//increment the frame variable
// 	}
// } 
// 
// function mousePressed() {	//in mousePressed, resume the program, set frame to 0
// 	loop;
// 	frame = 0;
// }



// //SKETCH 29: USING THE REDRAW FUNCTION
// function setup() {
// 	createCanvas(640,480);
// 	noLoop(); //prevents code from looping unless you press the mouse
// }
// 
// function draw() {
// 	background(126);
// 	line(mouseX, 0, mouseY, height);
// 	line(0, mouseY, width, mouseY);
// }
// 
// function mousePressed() {	//when mouse is pressed, run the draw loop again
// 	redraw();
// }



// //SKETCH 30: HIDING THE CURSOR
// function setup() {
// 	createCanvas(640,480);
// 	strokeWeight(2);
// 	noCursor();
// }
// 
// function draw() {
// 	background(126);
// 	ellipse(mouseX, mouseY, 20, 20);
// }



// //SKETCH 31: REVEALING THE CURSOR WITH MOUSEPRESSED
// function setup() {
// 	createCanvas(640,480);
// 	strokeWeight(2);
// 	noCursor();
// }
// 
// function draw() {
// 	background(126);
// 	ellipse(mouseX, mouseY, 20, 20);
// }
// 
// function mousePressed() {
// 	cursor();
// }



//SKETCH 32: LOADING A CUSTOM CUSOR
function setup() {
	createCanvas(640,480);
	strokeWeight(2);
}

function draw() {
	background(126);
	if (mouseIsPressed == true) {
		cursor(HAND);
	}
	else {
		cursor(CROSS);
	}
}

