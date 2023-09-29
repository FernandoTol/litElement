import { LitElement, html, css } from "lit";
import "@material/mwc-button/mwc-button.js";
import "@material/mwc-textfield/mwc-textfield.js";

class LitDomInteractions extends LitElement {

    static get properties(){
        return{
            person:{ type:String },
        };
    }

    constructor(){
        super()
        this.person = "Fernando"
        this.isAdmin = false
    }

    static get styles() {
        return css`
        #greeting {
            color: red;
        }
        `;
    }

    render() {
        return html`
            <p id="greeting">Hola</p>

            <mwc-textfield
            id="person"
            .value=${this.person}
            @keypress = ${e => (this.person = e.target.value)}
            lavel = "Nombre"
            helper = "Escribe tu nombre"
            ></mwc-textfield>

            <mwc-button
            raised
            @click="${this.handleClick}"
            label="raised"
            ></mwc-button>

            <input
            type="checkbox"
            ?checked="${this.isAdmin}"
            ></input>

        `;
    }

    handleClick(e){
        const personTextfield = this.shadowRoot.getElementById( "person" )
        console.log(personTextfield);
    }

}

customElements.define( "lit-dom-interactions", LitDomInteractions )