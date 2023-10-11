import { html, render } from "../node_modules/lit-html/lit-html.js";
import {cats} from "./catSeeder.js";
//console.log(cats);
const allCatSection = document.getElementById("allCats");
const catList = (catsData)=>html`
    <ul>
        ${catsData.map((cat)=>{
           return html`
            <li>
                <img src = ${`./images/${cat.imageLocation}.jpg`} width = "250" height = "250" alt = "Card image cap"></img>
                <div class = "info">
                    <button class = "showBtn" @click = ${onClick} = >Show status code</button>
                    <div class = "status" style = "display: none" id = ${cat.id}>
                        <h4 class= "card-title">Status code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>
            `
        })}
    </ul>
`;

function onClick (event){
    const target = event.target.parentElement.querySelector("div");
    target.style.display = "block"
}
window.addEventListener("load",render(catList(cats), allCatSection))
