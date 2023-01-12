function setup() {
	canvas = createCanvas(300,300);
	canvas.parent("canvas");
	canvas.center();
}
function preload(){
	video=createCapture(VIDEO);
    video.hide();
}
function draw(){
	image(video, 0,0,500,500);
}