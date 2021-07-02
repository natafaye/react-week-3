
const TODO_ENDPOINT = 'https://crudcrud.com/api/60160ea878fe4ae4b53ed215f2fd8b64/todos';

const getFetchOptions = (method, data) => ({ 
    method: method, 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
})

export const getTodos = async () => {
    try {
        const resp = await fetch(TODO_ENDPOINT);
        return await resp.json();
    } 
    catch(e) {
        console.log(e);
        return null;
    }
}

export const createTodo = async (todo) => {
    try {
        const resp = await fetch(TODO_ENDPOINT, getFetchOptions("POST", todo))
        return await resp.json();
    }
    catch(e) {
        console.log(e);
        return null;
    }
}

export const updateTodo = async (todo) => {
    try {
        const resp = await fetch(TODO_ENDPOINT + "/" + todo._id, getFetchOptions("PUT", { text: todo.text }));
        return resp;
    }
    catch(e) {
        console.log(e);
        return null;
    }
}

export const deleteTodo = async (todo) => {
    try {
        const resp = await fetch(TODO_ENDPOINT + "/" + todo._id, { method: "DELETE" })
        return resp;
    }
    catch(e) {
        console.log(e);
        return null;
    }
}