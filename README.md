# drum pad

This a little side project I decided to do, because, why not? It would be a good challenge and I would be making something cool.

The drum pad has 16 buttons. Each button can play a sound clip, user uploaded. The sound upload button and volume slider share the same color as its corresponding button so you know which button/slider works on each button. Each button also has a shadow, and each volume slider knob shares a color with its corresponding button's shadow. There is a button color changing button (using jscolor) and a shadow color changing button (also using jscolor), which changes the color of the button/volume slider/sound upload and the button shadow/volume slider knob, respectivevly.

The sound upload is bound to an input file button, so I could style the button as I wanted. When the sound is loaded, its ID3 information is read (by ID3.js) and stored in an associative array. The sound clip is attached to an HTML5 audio instance, one for each button. When one of the main buttons is clicked, its corresponding audio instance plays. The volume sliders adjust the volume of its corresponding audio instance. The song duration is calculated from the length of the audio instance and stored. The type of file uploaded (MP3, WAV, OGG) is also found and stored.

I added tooltips to the sliders, sound upload buttons, and color changing buttons so a new user isn't lost. A tooltip appears on buttons that have sound uploaded to them. Those tooltips display the corresponding sound clip information stored in the associative array.

There are still some bugs here and there but overall it's more or less complete. If anyone has any suggestions or comments I'd be happy to hear them!
