export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('wishlist');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Could not load state', err);
        return undefined;
    }
};