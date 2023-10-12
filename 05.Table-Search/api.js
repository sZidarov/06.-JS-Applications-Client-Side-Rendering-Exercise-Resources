const url = "http://localhost:3030/jsonstore/advanced/table";

export async function getTableData (){
    const request = await fetch (url)
    try {
        if (request.status !== 200){
            throw new Error(request.message)
        }
        const response = await request.json();
        return response
    } catch (error) {
        alert(error.message)
    }
}