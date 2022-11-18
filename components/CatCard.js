import { styles } from "./CatCard.css";
import { themeClass } from "./themes.css";
class CatCard extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = /* html */ `
    <div class="${styles} ${themeClass}">
      <h1>CatSoul_</h1>
      <div class="data">
        <img class="avatar" src="images/catsoul.png" alt="CatSoul es un maravilloso gato.">
        <p>Alter ego de BlurSoul. Es un gato que maulla si está 4 días sin editar una imagen en pixel art o utilizar Stable Diffusion. Es un artista gatito que hace maravillas con sus patitas peludas y redonditas (es un gato sin cuello).</p>
      </div>
    </div>`;
    }
}
customElements.define("cat-card", CatCard);
