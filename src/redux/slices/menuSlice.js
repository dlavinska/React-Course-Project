import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PIZZA_API } from '../../constants/constants';

const initialState = {
    menuItems: [],
    isLoading: false,
    isError: null
}

export const getMenuItems = createAsyncThunk("menu/getMenuItems",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${PIZZA_API}/menu`);

            if (!response.ok) {
                return rejectWithValue(response.status);
            }

            const { data } = await response.json();
            return data;
        } catch (e) {
            console.log(e.message);
            throw rejectWithValue(e.message);
        }
    }
);

const menuSlice = createSlice({
    name: "menu",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getMenuItems.pending, (state) => {
            state.isError = null;
            state.isLoading = true;
        });
        builder.addCase(getMenuItems.fulfilled, (state, { payload }) => {
            state.menuItems = payload;
            state.isLoading = false;
        });
        builder.addCase(getMenuItems.rejected, (state, { payload }) => {
            state.isError = payload;
            state.isLoading = false;
        });
    }
});

export default menuSlice.reducer;