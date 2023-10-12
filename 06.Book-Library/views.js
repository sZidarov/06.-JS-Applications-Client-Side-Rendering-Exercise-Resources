import { html } from "../node_modules/lit-html/lit-html.js";
import { deleteBook, editBook } from "./submit.js";

export const createTable = ()=>html`
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody id = "tableBody">
            
        </tbody>
    </table>
    `;

export const loadTableData = (books)=>html`
   ${books.map((book)=>{
    return html`
        <tr id = ${book[0]}>
            <td>${book[1].title}</td>
            <td>${book[1].author}</td>
            <td>
                <button @click = ${editBook}>Edit</button>
                <button @click = ${deleteBook}>Delete</button>
             </td>
        </tr>
    `})}
    `;

export const addBookForm = ()=>html`
    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>
    `;

export const editBookForm = ()=>html`
    <form id="edit-form">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>
    `;