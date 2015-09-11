// inject the content-script

// update exact DOM position of player. use XPATH? :/
var player = document.getElementById('app');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('accessing the content-script');
  if (request.msg == 'getDOM')
    sendResponse({msg: '#shrank', data: player});
});
