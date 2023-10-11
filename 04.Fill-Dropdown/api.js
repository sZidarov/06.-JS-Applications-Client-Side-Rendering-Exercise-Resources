import { urls } from "./links.js"

export async function getOptions (){
    const request = await fetch(urls.get);
    try {
        if (request.status !== 200) {
            throw new Error(request.message);
        }
        const response = await request.json();
        //console.log(response);
        return response;
    } catch (error) {
        alert(error.message)
    }
}

export async function addOption (data){
    
    const body = JSON.stringify({
        "text": data
    })
    
    const request = await fetch (urls.post, {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body
    })
}