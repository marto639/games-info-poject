const baseUrl = 'http://localhost:3030/data/games';

export const getAll = () => {
    return fetch(baseUrl)
        .then(res => res.json());
};

export const getOne = (id) => {
    return fetch(`${baseUrl}/${id}`)
        .then(res => res.json());
};

export const createGame = (accessToken, brand, imageUrl, gameInfo) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify({ brand, imageUrl, gameInfo })
    })
        .then(res => res.json());
}; 