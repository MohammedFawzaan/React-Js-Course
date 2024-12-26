import axios from 'axios';

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

async function getMethod() {
    return await api.get('/posts');
}

async function postMethod(post) {
    return await api.post('/posts', post);
}

async function deleteMethod(id) {
    return await api.delete(`/posts/${id}`);
}

async function putMethod(id, post) {
    return await api.put(`/posts/${id}`, post);
}

export {getMethod, postMethod, deleteMethod, putMethod};