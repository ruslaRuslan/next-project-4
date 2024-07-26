import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// burdan basla: image:string;
export interface IBasketProduct {
    id: number;
    title: string;
    price: number;
    count: number;
    image: string;
}

const initialState = {
    basketState: [] as Array<IBasketProduct>
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addBasket: (state, action: PayloadAction<IBasketProduct>) => {
            const item = state.basketState.find((el) => el.id === action.payload.id)
            if (item) {
                alert("item already exists")
                return;
            }
            state.basketState.push(action.payload)
        },
        increaseCount: (state, action: PayloadAction<{ id: number }>) => {
            const item = state.basketState.find(el => el.id === action.payload.id);
            if (item) {
                item.count += 1; // Direct mutation allowed by Immer
            }
        },
        decreaseCount: (state, action: PayloadAction<{ id: number }>) => {
            const item = state.basketState.find(el => el.id === action.payload.id);
            if (item) {
                if (item?.count === 1) {
                    state.basketState.splice(state.basketState.indexOf(item), 1)
                }
                else {
                    item.count -= 1;
                }
            }
        },
        removeProduct: (state, action: PayloadAction<{ id: number }>) => {
            const index = state.basketState.findIndex(el => el.id === action.payload.id);
            state.basketState.splice(index, 1)
        }
    },
});

export const { addBasket, increaseCount, decreaseCount, removeProduct } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;