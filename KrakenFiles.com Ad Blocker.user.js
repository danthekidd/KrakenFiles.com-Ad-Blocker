// ==UserScript==
// @name         KrakenFiles.com Ad Blocker
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  we all hate ads, but especially the annoying ones
// @author       danthekidd
// @icon         https://krakenfiles.com/images/favicon.png
// @match        *://krakenfiles.com/*
// @match        *://www.krakenfiles.com/*
// @updateURL    https://github.com/danthekidd/KrakenFiles.com-Ad-Blocker/raw/refs/heads/main/KrakenFiles.com%20Ad%20Blocker.user.js
// @grant        none
// ==/UserScript==

(function () {
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

    function blockInvisibleFrames() {
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            const style = getComputedStyle(iframe);
            if (
                style.display === 'none' ||
                style.opacity === '0' ||
                parseInt(style.width, 10) <= 5 ||
                parseInt(style.height, 10) <= 5
            ) {
                iframe.remove();
            } else if (iframe.onclick) {
                iframe.onclick = null;
            }
        });
    }

    function blockPopups() {
        // Override `window.open` to block popups
        const originalWindowOpen = window.open;
        window.open = function (...args) {
            return null;
        };

        const anchors = document.querySelectorAll('a[target="_blank"]');
        anchors.forEach(anchor => {
            anchor.target = '_self';
        });
    }

    setInterval(() => {
        hideAllIframes();
        removeMaliciousScripts();
        blockInvisibleFrames();
        blockPopups();
    }, 100)

})();
