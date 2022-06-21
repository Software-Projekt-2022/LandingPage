import Cookies from 'js-cookie';

import CONFIG from "./config";

const isLoggedIn = () => {
    // Check if cookie is set
    let authToken = Cookies.get("cybercity-auth");
    if(authToken === undefined) {
        return false;
    }
    // Check if token is valid
    return fetch(CONFIG.authAPI + 'validate_token', {
        method: 'GET',
        mode: 'same-site',
        credentials: 'same-site',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
        }
    })
    .then(res => {
        if(res.ok) {
            return res.json();
        } else {
            throw new Error(res);
        }
    })
    .then(response => {
        return true;
    })
    .catch(error => {
        return false;
    });
}

export default isLoggedIn;