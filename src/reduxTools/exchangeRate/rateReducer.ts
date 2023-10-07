import { ExchangeRateAction, SET_RATE } from "./actions";

interface RateState {
  cur_scale: number,
  cur_rate: number  
}

const defaultState: RateState = {
  cur_scale: 1,
  cur_rate:1  
};

export const rateReducer = (
  state: RateState = defaultState,
  action: ExchangeRateAction,
): RateState => {
  switch (action.type) {
    case SET_RATE:
      return {
        ...state,
        cur_scale: action.payload.cur_scale,
        cur_rate: action.payload.cur_rate
      };    
    default:
      return state;
  }
};
