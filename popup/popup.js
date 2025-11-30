document.addEventListener("DOMContentLoaded", async () => {
  let tabs = await chrome.tabs.query({});
  let list = document.getElementById("tabList");
  tabs.forEach(tab => {
    let li = document.createElement("li");
    li.textContent = `${tab.title} (${tab.id})`;
    list.appendChild(li);
  });
});
