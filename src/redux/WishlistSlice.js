import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const itemExists = state.items.find(item => item.product_id === action.payload.product_id);
            if (!itemExists) {
                state.items.push(action.payload);
            }
        },
        removeWishlist: (state, action) => {
            const index = state.items.findIndex(item => item.product_id === action.payload);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
    },
})

export const { addToWishlist, removeWishlist } = WishlistSlice.actions

export default WishlistSlice.reducer;
