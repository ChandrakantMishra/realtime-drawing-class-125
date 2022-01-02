nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500); 

    canvas = createCanvas(550,500);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",GotPoses);
}

function draw(){
    background("#FFF933");
    fill("pink");
    stroke("pink");
    square(nosex,nosey,difference);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}
function GotPoses(results){
    if(results.length > 0){
    console.log(results);
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    console.log("nosex = "+nosex+"nosey = "+nosey);
    leftwristx = results[0].pose.leftWrist.x;
    rightwristx = results[0].pose.rightWrist.x;
    difference= floor(leftwristx-rightwristx);
    console.log("leftwristx = "+leftwristx+"rightwristx = "+rightwristx+"difference = "+difference);
    document.getElementById("square_sides").innerHTML="Width and height of the square is = "+difference+"px";
}
}

