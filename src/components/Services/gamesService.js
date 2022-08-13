export const getAll = () => {
    return fetch('http://localhost:3030/jsonstore/games')
        .then(res => res.json());
};

export const getEveryGame = () => {
    return fetch('http://localhost:3030/jsonstore/allGames')
        .then(res => res.json());
}