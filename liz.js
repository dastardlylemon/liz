function insertStyles(type) {
  var link = document.createElement('link');
  link.href = chrome.runtime.getURL(type + '.css');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  document.documentElement.insertBefore(link, null);
}

insertStyles('square-avatars');
insertStyles('hide-moments');
insertStyles('liked-tweets');
insertStyles('small-media');
insertStyles('show-links');

// also eventually hidden divs from the DOM
