/* empty css                    */(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),c=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),n.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};o.addEventListener("click",c),i.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();let r=0;const s=document.querySelectorAll(".properties-card__item"),u=document.querySelector("#prevBtn"),a=document.querySelector("#nextBtn");function d(){u.disabled=r===0,a.disabled=r===s.length-1}u.addEventListener("click",()=>{let n=-1;s[r].classList.remove("active"),r+=n,s[r].classList.add("active"),d()});a.addEventListener("click",()=>{let n=1;s[r].classList.remove("active"),r+=n,s[r].classList.add("active"),d()});d();
//# sourceMappingURL=commonHelpers2.js.map
