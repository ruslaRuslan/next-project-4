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
interface IBasket {
    basketState: Array<IBasketProduct>,
    totalSum: number
}
const initialState: IBasket = {
    basketState: [],
    totalSum: 0
};

function calculateTotalSum(arr: Array<IBasketProduct>) {
    return arr.reduce((a, b) => {
        return a + (b.price * b.count)
    }, 0);
}

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
            state.totalSum = calculateTotalSum(state.basketState)
        },
        increaseCount: (state, action: PayloadAction<{ id: number }>) => {
            const item = state.basketState.find(el => el.id === action.payload.id);
            if (item) {
                item.count += 1; // Direct mutation allowed by Immer
            }
            state.totalSum = calculateTotalSum(state.basketState)
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
            state.totalSum = calculateTotalSum(state.basketState)
        },
        removeProduct: (state, action: PayloadAction<{ id: number }>) => {
            const index = state.basketState.findIndex(el => el.id === action.payload.id);
            state.basketState.splice(index, 1)
            state.totalSum = calculateTotalSum(state.basketState)
        },
        getTotalSum: (state) => {
            const sum = state.basketState.reduce((a, b) => {
                console.log(a)
                return a + (b.price * b.count)
            }, 0);
            state.totalSum = sum;
        },
    },
});

export const { addBasket, increaseCount, decreaseCount, removeProduct, getTotalSum } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;