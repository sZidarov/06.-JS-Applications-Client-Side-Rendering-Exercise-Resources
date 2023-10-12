import { html, render } from "../node_modules/lit-html/lit-html.js";
import { getBooks } from "./api.js";
import { addBook } from "./submit.js";
import { createTable, loadTableData, addBookForm } from "./views.js";

window.addEventListener("load", onLoad)
const body = document.querySelector("body");

async function onLoad(){
    const createLoadBtn = ()=>html`<button id = "loadBooks" @click = ${loadBooks}>LOAD ALL BOOKS</button>`
    render(createLoadBtn(), body)   
}

export async function loadBooks(){
    const books = Object.entries(await getBooks())
    console.log(books);
    const tableFragment = document.createDocumentFragment();
    const addFragment = document.createDocumentFragment();
    
    render(createTable(), tableFragment)
    if(!document.querySelector("table")){
        body.appendChild(tableFragment)   
    }else{
        body.replaceChild(tableFragment,document.querySelector("table"))   
    }

    const tbody = document.getElementById("tableBody")
    render(loadTableData(books), tbody)
    
    render(addBookForm(), addFragment)
    if(!document.getElementById("add-form")){
        //body.replaceChild(addFragment,document.getElementById("add-form"))
        body.appendChild(addFragment)
    }
    
    if(document.getElementById("edit-form")){
        body.replaceChild(addFragment, document.getElementById("edit-form"))
    }
    
    const addForm = document.getElementById("add-form");
    addForm.addEventListener("submit",addBook)
}
