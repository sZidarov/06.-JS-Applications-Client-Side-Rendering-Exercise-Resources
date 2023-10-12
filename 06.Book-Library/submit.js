import { render } from "../node_modules/lit-html/lit-html.js";
import { postBook, deleteReq, putReq } from "./api.js";
import { loadBooks } from "./app.js";
import { editBookForm } from "./views.js";

export async function addBook (event){
    event.preventDefault();
    const formData = new FormData (event.target);
    const author = formData.get("author");
    const title = formData.get("title");
    if(title==="" || author == ""){
        alert ("All fields must be filled!");
    }else{
        event.target.reset();
        await postBook(author,title);
        loadBooks();
    }
}

export async function deleteBook (event){
    event.preventDefault();
    const parent = event.target.parentElement.parentElement;
    const bookId = parent.id;
    const bookTitle = parent.querySelector("td").textContent;
    const proceed = confirm(`Are you sure you want to delete "${bookTitle}"`);
    
    if(proceed){
        //console.log(bookId);
        await deleteReq(bookId); // !!!!
        await loadBooks();
    };
};

export async function editBook (event){
    event.preventDefault();
    const body = document.querySelector("body");
    const addForm = document.getElementById("add-form");
    const editFragment = document.createDocumentFragment();
    
    const parent = event.target.parentElement.parentElement;
    const currentTitle = parent.querySelectorAll("td")[0].textContent;
    const currentAuthor = parent.querySelectorAll("td")[1].textContent;
    const bookId = parent.id;
    
    render(editBookForm(), editFragment);
    if(!document.getElementById("edit-form")){
        body.replaceChild(editFragment,addForm);
    }else{
        body.replaceChild(editFragment,document.getElementById("edit-form"));
    };

    const editForm = document.getElementById("edit-form");
    const inputTitle = editForm.querySelectorAll("input")[1];
    const inputAuthor = editForm.querySelectorAll("input")[2];
    inputTitle.value = currentTitle;
    inputAuthor.value = currentAuthor;
    
    editForm.addEventListener("submit",(ev)=>{
        ev.preventDefault();
        const formData = new FormData(editForm);
        const newAuthor = formData.get("author");
        const newTitle = formData.get("title");
        if(newTitle==="" || newAuthor == ""){
        alert ("All fields must be filled!")
        }else{
        editForm.reset();
        putReq(bookId,newAuthor,newTitle);
        loadBooks();
        };
    });
}