var video;
var videoId;

var sections = [
    {
        start: 0,
        end: 5
    },
    {
        start: 15,
        end: 30
    }
];

function onTimeUpdate() {
    for (var section of sections) {
        if (video.currentTime >= section.start && video.currentTime < section.end) {
            video.currentTime = section.end;
        }
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