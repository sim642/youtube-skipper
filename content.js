var video;
var videoId;

function onTimeUpdate() {
    if (video.currentTime > 10 && video.currentTime < 20) {
        video.currentTime = 20;
    }
}

function unload() {
    if (video) {
        video.removeEventListener("timeupdate", onTimeUpdate);
    }
}

function load() {
    unload();

    video = document.querySelector("video");
    console.log(video);

    var url = new URL(window.location.href);
    videoId = url.searchParams.get("v");
    console.log(videoId);

    video.addEventListener("timeupdate", onTimeUpdate);
}


load();

browser.runtime.onMessage.addListener(function (message) {
    load();
});