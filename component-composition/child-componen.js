import { LitElement, html } from "lit";

class ChildComponent extends LitElement {
    static get properties() {
        return{
            drilledProp:        { type: String, attribute: "drilled-prop" },
            drilledComplexProp: { type: Array, attribute: "complex-drilled-prop" },
        }
    }

    constructor() {
        super()
        this.drilledProp        = ""
        this.drilledComplexProp = []
    }

    // updated() {
    //     console.log(this.drilledComplexProp);
    // }

    render() {
        return html`
            <p> Drilled Prop</p>
            <p>${ this.drilledProp }</p>
            <p>complex drilled prop</p>
            ${ this.drilledComplexProp.map(
                subProp => html `
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                        </tr>
                        <tr>
                            <td>${ subProp.id }</td>
                            <td>${ subProp.name }</td>
                            <td>${ subProp.lastname }</td>
                        </tr>
                    </table>
                `
            )}
        `;
    }
}

customElements.define("child-component", ChildComponent)