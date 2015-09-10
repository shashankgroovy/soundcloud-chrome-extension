var status = "pause";

function toggleIconAndTitle() {

  if (status == 'pause') {
    chrome.browserAction.setIcon({path:"iconplay.png"});
    chrome.browserAction.setTitle({title: "Play song on SoundCloud"});
    status = 'playing'
    console.log('Playing -- on Soundcloud');
  } else {
    chrome.browserAction.setIcon({path:"iconpause.png"});
    chrome.browserAction.setTitle({title: "Pause current song"});
    status = 'pause';
    console.log('Song Paused -- on Soundcloud');
  };
};

chrome.browserAction.onClicked.addListener(toggleIconAndTitle);
toggleIconAndTitle();
