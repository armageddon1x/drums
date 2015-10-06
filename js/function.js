$(function(){
	//start

	//load sound
	var beep=document.createElement("audio");
	beep.setAttribute("src","sounds/beep.mp3");

	$(".button").click(
		function(){
			beep.pause();
			beep.currentTime=0;
			beep.play();
		}
	);

	//end
})