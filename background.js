browser.webNavigation.onHistoryStateUpdated.addListener(function (details) {
    console.log(details);
    browser.tabs.sendMessage(details.tabId, "foo");
});