import { LitElement, html } from "lit";
import "./child-componen.js"

class ParentComponent extends LitElement {
    static get properties() {
        return {
            propToDrill: { type: String },
            responseJSON: { type: Array },
        }
    }

    constructor() {
        super()
        this.responseJSON = [{ userId: Number, id: Number, title: String, body: String}];
    }

    firstUpdated() {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                this.responseJSON = data;
            });
    }

    //updated() {
    //     console.log(this.responseJSON);
       //console.log(JSON.stringify(this.responseJSON));
    //}

    render() {
        return html`
            <p> Tabla de ejemplos</p>

            <child-component
                complex-drilled-prop="${JSON.stringify(this.responseJSON)}"
            ></child-component>
        `;
    }
}

customElements.define("component-composition", ParentComponent)