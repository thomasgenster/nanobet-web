export default class ApiService {

    apiUrl = 'http://api.nanobet.vg';

    getPublicPools() {
        return this.sendRequest('GET', 'getPublicPools');
    };

    sendRequest(method, _function, data) {
        return fetch(this.apiUrl+'/'+_function, {
            method: method,
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json();
        });
    };

}