var menuContexts = ["image"];
var menuItemId = "pinterestOriginalDownload"

chrome.contextMenus.create({
  title: "Download original image",
  contexts: ["image"],
  id: menuItemId,
  documentUrlPatterns: [
    "https://www.pinterest.com/*/*",
    "https://www.pinterest.com/*"
  ]
});

chrome.contextMenus.onClicked.addListener(function(pageInfo) {
  if (pageInfo.menuItemId == menuItemId) {
    var srcUrl = pageInfo.srcUrl;

    if (srcUrl) {
      var originalUrl = srcUrl.replace(/\.com\/\d+x/, ".com/originals");

      chrome.downloads.download({
        url: originalUrl,
      });
    }
  }
})
