import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: ""
}

export const currentCategorySlice = createSlice({
    name: 'currentCategory',
    initialState,
    reducers: {
        selectedCategory: (state, action) => {
            state.category = action.payload;
        }
    },
})

export const { selectedCategory } = currentCategorySlice.actions

export default currentCategorySlice.reducer;
