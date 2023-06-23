import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const res = await axios.get('https://api.spacexdata.com/v3/missions');
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch Missions');
  }
});

const initialState = {
  missions: [],
  isLoading: false,
  error: null,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,

  reducers: {
    joinMission(state, action) {
      const missionId = action.payload;
      const updatedMissions = state.missions.map((mission) => {
        if (mission.mission_id === missionId) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
      return {
        ...state,
        missions: updatedMissions,
      };
    },
    leaveMission(state, action) {
      const missionId = action.payload;
      const updatedMissions = state.missions.map((mission) => {
        if (mission.mission_id === missionId) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
      return {
        ...state,
        missions: updatedMissions,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        isLoading: true,
      }))

      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        missions: action.payload,
      }))

      .addCase(fetchMissions.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

export default missionSlice.reducer;
export const { joinMission, leaveMission } = missionSlice.actions;
