import { LitElement, html, css } from "lit";
import "@material/mwc-button";
import "@material/mwc-textfield";

class LitDomInteractions extends LitElement {

    static get properties() {
        return {
            person: { type: String },
        };
    }

    constructor() {
        super()
        this.person = "Fernando"
        this.isAdmin = false
    }

    static get styles() {
        return css`
            #greeting {
                color: red;
                }

            mwc-button {
                --mdc-theme-primary: #e9437a;
                --mdc-theme-on-primary: white;
                }

            ul {
                list-style: none;
            }

            btn-delete{
                display: inline-block
            }

        `;
    }

    render() {
        return html`
            <p id="greeting">Listas de tareas</p>

            <mwc-textfield
            id="person"

            @keypress = ${e => (this.person = e.target.value)}
            lavel = "Nombre"
            helper = "Escribe tu nombre"
            ></mwc-textfield>

            <mwc-button
            id="addButton"
            outlined
            @click="${this.handleClick}"
            label="Enviar"
            ></mwc-button>

            <div id="conteiner">
            <ul></ul>
            </div>

            <mwc-button
            id="deleteButton"
            outlined
            @click="${this.DeletAll}"
            label="Barrar Lista"
            ></mwc-button>
        `;
    }


    handleClick(e) {
        const ul = this.shadowRoot.querySelector("ul")
        const personTextfield = this.shadowRoot.getElementById("person").value

        if (personTextfield !== "") {
            const li = document.createElement('li')
            const list = document.createElement('p')
            list.textContent = personTextfield
            list.style.display = "inline-block"

            li.appendChild(list)
            li.appendChild(this.DeletList(ul))
            ul.appendChild(li)
        }

    }

    DeletList(ul){
        const deleteBtn = document.createElement("mwc-button")

        deleteBtn.textContent = "X"
        deleteBtn.className   = "btn-delete"
        deleteBtn.style.display = "inline-block"

        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.parentElement
            console.log(item);
            ul.removeChild(item)
        })
        return deleteBtn
    }

    DeletAll(e) {

        const ul = this.shadowRoot.querySelector("ul")
        ul.innerHTML = "";

    }

}

customElements.define("web-component", LitDomInteractions)