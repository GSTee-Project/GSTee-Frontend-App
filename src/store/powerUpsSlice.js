import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

export const fetchPowerUpsData = createAsyncThunk(
    'powerUps/fetchData',
    async (userId, { rejectWithValue }) => {
        try {
            const res = await fetch(`/api/powerups/user/${userId}`);
            return await res.json();
        } catch (err) {
            toast.error('Failed to load power-ups data');
            return rejectWithValue(err.message);
        }
    }
);

export const purchasePowerUp = createAsyncThunk(
    'powerUps/purchase',
    async ({ userId, powerUpId, quantity, price }, { dispatch, rejectWithValue }) => {
        try {
            const res = await fetch('/api/powerups/purchase', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, powerUpId, quantity, price }),
            });

            const result = await res.json();
            if (result.success) {
                toast.success(result.message);
                dispatch(fetchPowerUpsData(userId)); // Refresh data
                return result;
            } else {
                toast.error(result.error);
                return rejectWithValue(result.error);
            }
        } catch (err) {
            toast.error('Failed to purchase power-up');
            return rejectWithValue(err.message);
        }
    }
);

const powerUpsSlice = createSlice({
    name: 'powerUps',
    initialState: {
        data: null,
        loading: false,
        purchasingId: null,
        error: null,
    },
    reducers: {
        clearError(state) {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPowerUpsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPowerUpsData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchPowerUpsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(purchasePowerUp.pending, (state, action) => {
                const { powerUpId, quantity } = action.meta.arg;
                state.purchasingId = `${powerUpId}-${quantity}`;
            })
            .addCase(purchasePowerUp.fulfilled, (state) => {
                state.purchasingId = null;
            })
            .addCase(purchasePowerUp.rejected, (state) => {
                state.purchasingId = null;
            });
    }
});

export const { clearError } = powerUpsSlice.actions;
export default powerUpsSlice.reducer;
