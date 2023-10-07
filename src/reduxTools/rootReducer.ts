import { combineReducers } from "redux";

import { burgerMenuReducer } from "./burgerMenu/burgerMenuReducer";
import { rateReducer } from "./exchangeRate/rateReducer";
import { formReducer } from "./formForOrderHouse/formReducer";
import { apiRate } from "./requests/apiRate";
import { api } from "./requests/apiRequests";

export const rootReducer = combineReducers({
  burgerMenu: burgerMenuReducer,
  form: formReducer,
  rate:rateReducer,
  [api.reducerPath]: api.reducer,
  [apiRate.reducerPath]: apiRate.reducer,
});
