import throttle from "lodash.throttle";
import Player from "@vimeo/player";

const iframeRef = document.querySelector('#vimeo-player');
const VIDEO_KEY_STORAGE = 'videoplayer-current-time';
const player = new Player(iframeRef);
onTimeSet()
player.on('timeupdate', throttle(onTimeUpdate, 250));

function onTimeUpdate(data) {
    localStorage.setItem(VIDEO_KEY_STORAGE, data.seconds);
}

function onTimeSet() {
    const videoTime = localStorage.getItem(VIDEO_KEY_STORAGE);
    if (videoTime) {
        player.setCurrentTime(+videoTime)
    }
}