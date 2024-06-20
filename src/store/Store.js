import { configureStore } from '@reduxjs/toolkit';
import ThemeReducer from "../redux/ThemeSlice";
import MenuReducer from "../redux/MenuSlice";
import PopupReducer from "../redux/PopupSlice";
import ResponsiveReducer from "../redux/ResponsiveSlice";
import WishlistReducer from '../redux/WishlistSlice';
import localStorageMiddleware from '../utils/localStorageMiddleware';
import { loadState } from '../utils/loadState';
import CurrentCategoryReducer from '../redux/CurrentCategory';


const preloadedState = {
    wishlist: {
        items: loadState() || [],
    },
};

export const store = configureStore({
    reducer: {
        theme: ThemeReducer,
        menu: MenuReducer,
        popup: PopupReducer,
        responsive: ResponsiveReducer,
        wishlist: WishlistReducer,
        currentCategory: CurrentCategoryReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
    preloadedState,
})