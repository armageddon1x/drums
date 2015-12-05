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
  //k-v array to store sound clips
  //-----------------------------------------------------------//
  // $(".sound_button").click(function(){
  //   $(this).siblings(".html_sound_button").on("change",handleFileSelect,false);
    // });
  // var i=0;
  // var j=0;
  // var clips={};
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
    // console.log($(this));
    $(this).siblings("audio").prop("src", objectUrl);
    // console.log($(this).siblings("audio"));
    // console.log($(this).siblings("audio")[0]);

    // var id=$(this).siblings("audio").attr("id");
    // console.log(id);
    // console.log(window[id]);
    // player=$(this)[0];
    // console.log("player:");
    // console.log(player);
    // clips[id]=window[id];
    // console.log(clips);
    // console.log(clips.player_1);


    
    // console.log("counter: "+i);
    // console.log("-------------------------------");
    // i++;
  });

  //-----------------------------------------------------------//
  //get the duration of the song
  //-----------------------------------------------------------//
  var objectUrl;

  $(".sound_button").click(function(){
    $(this).siblings(".player").on("canplaythrough", function(e){
      
      // console.log("other counter: "+j);
      // j++;
      // console.log("************************");

      // gets player element
      // player=$(this)[0];
      // console.log("player:");
      // console.log(player);

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


// setTimeout(function(){
//   console.log(clips);
//   console.log(clips.player_1);
// },9000);
  
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

  // play_sound($("#color_1"), clips.player_1);
  // play_sound($("#color_2"), clips.player_2);

  // play_sound(c1, player_1);
  play_sound(c2, player_2);
  play_sound(c3, player_3);
  play_sound(c4, player_4);
  play_sound(c5, player_5);
  play_sound(c6, player_6);
  play_sound(c7, player_7);
  play_sound(c8, player_8);
  play_sound(c9, player_9);
  play_sound(c10, player_10);
  play_sound(c11, player_11);
  play_sound(c12, player_12);
  play_sound(c13, player_13);
  play_sound(c14, player_14);
  play_sound(c15, player_15);
  play_sound(c16, player_16);

  play_sound(c1, p1);

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
  // function handleFileSelect(evt) {
  //   var files = evt.target.files;
  //   playFile(files[0]);
  // }

  // //
  // function playFile(file) {
  //   var freader = new FileReader();   
  //   freader.onload = function(e) {
  //     player.src = e.target.result;
  //     // console.log(e);
  //     // console.log(e.target.result);
  //     // console.log(player.src);
  //   };
  //   freader.readAsDataURL(file);
  // }

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