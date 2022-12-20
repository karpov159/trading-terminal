import {
	createSlice,
	createEntityAdapter,
	createAsyncThunk,
	EntityState,
	PayloadAction,
} from '@reduxjs/toolkit';

interface StateData {}

const initialState = {};

const TradingSlice = createSlice({
	name: 'trading',
	initialState,
	reducers: {},
});

const { reducer, actions } = TradingSlice;

export default reducer;
