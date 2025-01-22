// ==UserScript==
// @name         KrakenFiles.com Ad Blocker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  we all hate ads, but especially the annoying ones
// @author       danthekidd
// @icon         https://krakenfiles.com/images/favicon.png
// @match        *://krakenfiles.com/*
// @match        *://www.krakenfiles.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function hideAllIframes() {
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            iframe.style.display = 'none';
            console.log('Hid an iframe');
        });
    }

    const observer = new MutationObserver(hideAllIframes);
    observer.observe(document.body, { childList: true, subtree: true });

    hideAllIframes();
})();
