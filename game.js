var circles = [];
for (var i = 0; i < 10; i++){
circles.push(new Circle())
};

function Circle(){
	this.x = Math.random() * 450;
	// x coordinate
	this.y = Math.random() * 450;
	// y coordinate
	// since these are the starting positions neither can 
	// be bigger than 450 since the size of the game area 
	// is 500 and the max size of the circles is 50 
	this.diameter 
	this.speed
};
// N.B. -> all of these items are located outside of the "document ready function"

$(document).ready(function(){
	$('.circle').animate({
		left: "+=300",
		top: "+=300"
	}, {
		complete: function(){
			alert("I Moved");
		}
	});
});


