import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
  isLoading: false,
};

export const getRockets = createAsyncThunk('book/getBooks', async (_, thunkAPI) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getRockets.fulfilled, (state, action) => ({
        ...state,
        rockets: action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.rocket_name,
          type: rocket.rocket_type,
          flickr_images: rocket.flickr_images,
          details: rocket.description,
        })),
        isLoading: false,
      }))
      .addCase(getRockets.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default rocketSlice.reducer;
