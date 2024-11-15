chrome.commands.onCommand.addListener(async (command) => {
  if (command === "cycle-next-tab") {

    let [currentWindow] = await chrome.windows.getAll({populate: true, windowTypes: ["normal"]});
    let tabs = currentWindow.tabs;
    let activeTab = tabs.find(tab => tab.active);
    
    let nextTabIndex = (activeTab.index + 1) % tabs.length;
    
    chrome.tabs.update(tabs[nextTabIndex].id, {active: true});
  }
});
