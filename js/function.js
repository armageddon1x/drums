$(function(){
	//start

  //-----------------------------------------------------------//
	//load sound
	var beep=document.createElement("audio");
	beep.setAttribute("src","sounds/beep.mp3");

  //-----------------------------------------------------------//
	//sample sound for buttons
	$(".button").click(
		function(){
			beep.pause();
			beep.currentTime=0;
			beep.play();
		}
	);

  //-----------------------------------------------------------//
	//flag for opening/closing panel
	var flag=true;

	//animation to open/close side panel
	$("#arrow").click(function(){
  	if(flag){
    	$("#panel").animate({left:"70%"});
    	flag=!flag;
    }
    else{
    	$("#panel").animate({left:"97%"});
    	flag=!flag;
    }
  });

  //-----------------------------------------------------------//
	//bind styled button to file upload button
  $(".sound_button").bind("click", function(){
    $(this).siblings(".html_sound_button").click();
  });

  
  //-----------------------------------------------------------//
  //output ID3 information
  $("sound_button").click(function(){
    $(this).siblings(".html_sound_button").on("change",read_sound_file,false);
  });

  //
  var objectUrl;
  $(".audio").on("canplaythrough", function(e){
    var length=e.currentTarget.duration;
    var duration=$(this).siblings(".file_duration");
    
    var minutes=Math.floor(length/60);
    var seconds=(length%60).toFixed(0);


    var time=minutes+":";
    if(seconds<10){time=time+"0"+seconds;}
    else{time=time+seconds;}

    print(duration, time);

    URL.revokeObjectURL(objectUrl);
});
  //

  $(".html_sound_button").change(function(e){
    var file=e.currentTarget.files[0];
    // console.log(file);
    var title=$(this).siblings(".file_title");
    var artist=$(this).siblings(".file_artist");

    id3(this.files[0], function(err, tags) {
      print(title, tags.title);
      print(artist, tags.artist);
    });

    objectUrl = URL.createObjectURL(file);
    $(".audio").prop("src", objectUrl);
   
  });

  function print(element, tag){
    element.html(" "+tag);
  }



// 	//end
})
//-----------------------------------------------------------//