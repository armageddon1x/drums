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
  //array to store metadata
  //-----------------------------------------------------------//
  var metadata={}

  //-----------------------------------------------------------//
  //get the ID3 tags and save them into array
  //-----------------------------------------------------------//
  $(".html_sounder").change(function(e){
    //setting the file
    var file=e.currentTarget.files[0];
    var type=file.type;

    var button=$(this);

    //ID3 tag reader
    id3(this.files[0], function(err, tags) {
      // print(title, tags.title);
      // print(artist, tags.artist);

      var button_id=button.attr("id");
      // console.log(button_id);

      metadata[button_id+"_title"]=tags.title;
      metadata[button_id+"_artist"]=tags.artist;
      metadata[button_id+"_type"]=type;

      // console.log(metadata[button_id+"_title"]);
      // console.log(metadata[button_id+"_title"].length);
      // console.log(metadata[button_id+"_title"].trim().length);

      if((tags.title===undefined)||(tags.title===null)||(tags.title==="")){
        // console.log(metadata[button_id+"_title"]);
        // console.log(metadata[button_id+"_title"].length);
        metadata[button_id+"_title"]="N/A";
      }

      if((tags.artist===undefined)||(tags.artist===null)){
        metadata[button_id+"_artist"]="N/A";
      }

      if(file.type==="audio/mp3"){
        metadata[button_id+"_type"]="MP3";
      }
      else if(file.type==="audio/wav"){
        metadata[button_id+"_type"]="WAV";
      }
      else if(file.type==="audio/ogg"){
        metadata[button_id+"_type"]="ogg";
      }
      else{
        metadata[button_id+"_type"]="N/A";
      }

      // console.log(metadata);
    });

    //creating audio 
    objectUrl = URL.createObjectURL(file);
    $(this).siblings("audio").prop("src", objectUrl);

  });

  //-----------------------------------------------------------//
  //get the duration of the song and save it into array
  //-----------------------------------------------------------//
  var objectUrl;

  $(".sounder").click(function(){

    var button_id=$(this).siblings(".html_sounder").attr("id");

    // console.log("that");
    // console.log(button_id);

    $(this).siblings(".player").on("canplaythrough", function(e){
      //getting the total duration
      var length=e.currentTarget.duration;
     
      
      //turning duration in seconds to minutes
      var minutes=Math.floor(length/60);
      var seconds=(length%60).toFixed(0);
      var time=minutes+":";
      if(seconds<10){time=time+"0"+seconds;}
      else{time=time+seconds;}

      metadata[button_id+"_duration"]=time;
      
      // console.log(metadata);

      $(".button").tooltip({
        content: function (){

          var button_num=$(this)[0];
          // console.log(button_num);

          var data=button_num.dataset;
          // console.log(button_num.dataset);

          var button=data.button;
          // console.log(button);
          // console.log(metadata);

          if(metadata[button+"_title"]!==undefined&&metadata[button+"_artist"]!==undefined&&metadata[button+"_duration"]!==undefined){
            //
            return "<p><b>Title:</b> "+metadata[button+"_title"]+"</p><p><b>Artist:</b> "+metadata[button+"_artist"]+"</p><p><b>Duration:</b> "+metadata[button+"_duration"]+"</p></p><p><b>Type:</b> "+metadata[button+"_type"]+"</p>";
          }else{
            //
            return "";
          }
        }
      });

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

  //
  $(".sounder").tooltip({
    items:".sounder",
    content:function(){
       return "<p>Upload your sound clip here</p>";
    }
  });
  $(".slider").tooltip({
    items:".slider",
    content:function(){
       return "<p>Change the volume here</p>";
    }
  });
  $(".top").tooltip({
    items:".top",
    content:function(){
       return "<p>Change the color of the button here</p>";
    }
  });
  $(".bottom").tooltip({
    items:".bottom",
    content:function(){
       return "<p>Change the color of the button shadow here</p>";
    }
  });

  //
  
function trimmer(word) {
    return word.replace(/^\s+|\s+$/gm,'');
}
  //-----------------------------------------------------------//
 	//end
  //-----------------------------------------------------------//
})