(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),r=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),n.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};o.addEventListener("click",r),c.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
//# sourceMappingURL=commonHelpers.js.map
