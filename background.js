browser.webNavigation.onHistoryStateUpdated.addListener(function (details) {
    console.log(details);
    browser.tabs.sendMessage(details.tabId, "foo");
}, {
    url: [
        {hostSuffix: ".youtube.com"},
        {hostEquals: "youtube.com"},
    ]
});