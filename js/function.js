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

  //-----------------------------------------------------------//
  //get the ID3 tags and output the tags
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
    $(".audio").prop("src", objectUrl);

    // console.log(new_var);
    // console.log(objectUrl);

    // var soundbite=document.createElement("audio");
    // soundbite.setAttribute("src",objectUrl);

    //  $(".button").click(
    //   function(){
    //     // $(".audio").pause();
    //     $(".audio").currentTime=0;
    //     $(".audio").play();
    //   }
    // );

  console.log($(".audio"));
   
  });

  //-----------------------------------------------------------//
  //get the duration of the song
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

    //  $(".button").click(
    //   function(){
    //     soundbite.pause();
    //     soundbite.currentTime=0;
    //     soundbite.play();
    //   }
    //  );

    URL.revokeObjectURL(objectUrl);
});

  function handleFileSelect(evt) {//console.log('evt', evt.target.files);
    var files = evt.target.files; // FileList object
    playFile(files[0]);
  }

  function playFile(file) {
    console.log('file', file);
    var freader = new FileReader();   
    freader.onload = function(e) {
      player.src = e.target.result;
    };
    freader.readAsDataURL(file);
  }

  player = document.getElementById('player');
  //player=$(".player");

  document.getElementById('sound_1').addEventListener('change', handleFileSelect, false);
  //$(".files").on("change",handleFileSelect,false);

  document.getElementById('color_1').onclick = function(){ player.pause();
    player.currentTime=0;player.play(); };
  //$(".play").click(function(){
    //player.pause();
    //player.currentTime=0;
    //player.play();
  //});

  //-----------------------------------------------------------//
  function print(element, tag){
    element.html(": "+tag);
  }



// 	//end
})
//-----------------------------------------------------------//