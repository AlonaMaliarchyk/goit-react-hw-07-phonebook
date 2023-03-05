import { createSlice } from "@reduxjs/toolkit";


export const filtersSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        setStatusFilter: {
    reducer(state, action) {
        return action.payload;
    },
    prepare(filter) {
        return {
        payload: filter
        };
    },
    },
    },
});


// Експортуємо генератори екшенів та редюсер
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
