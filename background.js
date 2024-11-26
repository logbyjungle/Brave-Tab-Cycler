chrome.commands.onCommand.addListener(async (command) => {
  if (command === "cycle-next-tab") {
    // Get all open tabs in the current window
    // let [currentWindow] = await chrome.windows.getAll({populate: true, windowTypes: ["normal"]});
	let currentWindow = await chrome.windows.getCurrent({populate: true});
    let tabs = currentWindow.tabs;
    let activeTab = tabs.find(tab => tab.active);
    
    // Determine the next tab's index, wrapping around if at the last tab
    let nextTabIndex = (activeTab.index + 1) % tabs.length;
    
    // Switch to the next tab
    chrome.tabs.update(tabs[nextTabIndex].id, {active: true});
  }
});
