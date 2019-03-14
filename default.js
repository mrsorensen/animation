var idle = 0;

var tooltipmsg = "Just start typing.";
var tooltip = $("<p></p>").text(tooltipmsg);
tooltip.attr("id", "tooltip");
tooltip.css("display", "none");
tooltip.css("position", "absolute");
tooltip.css("bottom", "1%");
tooltip.css("right", "50%");

$("body").prepend(tooltip);
tooltip.fadeIn(2000);


setInterval(function(){
	idle++;
	if(idle > 10 && tooltip.css("display") == 'none'){
		tooltip.text("Just keep typing");
		tooltip.fadeIn(10000);
	}
}, 1000);



$(document).keypress(function(e){

	idle = 0;

	var key = String.fromCharCode(e.keyCode ? e.keyCode : e.which);


	console.log(key);

	var rand = Math.floor(Math.random() * 90);

	var chr = $("<span></span>").text(key);
	chr.css("position", "absolute");
	chr.css("bottom", "1%");
	chr.css("left", rand+"%");
	$("body").append(chr);

	chr.animate({marginBottom: '25%', opacity: '0'}, 3000);
	tooltip.fadeOut(2000);



});



