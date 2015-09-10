var status = "pause";

function toggleIconAndTitle() {

  // check if soundcloud tab is found or not
  getSoundcloudTab();

  if (status == 'pause') {
    chrome.browserAction.setIcon({path:"iconplay.png"});
    chrome.browserAction.setTitle({title: "Play song on SoundCloud"});
    status = 'playing'
    console.log('Not Playing');
  } else {
    chrome.browserAction.setIcon({path:"iconpause.png"});
    chrome.browserAction.setTitle({title: "Pause current song"});
    status = 'pause';
    console.log('Playing');
  };
};

function getSoundcloudTab() {
  // get list of all soundcloud tabs
  
  chrome.tabs.query({url: 'https://soundcloud.com/*'}, function(tabs) {
    if (tabs.length > 0) {
      console.log('Soundcloud is present.');

      // find a tab with status - 'complete'
      // reload if status is not complete
      // TODO: find completely loaded tab from all the tabs
      // note: check if DOM is loaded or not

      active_tabs = tabs.filter(function(tab) { return tab.status == 'complete';})
      console.log("No. of active instances present:", active_tabs.length);
      console.log(active_tabs);
    } else {
      console.log('No soundcloud instance found.');
      chrome.tabs.create({url: 'https://soundcloud.com/'}, function(tab) {
        console.log('Opening soundcloud.com ...');
      });
    }
  });
};

chrome.browserAction.onClicked.addListener(toggleIconAndTitle);
toggleIconAndTitle();
