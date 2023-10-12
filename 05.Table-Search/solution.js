import { html, render } from "../node_modules/lit-html/lit-html.js";
import { getTableData } from "./api.js";

function solve() {
   const tbody = document.querySelector("tbody");
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   window.addEventListener("load", onLoad)

   async function onLoad(){
      const personsData = Object.entries(await getTableData())
      console.log(personsData);
      const loadTableData = (personData)=>html`
         ${personsData.map((person)=>{
            const personDataArr = Object.entries(person[1]);
            return html`
            <tr id = ${person[0]}>
               <td>${person[1].firstName} ${person[1].lastName}</td>
               <td>${person[1].email}</td>
               <td>${person[1].course}</td>   
            </tr>
            `
         })}
         
      `
      render(loadTableData(personsData), tbody)
   }

   async function onClick() {
      const inputField = document.getElementById("searchField");
      let isFound = false;
      const tableDataArr = document.querySelectorAll("tbody td");

      for (const td of tableDataArr) {
         //console.log(td)
         td.parentElement.classList.remove("select")
      }

      if(inputField.value === ""){
         alert("Incorect input!")
         return ""
      }

      for (let i = 0; i < tableDataArr.length; i++) {
         const tdValue = tableDataArr[i].textContent;
         if(tdValue.includes(inputField.value)){
            //console.log(tdValue);
            tableDataArr[i].parentElement.classList.add("select");
            isFound = true;
         }
      }
      if(isFound === false){
         alert("No match found!")
      }
      inputField.value = ""
      //console.log(tableDataArr[0].parentElement);
   }
}
solve()