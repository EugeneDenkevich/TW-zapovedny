import { useRate } from "./useRate";

export const GetPrice = (price:number) => {
  
  const {currency, cur_rate, cur_scale } = useRate();  
  
  if (currency==="BYN") return +price.toFixed(0)
  else {
    return ((+price / cur_scale) * cur_rate).toFixed(0)
  }
  
};
