// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  // chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  //   // With a new rule ...
  //   chrome.declarativeContent.onPageChanged.addRules([
  //     {
  //       // That fires when a page's URL contains a 'youtube' ...
  //   conditions: [
  //     new chrome.declarativeContent.PageStateMatcher({
  //           pageUrl: { urlContains: 'youtube' },
  //         })
  //       ],
  //       // And shows the extension's page action.
  //       actions: [ new chrome.declarativeContent.ShowPageAction() ]
  //     }
  //   ]);
  // });

});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	if(tab.url.indexOf('youtube.com/watch') > -1){
		chrome.pageAction.show(tab.id);
	}
	else{
		chrome.pageAction.hide(tab.id);
	}
});
