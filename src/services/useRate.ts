import { useEffect, useState } from "react";

import { useGetRateQuery } from "../reduxTools/requests/apiRate";
import { useGetInfoQuery } from "../reduxTools/requests/apiRequests";

export const useRate = () => {
  const [isSkip, setIsSkip] = useState(true);
  const { data } = useGetInfoQuery();
  const currency = data ? data[0].currency.toUpperCase() : "";
  useEffect(() => {
    if (data) {
      setIsSkip(false);
    }
  }, [data]);
  const { data: rate } = useGetRateQuery(currency, { skip: isSkip });
  const answer = rate
    ? {
        currency:currency,
        cur_scale: rate?.Cur_Scale,
        cur_rate: rate?.Cur_OfficialRate,
      }
    : {
        currency:"BYN",
        cur_scale: 1,
        cur_rate: 1,
      };
  return answer;
};
