import { LitElement, html } from "lit";
import "./child-componen.js"

class ParentComponent extends LitElement {
    static get properties() {
        return{
            propToDrill       : { type: String },
            complexPropToDrill: { type: Array },
        }
    }

    constructor() {
        super()
        this.propToDrill        = "Dato simple desde el padre"
        this.complexPropToDrill = [{ id: 1, name: "Fernando", lastname: "Toledo" }];
    }

    //updated() {
        //console.log(this.complexPropToDrill);
        //console.log(JSON.stringify( this.complexPropToDrill ));
    //}

    render() {
        return html`
            <p> El Siguiente, es un componente extremo</p>

            <child-component
                complex-drilled-prop="${ JSON.stringify( this.complexPropToDrill )}"
                drilled-prop"="${ this.propToDrill }"
            ></child-component>
        `;
    }
}

customElements.define("component-composition", ParentComponent)