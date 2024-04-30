import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '@/slices/basketslice';

const store = configureStore({
    reducer:{
        basket :basketReducer
    }
})

export type RootState = ReturnType <typeof store.getState>
export type AppDisPatch = typeof store.dispatch;

export default store