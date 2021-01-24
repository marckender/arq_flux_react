const url = 'http://localhost:3002/api/react-flux/';

export const ApiService = {
    get(enpoint){
        return fetch(`${url}${enpoint}`)
            .then(response => response.json())
    },
    post(enpoint, data){
        return fetch(`${url}${enpoint}`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
    },
    put(enpoint, data){
        return fetch(`${url}${enpoint}?id=${data.id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
    },
    delete(enpoint, id){
        return fetch(`${url}${enpoint}?id=${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
    }
}