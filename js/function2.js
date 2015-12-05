$(function(){
  //-----------------------------------------------------------//
	//start
  //-----------------------------------------------------------//

  //-----------------------------------------------------------//
	//bind styled button to file upload button
  //-----------------------------------------------------------//
  $(".sounder").on("click", function(){
    $(this).siblings(".html_sounder").click();
  });
  
  //-----------------------------------------------------------//
  //get the ID3 tags and output the tags
  //-----------------------------------------------------------//
  $(".html_sounder").change(function(e){
    //setting the file
    var file=e.currentTarget.files[0];

    //setting the output elements
    // var title=$(this).siblings(".file_title");
    // var artist=$(this).siblings(".file_artist");

    // //ID3 tag reader
    // id3(this.files[0], function(err, tags) {
    //   print(title, tags.title);
    //   print(artist, tags.artist);
    // });

    //creating audio 
    objectUrl = URL.createObjectURL(file);
    $(this).siblings("audio").prop("src", objectUrl);

  });

  //-----------------------------------------------------------//
  //get the duration of the song
  //-----------------------------------------------------------//
  var objectUrl;

  $(".sounder").click(function(){
    $(this).siblings(".player").on("canplaythrough", function(e){
      //getting the total duration
      var length=e.currentTarget.duration;
      
      //turning duration in seconds to minutes
      var minutes=Math.floor(length/60);
      var seconds=(length%60).toFixed(0);
      var time=minutes+":";
      if(seconds<10){time=time+"0"+seconds;}
      else{time=time+seconds;}

      // var duration=$(this).siblings(".file_duration");
      // print(duration, time);

      URL.revokeObjectURL(objectUrl);
    });
  })

   
  //-----------------------------------------------------------//
 	//end
  //-----------------------------------------------------------//
})