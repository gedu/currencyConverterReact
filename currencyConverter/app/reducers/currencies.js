import { SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT } from '../actions/currencies';
import initialState from '../data/initialState';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_CURRENCY_AMOUNT:
			return {
				...state,
				amount: action.amount || 0,
			};
		case SWAP_CURRENCY:
			return {
				...state,
				baseCurrency: state.quoteCurrency,
				quoteCurrency: state.baseCurrency,
			};
		default:
			return state;
	}
};

export default reducer;
