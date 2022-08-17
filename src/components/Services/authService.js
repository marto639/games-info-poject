const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) => {
    return fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json());
};

export const logout = (accessToken) => {
    return fetch(`${baseUrl}/logout`, {
        headers: {
            'X-Authorization': accessToken
        }
    })
};

export const register = (username, email, password, rePassword) => {
    return fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, email, password, rePassword })
    })
        .then(res => res.json());
};