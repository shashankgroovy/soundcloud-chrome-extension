// inject the content-script
var playButton = document.querySelector('.playControl');
var prevButton = document.querySelector('.skipControl__previous');
var nextButton = document.querySelector('.skipControl__next');
var trackInfo = document.querySelector('.playbackSoundBadge__title');

function play() {
  playButton.click();
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('accessing the content-script');
  if (request.msg == 'click') {
    play();
    sendResponse({msg: '#shrank', data: playButton.title});
  }
});
