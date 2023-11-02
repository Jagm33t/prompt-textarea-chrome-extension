chrome.contextMenus.create({
  title: "Search in ChatGPT",
  contexts: ["selection"],
  id: "searchInChatGPT",
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "searchInChatGPT") {
    chrome.windows.create({
      url: "popup.html",
      type: "popup",
      width: 400,
      height: 400,
    });
  }
});
