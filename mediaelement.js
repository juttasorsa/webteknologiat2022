const json_toby = '[{ "name": "Kukkameri Toby", "path": "https://hellobark.com/wp-content/uploads/toby-the-gentleman-2.jpg" }, { "name": "Pyhän Patrikin Toby", "path": "https://hellobark.com/wp-content/uploads/toby-the-gentleman-7.jpg" }, { "name": "Sateinen Toby", "path": "https://i2-prod.rsvplive.ie/incoming/article21959196.ece/ALTERNATES/s810/0_toby-usePNG.png" }, { "name": "Toby ja melonit", "path": "https://hellobark.com/wp-content/uploads/toby-the-gentleman-6.jpg" }]';

var tobydata = JSON.parse(json_toby);
var dogCount = tobydata.length;
var index = 0;

var intervalID = window.setInterval(nextPicture, 2000);
var playing = true;

window.onload = function() {
    console.log("Loading first cat picture...");
    index = localStorage.getItem("index");
    setPicture();
}

function setPicture()
{
    var imageObject = document.getElementById("kuva");
    var textObject = document.getElementById("nimi");
    var path = tobydata[index].path;
    var name = tobydata[index].name;
    imageObject.src = path;
    textObject.innerHTML = name;

    localStorage.setItem("index", index);
}

function nextPicture() {
    console.log("Index: " + index);
    if (index == dogCount - 1)
    {
        index = 0;
    }
    else
    {
        index++;
    }
    setPicture();
}

function previousPicture() {
    console.log("Index: " + index);
    if (index == 0)
    {
        index = dogCount - 1;
    }
    else
    {
        index--;
    }
    setPicture();
}

function autoScrollController()
{
    var buttonObject = document.getElementById("pauseButton");

    if (playing)
    {
        console.log("Pausing autoscroll...");
        playing = false;
        clearInterval(intervalID);
        buttonObject.innerHTML = "Play";
    }
    else
    {
        console.log("Continuing playing...");
        playing = true;
        intervalID = window.setInterval(nextPicture, 2000);
        buttonObject.innerHTML = "Pause";
    }
}