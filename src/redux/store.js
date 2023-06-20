import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './mission/missionSlice';

const store = configureStore({
  reducer: {
    missions: missionSlice,
  },

});

export default store;
