"use strict";function createFunctionWithTimeout(e,n){function t(){o||(o=!0,e())}var o=!1;return setTimeout(t,n||1e3),t}function openModal(){var e=document.getElementById("search-overlay");e&&(e.style.display="block")}function closeModal(){var e=document.getElementById("search-overlay");e&&(e.style.display="none")}var track=function(e,n,t){n=n||"outbound",ga("send","event",n,"click",e,{transport:"beacon",hitCallback:function(){t||window.open(e,"_blank")}})},searchButton=document.getElementById("search-modal");searchButton&&searchButton.addEventListener("click",openModal);var closeOverlay=document.getElementById("close-search-overlay");closeOverlay&&closeOverlay.addEventListener("click",closeModal),window.onload=function(){loadSearch()};