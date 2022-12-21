import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import OrderData from '../../shared/interfaces/order.interface';

interface StateData {
	orders: OrderData[];
	instrument: string;
}

const initialState: StateData = {
	orders: [],
	instrument: '',
};

const TradingSlice = createSlice({
	name: 'trading',
	initialState,
	reducers: {
		addOrder(state, action: PayloadAction<OrderData>) {
			state.orders = [...state.orders, action.payload];
		},
		changeInstrument(state, action: PayloadAction<string>) {
			state.instrument = action.payload;
		},
	},
});

const { reducer, actions } = TradingSlice;

export const { addOrder, changeInstrument } = actions;

export default reducer;
