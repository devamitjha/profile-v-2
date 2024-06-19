import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "light",
}

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {

        toggleTheme: (state) => {
            state.value = state.value === 'light' ? 'dark' : 'light';
        },

    },
})

export const { toggleTheme } = ThemeSlice.actions

export default ThemeSlice.reducer