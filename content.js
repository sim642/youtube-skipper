alert("Youtube Skipper");

browser.runtime.onMessage.addListener(function (message) {
    alert(message);
    console.log(document.querySelector("video"))
});