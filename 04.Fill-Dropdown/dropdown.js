import { html, render } from "../node_modules/lit-html/lit-html.js";
import { addOption, getOptions } from "./api.js";

const selectMenu = document.getElementById("menu");
const inputField = document.getElementById("itemText");
const form = document.querySelector("form");
form.addEventListener("submit",addItem)
async function addItem(ev) {
    ev.preventDefault();
    if(inputField.value === ""){
        alert('Can not add empty field!');
    }else{
        addOption(inputField.value)
    }
    inputField.value="";
    setOptions();
    //console.log(options);
}

async function setOptions() {
    const options = Object.entries(await getOptions());
    const createOptionsList = ()=>html`
        ${options.map(element=>html`<option value = ${element[0]}>${element[1].text}</option>)`)}
    `
    render (createOptionsList(),selectMenu)
}
window.addEventListener("load", setOptions);