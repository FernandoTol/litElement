import { LitElement, html } from "lit";

class BasicLitElement extends LitElement {
    render() {
        return html `<p> Hola, mundo </p>`
    }
}

customElements.define('basic-lit-element', BasicLitElement)