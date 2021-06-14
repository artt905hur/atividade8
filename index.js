let url = 'https://atividade7tt905.herokuapp.com/heaven'

async function callFetchWithGet(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementById("json");
    const response = await fetch(url, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Running");
        output.innerHTML = await response.text();
    } else {
        console.log("Fail");
    }
}

async function callFetchWithPost(craque){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body : JSON.stringify({
            'heavens' : Marca
        })
    }
    await fetch(url, options);
}

async function callFetchWithPut(id, novaGuitarra){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body : JSON.stringify({
            'heavens' : novaGuitarra
        })
    }
    await fetch(`${url}/${id}`, options);
}

async function callFetchWithDelete(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json' 
        }
    }
    await fetch(`${url}${id}`, options);
}

/*
    Formulários
*/

function submitPost(){
    console.log("Nova guitarra no inventario");
    const form = document.forms['postForm'];    
    const novaguit = form["heaven"].value;
    const novamarca = form["marca"].value;
    

    const novo = {"name": novaguit , "type" : novamarca};
    
    callFetchWithPost(novo);
    return false;
}

function submitPut(){
    const form = document.forms['putForm'];  
    const id = form["id"].value;  
    const novaguit = form["heaven"].value;
    const novamarca = form["marca"].value;
    

    const novo = {"name": novaguit , "type" : novamarca};
    
    callFetchWithPut(id, novo);
    return false;
}

function submitDelete(){
    const form = document.forms['deleteForm'];  
    const id = form["id"].value; 
    callFetchWithDelete(id);
    return false;
}
