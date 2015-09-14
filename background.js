var status;
function toggleIconAndTitle() {

  // check if soundcloud tab is found or not
  getSoundcloudTab();

  if (status == "" || status == 'Not playing') {
    chrome.browserAction.setIcon({path:"images/iconplay.png"});
    chrome.browserAction.setTitle({title: "Play song on SoundCloud"});
    status = 'Playing'
    console.log('Not playing');
  } else if (status == 'Playing') {
    chrome.browserAction.setIcon({path:"images/iconpause.png"});
    chrome.browserAction.setTitle({title: "Pause current song"});
    status = 'Not playing';
    console.log('Playing');
  };
};

function getSoundcloudTab() {
  // get list of all soundcloud tabs
  
  chrome.tabs.query({url: 'https://soundcloud.com/*'}, function(tabs) {
    if (tabs.length > 0) {
      console.log('Soundcloud is present.');

      // find activetabs
      activeTabs = tabs.filter(function(tab) { return tab.status == 'complete';})
      console.log("No. of active instances present:", activeTabs.length);
      activeTabs.forEach(function(item) {
        console.log(item.id, item.status);
      })

      findPlayer(activeTabs[0]);

    } else {
      console.log('No soundcloud instance found.');
      chrome.tabs.create({url: 'https://soundcloud.com/'}, function(tab) {
        console.log('Opening http://soundcloud.com');
      });
    }
  });
};

function findPlayer(tab) {
  console.log('Searching for player...');

  // Initiate communication request with content script.
  chrome.tabs.sendMessage(tab.id, {msg: 'click'}, function(response) {
    console.log('accessing tab: ', tab.id);
    console.log('found player: ', response);
  })
}

chrome.browserAction.onClicked.addListener(toggleIconAndTitle);
toggleIconAndTitle();
