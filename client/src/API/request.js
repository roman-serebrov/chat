function sendRequest(val='', method='get', body=null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(`http://localhost:8000/${val}`, {
        method: method,
        headers: headers
    })
};

export default sendRequest;