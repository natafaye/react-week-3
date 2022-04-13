
const TODO_ENDPOINT = 'https://crudcrud.com/api/94ee9acc65dc4db093f833c81b8a30c0/todos';

const getFetchOptions = (method, data) => ({ 
    method: method, 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
})

export const getTodos = async () => {
    try {
        const response = await fetch(TODO_ENDPOINT);
        const data = await response.json();
        return data;
    }
    catch(e) {
        // do nice error handling
        console.log(e);
        return [];
    }
}

export const createTodo = async (todo) => {
    try {
        const response = await fetch(TODO_ENDPOINT, getFetchOptions("POST", todo))
        return await response.json();
    }
    catch(e) {
        console.log(e);
        return null;
    }
}

export const updateTodo = async (todo) => {
    try {
        const todoWithoutId = { text: todo.text };
        const resp = await fetch(TODO_ENDPOINT + "/" + todo._id, getFetchOptions("PUT", todoWithoutId));
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