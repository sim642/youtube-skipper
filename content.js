function load() {
    var video = document.querySelector("video");
    console.log(video);

    video.addEventListener("timeupdate", function () {
        if (video.currentTime > 10 && video.currentTime < 20) {
            video.currentTime = 20;
        }
    });
}


load();

browser.runtime.onMessage.addListener(function (message) {
    load();
});