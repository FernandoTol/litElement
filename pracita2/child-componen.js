import { LitElement, html, css } from "lit";
import "@material/mwc-list/mwc-list.js";

class ChildComponent extends LitElement {
    static get properties() {
        return{
            responseJSON: { type: Array, attribute: "complex-drilled-prop" },
        }
    }

    constructor() {
        super()
        this.responseJSON = []
    }

    // updated() {
    //     console.log(this.responseJSON);
    // }

    render() {
        return html`
            <p>complex drilled prop</p>
            ${ this.responseJSON.map(
                subProp => html `
                <mwc-list>
                    <mwc-list-item twoline>
                        <span>User Id ${ subProp.userId }</span>
                        <span>Id ${ subProp.id }</span>
                        <span>Title ${ subProp.title }</span>
                        <span slot="secondary">Boddy: ${subProp.body}</span>
                    </mwc-list-item>
                </mwc-list>
                `
            )}
        `;
    }
}

customElements.define("child-component", ChildComponent)