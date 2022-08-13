export const showHiddenInput = (e) => {
    const input = e.target.parentElement.children[0];

    const isInputShown = input.style.display == 'inline';

    if (isInputShown) {
        input.style.display = 'none';
    } else {
        input.style.display = 'inline';
    }
};

export const showHiddenGamesInfo = (e) => {
    const gameStore = e.target.parentElement.children[1];

    const isGameStoreShown = gameStore.style.display == 'inline';

    if (isGameStoreShown) {
        gameStore.style.display = 'none';
    } else {
        gameStore.style.display = 'inline';
    }
};

export const showHiddenAccountInfo = (e) => {
    const accountServices = e.target.parentElement.children[1];

    const isAccountServiceShown = accountServices.style.display == 'inline';

    if (isAccountServiceShown) {
        accountServices.style.display = 'none'
    } else {
        accountServices.style.display = 'inline'
    }
};