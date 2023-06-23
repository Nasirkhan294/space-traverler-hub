import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
  isLoading: false,
};

export const getRockets = createAsyncThunk('book/getBooks', async (_, thunkAPI) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const newRocket = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return {
        ...state,
        rockets: newRocket,
      };
    },
    leaveRocket: (state, action) => {
      const newRocket = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      return {
        ...state,
        rockets: newRocket,
      };
    },

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
          reserved: false,
        })),
        isLoading: false,
      }))
      .addCase(getRockets.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { reserveRocket, leaveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
