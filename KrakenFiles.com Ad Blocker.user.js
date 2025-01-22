// ==UserScript==
// @name         KrakenFiles.com Ad Blocker
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  we all hate ads, but especially the annoying ones
// @author       danthekidd
// @icon         https://krakenfiles.com/images/favicon.png
// @match        *://krakenfiles.com/*
// @match        *://www.krakenfiles.com/*
// @updateURL    https://github.com/danthekidd/KrakenFiles.com-Ad-Blocker/raw/refs/heads/main/KrakenFiles.com%20Ad%20Blocker.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function hideAllIframes() {
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            iframe.style.display = 'none';
        });
    }

    function removeMaliciousScripts() {
        const scripts = document.querySelectorAll('script[src]');
        scripts.forEach(script => {
            if (script.src.includes('naupsithizeekee.com')) {
                script.remove();
            }
        });
    }

    setInterval(() => {
        hideAllIframes();
        removeMaliciousScripts();
    }, 100);

})();
