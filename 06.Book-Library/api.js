export const links = {
    "getAllBooks": "http://localhost:3030/jsonstore/collections/books",
    "postBook": "http://localhost:3030/jsonstore/collections/books",
    "getSingleBook": "http://localhost:3030/jsonstore/collections/books/", //attach id to the back
};

export async function getBooks(){
    const request = await fetch(links.getAllBooks);
    try {
        if(request.status !== 200){
            throw new Error(request.message)
        }
        const responce = await request.json();
        return responce
        //console.log(responce);
    } catch (error) {
        alert(error.message)
    }
};

export async function postBook(author, title){
    const body = JSON.stringify({
        "author": author,
        "title": title
    })
    const request = await fetch (links.postBook, {
        method:"post",
        headers:{"Content-Type": "application/json"},
        body
    })
    if(request.status!==200){
        throw alert(request.message)
    }
};

export async function deleteReq(id){
    const request = await fetch(links.getSingleBook+id,{
        method: "delete"
    })
    if(request.status!==200){
        throw alert(request.message)
    }
};

export async function putReq(id, newAuthor, newTitle){
    const body = JSON.stringify({
        "author": newAuthor,
        "title": newTitle
    })
    const request = await fetch (links.getSingleBook+id, {
        method:"put",
        headers: {"Content-Type": "application/json"},
        body
    })
    if(request.status!==200){
        throw alert(request.message)
    }
}