import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {});

const initialState = {
  missions: [],
  isLoading: false,
  error: null,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.missions = action.paylaod;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default missionSlice.reducer;
