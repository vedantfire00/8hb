song = "";
function preload()
{
    song = loadSound("music.mp3");
}



function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, ml);
    posenet.on("pose", gotpo);
}

function ml()
{
    console.log("model loaded");
}
rwx = 0;
rwy = 0;
lwx = 0;
lwy = 0;

srw=0;
slw=0;


function gotpo(results)
{
    if(results.length>0)
    {
        console.log(results)
        rwx= results[0].pose.rightWrist.x; 
        rwy= results[0].pose.rightWrist.y; 
        lwy= results[0].pose.leftWrist.y; 
        lwx= results[0].pose.leftWrist.x;
        console.log("right Wrist X " + rwx + " right wrist Y " + rwy); 
        console.log("left Wrist X " + lwx + " left wrist Y " + lwy);
        srw= results[0].pose.keypoints[10].score;
        slw= results[0].pose.keypoints[9].score;
        console.log("score of left wrist = " + slw + "score of right wrist = " + srw);
    }
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(2);
}


function draw()
{
    image(video, 0, 0, 600, 500);
    fill("red");
    stroke("red");
    if(slw>0.2)
    {
        circle(rightWrist)
    }
}