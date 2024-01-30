chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'review_website') {
    console.log('Background Script Received Message');
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { message: 'review_website' });
    });
  }
});
