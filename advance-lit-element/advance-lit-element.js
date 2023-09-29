import { LitElement, html } from "lit"

class AdvanceLitElement extends LitElement {
    static get properties() {
        return {
            person: { type: String },
            groceriesList: { type: Array },
            isAdmin: { type: Boolean },
        };
    }

    constructor() {
        super();
        this.person = "Fernando";
        this.groceriesList = [ "Banana", "Manzana", "Avena" ];
        this.isAdmin = true
    }

    render() {

        return html `

        <p>Hola, ${this.person}</p>

        <ul>
            ${this.groceriesList.map(food => html `<li>${food}</li>`)}
        </ul>

        ${this.isAdmin ? html`<p>Hola, Administrador`: html`hola, usuario`}
        `;
    }
}

customElements.define("advance-lit-element", AdvanceLitElement)