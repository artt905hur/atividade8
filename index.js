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
        console.log("Funcionou");
        output.innerHTML = await response.text();
    } else {
        console.log("Deu errado");
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
            'times' : craque
        })
    }
    await fetch(url, options);
}

async function callFetchWithPut(id, novoCraque){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body : JSON.stringify({
            'times' : novoCraque
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
    console.log("entrei na função");
    const form = document.forms['postForm'];    
    const novocra = form["time"].value;
    const novotype = form["type"].value;
    

    const novo = {"name": novocra , "type" : novotype};
    
    callFetchWithPost(novo);
    return false; // Evitar o reload da tela.
}

function submitPut(){
    const form = document.forms['putForm'];  
    const id = form["id"].value;  
    const novocra = form["time"].value;
    const novotype = form["type"].value;
    

    const novo = {"name": novocra , "type" : novotype};
    
    callFetchWithPut(id, novo);
    return false; // Evitar o reload da tela.
}

function submitDelete(){
    const form = document.forms['deleteForm'];  
    const id = form["id"].value; 
    callFetchWithDelete(id);
    return false; // Evitar o reload da tela.
}
