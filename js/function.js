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

    //

    //

   //  id3(this.files[0], function(err, tags) {
   //     // console.log(tags);
   //     // console.log(tags.artist);
   //     // console.log($(this));
   //     // $(this).siblings(".file_artist").html(music_tags.artist);
   // })
  });

  // document.querySelector('input[type="file"]').onchange = function(e) {
  //     id3(this.files[0], function(err, tags) {
  //       // tags now contains your ID3 tags
  //       console.log(tags);
  //       $(this).siblings(".file_artist").html(tags.artist);
  //    });
  //   }

    $(".html_sound_button").change(function(){
      id3(this.files[0], function(err, tags) {
        // tags now contains your ID3 tags
        console.log(tags);
        console.log("jquizzle");
        console.log($(this));
        $(this).siblings(".file_artist").html(tags.artist);
        $(this).siblings(".file_artist").html("yyyyyy");
     });
    })

  //getting info from file
//   function read_sound_file(){
//    id3(this.files[0], function(err, tags) {
//        console.log(tags);
//        console.log(tags.artist);
//        // var music_tags=tags;
//        // console.log(music_tags);
//        // $(this).siblings(".file_artist").css("height", "100px");
      
//        console.log($(this));
//        // $(this).siblings(".file_artist").html(music_tags.artist);
//    })
// }

// document.getElementsByTagName("input")[0].addEventListener("change",read_sound_file,false);
// 	//end
})
//-----------------------------------------------------------//