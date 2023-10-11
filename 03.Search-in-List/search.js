import { html, render } from "../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const townsDiv = document.getElementById("towns");
const resultDiv = document.getElementById("result");
const button = document.querySelector("button");
button.addEventListener('click', search);
const inputField = document.getElementById("searchText");

const createList = (towns) => html `
   <ul>
      ${towns.map(town=>html`<li>${town}</li>`)}
   </ul>
`;

window.addEventListener("load",render(createList(towns),townsDiv));

function search() {
   const inputText = inputField.value;
 
   let matchCounter = 0;
   for (const town of document.querySelectorAll('li')) {
      town.classList.remove("active");
   };

   if(inputText == ""){
      resultDiv.replaceChildren(document.createTextNode(`Invalid search!`));
      return "";
   };

   for (let i = 0; i < towns.length; i++) {
      const town = towns[i];
      if(town.includes(inputText)){
         document.querySelectorAll('li')[i].classList.add("active")
         matchCounter++;
      };
   };
   resultDiv.replaceChildren(document.createTextNode(`${matchCounter} matches found`));
};
