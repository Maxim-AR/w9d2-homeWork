import { config } from './config';

const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка : ${res.status}`);
};

class Api {
    constructor({ url, token }) {
        this._url = url;
        this._token = token;
    }

    getPosts() {
        return fetch(`${this._url}/posts`, {
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(onResponce);
    }

    getCurentUser() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(onResponce);
    }
    

   

  

}

export default new Api(config);