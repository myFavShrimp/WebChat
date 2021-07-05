let apiAddress = './api'

function getAuthHeaderValue(auth) {
    return auth.length < 3 ? '' : `Bearer ${auth}`
}

export default {
    apiAddress,
    async post(resource, data = {}, auth = '') {
        return await fetch(`${apiAddress}${resource}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': getAuthHeaderValue(auth)
            },
            body: JSON.stringify(data),
        })
    },
    async get(resource, auth = '') {
        return await fetch(`${apiAddress}${resource}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': getAuthHeaderValue(auth)
            },
        })
    },
}
