$(function(){
  //-----------------------------------------------------------//
	//start
  //-----------------------------------------------------------//

  //-----------------------------------------------------------//
	//opening/closing panel
  //-----------------------------------------------------------//
	var flag=true;

	//animation to open/close side panel
	$("#arrow").click(function(){
  	if(flag){$("#panel").animate({left:"70%"});}
    else{$("#panel").animate({left:"97%"});}
    flag=!flag;
  });

  //-----------------------------------------------------------//
	//bind styled button to file upload button
  //-----------------------------------------------------------//
  $(".sound_button").on("click", function(){
    $(this).siblings(".html_sound_button").click();
  });
  
  //-----------------------------------------------------------//
  //get the ID3 tags and output the tags
  //-----------------------------------------------------------//
  $(".html_sound_button").change(function(e){
    //setting the file
    var file=e.currentTarget.files[0];

    //setting the output elements
    var title=$(this).siblings(".file_title");
    var artist=$(this).siblings(".file_artist");

    //ID3 tag reader
    id3(this.files[0], function(err, tags) {
      print(title, tags.title);
      print(artist, tags.artist);
    });

    //creating audio 
    objectUrl = URL.createObjectURL(file);

    $(this).siblings("audio").prop("src", objectUrl);
    
  });

  //-----------------------------------------------------------//
  //get the duration of the song
  //-----------------------------------------------------------//
  var objectUrl;

  $(".sound_button").click(function(){
    $(this).siblings(".player").on("canplaythrough", function(e){

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
  })

  //-----------------------------------------------------------//
  //declaring variables for buttons
  //-----------------------------------------------------------//
  var c1=$("#color_1");
  var c2=$("#color_2");
  var c3=$("#color_3");
  var c4=$("#color_4");
  var c5=$("#color_5");
  var c6=$("#color_6");
  var c7=$("#color_7");
  var c8=$("#color_8");
  var c9=$("#color_9");
  var c10=$("#color_10");
  var c11=$("#color_11");
  var c12=$("#color_12");
  var c13=$("#color_13");
  var c14=$("#color_14");
  var c15=$("#color_15");
  var c16=$("#color_16");

  //-----------------------------------------------------------//
  //plays sound
  //-----------------------------------------------------------//
  play_sound(c1, p1);
  play_sound(c2, p2);
  play_sound(c3, p3);
  play_sound(c4, p4);
  play_sound(c5, p5);
  play_sound(c6, p6);
  play_sound(c7, p7);
  play_sound(c8, p8);
  play_sound(c9, p9);
  play_sound(c10, p10);
  play_sound(c11, p11);
  play_sound(c12, p12);
  play_sound(c13, p13);
  play_sound(c14, p4);
  play_sound(c15, p15);
  play_sound(c16, p16);


  //-----------------------------------------------------------//
  //prints tags to screen
  //-----------------------------------------------------------//
  function print(element, tag){
    element.html(": "+tag);
  }

  //-----------------------------------------------------------//
  //plays sound on chosen element
  //-----------------------------------------------------------//
  function play_sound(element, soundbite){
    element.click(function(){
      console.log(element);
      console.log(soundbite);
      soundbite.pause();
      soundbite.currentTime=0;
      soundbite.play();
    });
  }

  //-----------------------------------------------------------//
 	//end
  //-----------------------------------------------------------//
})