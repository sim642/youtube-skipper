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

    var url = new URL(window.location.href);
    var videoId = url.searchParams.get("v");
    console.log(videoId);

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