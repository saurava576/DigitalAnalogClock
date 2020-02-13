const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var ISTOffset = 330;   // IST offset UTC +5:30 
// var ms = date.getMilliseconds();
var hrPos = (hr*360/12) + (min*(360/60)/12);
var minPos = (min*360/60) + (sec*(360/60)/12);
var secPos = (sec*360/60);

function showTime() {
	hrPos += (3/360);
	minPos += (6/60);
	secPos += 6;
	HOURHAND.style.trasform = "rotate(" + hrPos + "deg)";
	MINUTEHAND.style.transform = "rotate(" + minPos + "deg)";
	SECONDHAND.style.transform = "rotate(" + secPos + "deg)";
	// console.log("current time: " + Date());	
}

setInterval(showTime, 1000);

