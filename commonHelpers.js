/* empty css                      */import{S as c,P as a,N as d,a as u,E as f,K as p,M as m}from"./assets/vendor-02d23383.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const o=document.getElementById("modal"),y=document.getElementById("openModalBtn"),w=document.querySelector(".close-btn"),g=document.querySelectorAll(".modal-item");y.onclick=function(){o.style.display="block"};w.onclick=function(){o.style.display="none"};window.onclick=function(n){n.target==o&&(o.style.display="none")};g.forEach(function(n){n.onclick=function(){o.style.display="none"}});const b={modules:[a,d,u,f,p,m],breakpoints:{320:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:32}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0},mousewheel:!0};new c(".swiper",b);
//# sourceMappingURL=commonHelpers.js.map
