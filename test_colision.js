function setup(){
createCanvas(400,400)
}
function draw() {
	background(230)
	fill(0)
	strokeWeight(2)
	textSize(18);
	text("Click and drag the shapes around.",70,30)
	text("They will turn red if they are touching.",60,50)
	fill(0,255,0)
	var color=0
	var collision=[]
	if(RectCircleColliding(circ[0],circ[1],circ[2],rectr[0],rectr[1],rectr[2],rectr[3])){
		collision.push("r1","c1")
	}  //rect1 circ1 collision
	if(RectCircleColliding(circ2[0],circ2[1],circ2[2],rectr[0],rectr[1],rectr[2],rectr[3])){		
		collision.push("c2","r1")		
	} //rect1 circ2 collision
	if(RectCircleColliding(circ[0],circ[1],circ[2],rectr2[0],rectr2[1],rectr2[2],rectr2[3])){
		collision.push("r2","c1")	
}//rect2 circ1 collision
	if(RectCircleColliding(circ2[0],circ2[1],circ2[2],rectr2[0],rectr2[1],rectr2[2],rectr2[3])){
		collision.push("r2","c2")
}//rect2 circ2 collision
	if(rectrect(rectr[0], rectr[1], rectr[2], rectr[3], rectr2[0], rectr2[1], rectr2[2], rectr2[3])){
		collision.push("r2","r1")
	}//rect1 rect2 collision
	
if (circlecircle(circ[0], circ[1], circ[2], circ2[0], circ2[1], circ2[2])){
	collision.push("c1","c2")
}//circle circle collision
	fill(0,255,0)
	rect(rectr2[0],rectr2[1],rectr2[2],rectr2[3])
	rect(rectr[0],rectr[1],rectr[2],rectr[3])
	ellipse(circ[0],circ[1],circ[2])
	ellipse(circ2[0],circ2[1],circ2[2])
	for(i=0;i<collision.length;i++){
		if(collision[i]=="r1"){
			fill(255,0,0)
			rect(rectr[0],rectr[1],rectr[2],rectr[3])
			fill(0,255,0)
		}
		if(collision[i]=="r2"){
			fill(255,0,0)
				rect(rectr2[0],rectr2[1],rectr2[2],rectr2[3])
			fill(0,255,0)
		}
		if(collision[i]=="c1"){
			fill(255,0,0)
			ellipse(circ[0],circ[1],circ[2])
			fill(0,255,0)
		}
		if(collision[i]=="c2"){
			fill(255,0,0)
			ellipse(circ2[0],circ2[1],circ2[2])
			fill(0,255,0)
		}
	}//makes the shape red if they are touching
	dragrect();
	dragcirc()
	dragrect2();
	dragcirc2()
}
var circ=[100,100,30]
var rectr=[120,150,30,30]
var rectr2=[160,170,30,30]
var circ2=[200,180,30]
function rectrect(x1, y1, w1, h1, x2, y2, w2, h2) {
  if(Math.abs(x1 - x2) <= w1/2 + w2/2 && Math.abs(y1 - y2) <= h1/2 + h2/2){
		return true
	}
} //detects rectangle rectangle collision
function circlecircle(x1, y1, r1, x2, y2, r2) {
  if(dist(x1, y1, x2, y2) <= r1/2 + r2/2){
		return true
	}
}//detects circle circle collision
function RectCircleColliding(circlex,circley,circler, rectx,recty,rectw,recth) {
    var distX = Math.abs(circlex - rectx - rectw / 2);
    var distY = Math.abs(circley - recty - recth / 2);

    if (distX > (rectw / 2 + circler/2)) {
        return false;
    }
    if (distY > (recth / 2 + circler/2)) {
        return false;
    }

    if (distX <= (rectw / 2)) {
        return true;
    }
    if (distY <= (recth / 2)) {
        return true;
    }

    var dx = distX - rectw / 2;
    var dy = distY - recth / 2;
    return (dx * dx + dy * dy <= (circler/2 * circler/2));
}//detects rectangle circle collision return true if the rectangle and circle are colliding
var circdrag=0
var circ2drag=0
var rectdrag=0
var rect2drag=0
function dragrect(){
	if(mouseX>rectr[0] && mouseX<rectr[0]+rectr[2] && mouseY>rectr[1] && mouseY<rectr[1]+rectr[3]&& mouseDown==1 && rect2drag==0&& circdrag==0&& circ2drag==0){
		rectr.splice(0,1,mouseX-rectr[2]/2)
		rectr.splice(1,1,mouseY-rectr[3]/2)
	 rectdrag=1
	} else {
		rectdrag=0
	}
} //allows you to drag the rectangle
function dragcirc(){
	var dx=circ[0]-mouseX;
  var dy=circ[1]-mouseY;
	if(dx*dx+dy*dy<circ[2]*circ[2]&&mouseDown==1&&circ2drag==0&& rect2drag==0&& rectdrag==0){
		circ.splice(0,1,mouseX)
		circ.splice(1,1,mouseY)
		circdrag=1
	} else {
	circdrag=0
} 
} //allows you to drag the circle
function dragrect2(){
	if(mouseX>rectr2[0] && mouseX<rectr2[0]+rectr2[2] && mouseY>rectr2[1] && mouseY<rectr2[1]+rectr2[3]&& mouseDown==1 && rectdrag==0&& circ2drag==0&& circdrag==0){
		rectr2.splice(0,1,mouseX-rectr2[2]/2)
		rectr2.splice(1,1,mouseY-rectr2[3]/2)
	  rect2drag=1
	} else {
		rect2drag=0
	}
} //allows you to drag the other rectangle
function dragcirc2(){
	var dx2=circ2[0]-mouseX;
  var dy2=circ2[1]-mouseY;
	if(dx2*dx2+dy2*dy2<circ2[2]*circ2[2]&&mouseDown==1&&circdrag==0&& rect2drag==0&& rectdrag==0){
		circ2.splice(0,1,mouseX)
		circ2.splice(1,1,mouseY)
		circ2drag=1
	} else {
	circ2drag=0
} 
} 
//allows you to drag the other circle
var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}
//detects if the mouse is down