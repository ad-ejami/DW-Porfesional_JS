import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector("video");
const player = new MediaPlayer({
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause(),
    ]
});


const playButton: HTMLElement = document.querySelector("button");
playButton.onclick = () => player.togglePlay();
const muteButton: HTMLElement = document.getElementById("mute-botton");

muteButton.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
      console.log(error.message);
    });
  }