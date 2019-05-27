// File that handles API calls
const headers = {
    Accept: 'application/json',
}

class Api {
    config = {
        baseUrl: 'http://localhost:4001'
    }

    

    getPlaces = () => {
        return fetch(`${this.config.baseUrl}/places`, {
            method:'GET',
            headers,
        })
        .then(response => response.json())
        .catch(error =>error)
    }
}

export default new Api()