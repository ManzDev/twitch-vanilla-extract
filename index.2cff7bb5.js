(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();var i="_1pfmm9x0",l="c3yj360";class c extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML=`
    <div class="${i} ${l}">
      <h1>CatSoul_</h1>
      <div class="data">
        <img class="avatar" src="images/catsoul.png" alt="CatSoul es un maravilloso gato.">
        <p>Alter ego de BlurSoul. Es un gato que maulla si est\xE1 4 d\xEDas sin editar una imagen en pixel art o utilizar Stable Diffusion. Es un artista gatito que hace maravillas con sus patitas peludas y redonditas (es un gato sin cuello).</p>
      </div>
    </div>`}}customElements.define("cat-card",c);
