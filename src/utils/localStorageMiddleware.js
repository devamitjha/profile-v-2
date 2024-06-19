const localStorageMiddleware = store => next => action => {
    const result = next(action);
    if (action.type.startsWith('wishlist/')) {
        const state = store.getState();
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist.items));
    }
    return result;
};

export default localStorageMiddleware;