export const SET_RATE = "SET_RATE";

export interface ExchangeRateAction {
  type: "SET_RATE" ;
  payload: {
    cur_rate: number,
    cur_scale: number
  }  
}

export const setRateStateAction = (payload:{
  cur_rate: number,
  cur_scale: number
}  ): ExchangeRateAction => {
  return {
    type: SET_RATE,
    payload:payload
  };
};
