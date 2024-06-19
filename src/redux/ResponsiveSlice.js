import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    width: window.innerWidth,
}

export const ResponsiveSlice = createSlice({
    name: 'responsive',
    initialState,
    reducers: {
        setWidth: (state, action) => {
            state.width = action.payload;
        },
    },
})

export const { setWidth } = ResponsiveSlice.actions

export default ResponsiveSlice.reducer