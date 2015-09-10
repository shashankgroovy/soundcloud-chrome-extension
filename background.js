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
  
  chrome.tabs.query({url: 'https://soundcloud.com/*', currentWindow: true}, function(tabs) {
    if (tabs.length > 0) {
      console.log('Soundcloud is present.');
      console.log("list:" , tabs);
      return true;
    } else {
      console.log('No soundcloud instance found.');
      return false;
    }
  });
};

chrome.browserAction.onClicked.addListener(toggleIconAndTitle);
toggleIconAndTitle();
