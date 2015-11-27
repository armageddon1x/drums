$(function(){
  //-----------------------------------------------------------//
	//start
  //-----------------------------------------------------------//

  //-----------------------------------------------------------//
	//flag for opening/closing panel
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
  //output ID3 information
  //-----------------------------------------------------------//
  // $(".sound_button").click(function(){
  //   $(this).siblings(".html_sound_button").on("change",handleFileSelect,false);
  // });

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
    $("audio").prop("src", objectUrl);
  });

  //-----------------------------------------------------------//
  //get the duration of the song
  //-----------------------------------------------------------//
  var objectUrl;

  $(".sound_button").click(function(){
    $(this).siblings(".player").on("canplaythrough", function(e){
      console.log("ggggdddd");

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

  // console.log("player: "+player);

  // console.log("aayyy");

  //     //
  //     console.log("this: "+$(this));
  //     console.log($(this).attr("id"));

  //     var player_id=$(this).attr("id");

  //     // player=$(this)[0];
  //     player=$(player_id);
  //     console.log("player: "+player);
  //     //

  // $("#player").siblings(".html_sound_button").on("change",handleFileSelect,false);
//gets player element
  player=$("#player")[0];
  console.log(player);

  play_sound($("#color_1"));
  play_sound($("#color_2"));
  // play_sound($("#color_3"));
  // play_sound($("#color_4"));
  // play_sound($("#color_5"));
  // play_sound($("#color_6"));
  // play_sound($("#color_7"));
  // play_sound($("#color_8"));
  // play_sound($("#color_9"));
  // play_sound($("#color_10"));
  // play_sound($("#color_11"));
  // play_sound($("#color_12"));
  // play_sound($("#color_13"));
  // play_sound($("#color_14"));
  // play_sound($("#color_15"));
  // play_sound($("#color_16"));
;
  //-----------------------------------------------------------//
  //prints tags to screen
  //-----------------------------------------------------------//
  function print(element, tag){
    element.html(": "+tag);
  }

  //-----------------------------------------------------------//
  //functions for attaching sound files to buttons
  //-----------------------------------------------------------//

  //stores file in a variable
  function handleFileSelect(evt) {
    var files = evt.target.files;
    playFile(files[0]);
  }

  //
  function playFile(file) {
    var freader = new FileReader();   
    freader.onload = function(e) {
      player.src = e.target.result;
      // console.log(e);
      // console.log(e.target.result);
      // console.log(player.src);
    };
    freader.readAsDataURL(file);
  }

  //-----------------------------------------------------------//
  //plays sound on chosen element
  //-----------------------------------------------------------//
  function play_sound($element){
    $element.click(function(){
      player.pause();
      player.currentTime=0;
      player.play();
    });
  }

  //-----------------------------------------------------------//
 	//end
  //-----------------------------------------------------------//
})