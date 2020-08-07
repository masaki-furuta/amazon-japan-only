chrome.browserAction.onClicked.addListener(function(tab) {
    var url = tab.url;
    var result = url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
    if (result == "www.amazon.co.jp") {
        window.open(url+'&emi=AN1VRQENFRJN5');
    }
});

