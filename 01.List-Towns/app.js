import { html, render } from "../node_modules/lit-html/lit-html.js";

const form = document.querySelector("form");
const root = document.getElementById("root");

form.addEventListener("submit", (event)=>{
    const formData = new FormData(form);
    event.preventDefault();
    const inputArr = formData.get("towns").split(", ");
    const townsList = (towns)=>html`
    <ul>
         ${towns.map(town => html`<li>${town}</li>`)}
    </ul>
    `;
    render (townsList(inputArr), root)
});
