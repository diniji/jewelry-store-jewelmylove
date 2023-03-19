import { createSlice } from '@reduxjs/toolkit';


export const jewelsSlice = createSlice({
  name: 'jewels',
  initialState: {
    selectedCategory: "ALL"
  },
  reducers: {
    filterCategory: (state, action) => {
        state.selectedCategory = action.payload;
    }
  }
})


export const getSelectedCategory = state => state.jewels.selectedCategory;
export const { filterCategory } = jewelsSlice.actions;
export default jewelsSlice.reducer;