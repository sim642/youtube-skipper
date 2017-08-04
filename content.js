var video;
var onTimeUpdate;

function unload() {
    if (video) {
        video.removeEventListener("timeupdate", onTimeUpdate);
    }
}

function load() {
    unload();

    video = document.querySelector("video");
    console.log(video);

    onTimeUpdate = function () {
        if (video.currentTime > 10 && video.currentTime < 20) {
            video.currentTime = 20;
        }
    };
    video.addEventListener("timeupdate", onTimeUpdate);
}


load();

browser.runtime.onMessage.addListener(function (message) {
    load();
});