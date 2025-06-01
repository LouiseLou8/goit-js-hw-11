import{a as c,S as l,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="https://pixabay.com/api/",u="50595135-236ed99e353605725b41c38ac";async function p(o){const s={key:u,q:o,imageType:"photo",orientation:"horizontal",safesearch:!0};try{return(await c.get(d,{params:s})).data}catch{throw new Error("Помилка при отриманні зображень")}}const f=new l(".gallery a",{captionData:"alt",captionDelay:250}),m=document.querySelector(".gallery");function y(o){const s=o.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
          </a>
          <div class="gallery-info">
            <p><b>Likes:</b> ${e.likes}</p>
            <p><b>Views:</b> ${e.views}</p>
            <p><b>Comments:</b> ${e.comments}</p>
            <p><b>Downloads:</b> ${e.downloads}</p>
          </div>
        </li>`).join("");m.insertAdjacentHTML("beforeend",s),f.refresh()}function h(){const o=document.querySelector(".gallery");o.innerHTML=""}function g(){document.querySelector(".loader").classList.remove("is-hidden")}function b(){document.querySelector(".loader").classList.add("is-hidden")}const L=document.querySelector(".search-form"),w=document.querySelector(".search-input");L.addEventListener("submit",async o=>{o.preventDefault();const s=w.value.trim();if(s===""){a.error({message:"Введіть запит для пошуку",position:"topRight"});return}g(),h();try{const e=await p(s);if(e.hits.length===0){a.error({message:"Нічого не знайдено за запитом",position:"topRight"});return}y(e.hits)}catch{a.error({message:"Сталася помилка при отрманні даних",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
