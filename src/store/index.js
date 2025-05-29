import { configureStore } from '@reduxjs/toolkit';
import powerUpsReducer from './powerUpsSlice.js';

const store = configureStore({
    reducer: {
        powerUps: powerUpsReducer
    }
});

export default store;
