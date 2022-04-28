const HOST = 'http://localhost:4000';

async function get(path) {
    return fetch(HOST + path).then((res) => res.json());
}

export async function getRequests() {
    return get('/requests');
}