chrome.runtime.onInstalled.addListener(() => {
  console.log("Tab Resource Manager Installed ✅");
});

chrome.tabs.onCreated.addListener((tab) => {
  console.log("New Tab Opened:", tab);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    console.log(`Tab Updated [${tabId}]: ${tab.url}`);
  }
});

chrome.tabs.onRemoved.addListener((tabId) => {
  console.log(`Tab Closed [${tabId}]`);
});
