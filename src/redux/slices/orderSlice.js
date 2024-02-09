import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PIZZA_API } from "../../constants/constants";

const initialState = {
  orderData: [],
  isLoading: false,
  isError: null
};

export const postOrderItems = createAsyncThunk("order/postOrderItems",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${PIZZA_API}/order`, {
        method: "POST",
        body: JSON.stringify(orderData),
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (!response.ok) {
        return rejectWithValue("Failed to fetch");
      }

      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e.message);
      throw rejectWithValue(e.message);
    }

  }
)

export const updateOrderItems = createAsyncThunk("order/updateOrderItems",
  async (id, { rejectWithValue }) => {
    const orderData = {priority: true, priorityPrice: 8};

    try {
      const response = await fetch(`${PIZZA_API}/order/${id}`, {
        method: "PATCH",
        body: JSON.stringify(orderData),
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (!response.ok) {
        return rejectWithValue("Failed to fetch");
      }
    } catch (e) {
      console.error(e.message);
      throw rejectWithValue(e.message);
    } 
  
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrderInfo: (state, { payload }) => {
      state.orderData = payload;
    },
    addPriority: (state, { payload }) => {
      state.orderData.data.priority = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(postOrderItems.pending, (state) => {
      state.isError = null;
      state.isLoading = true;
    });
    builder.addCase(postOrderItems.fulfilled, (state, { payload }) => {
      state.orderData = payload;
      state.isLoading = false;
    });
    builder.addCase(postOrderItems.rejected, (state, { payload }) => {
      state.isError = payload;
      state.isLoading = false;
    });
    builder.addCase(updateOrderItems.fulfilled, (state) => {
      state.orderData.data.priority = addPriority(true);
      state.orderData.data.priorityPrice = state.orderData.data.priority ? 8 : 0;
    });    
  }
});

export const { addOrderInfo, addPriority } = orderSlice.actions;
export default orderSlice.reducer;