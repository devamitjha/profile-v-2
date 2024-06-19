import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

export const MenuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {

        openMenu: (state) => {
            state.isOpen = true;
        },
        closeMenu: (state) => {
            state.isOpen = false;
        },

    },
})

export const { openMenu, closeMenu } = MenuSlice.actions

export default MenuSlice.reducer