import { ContainerForFeatures } from "../ContainerForFeatures";

interface IProps {
  littleIcon?: boolean;
}

export const Internet = (props: IProps) => {
  return (
    <ContainerForFeatures littleIcon={props.littleIcon}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.80249 9.25153C5.24404 6.81348 8.55339 5.44409 12.0038 5.44409C15.4542 5.44409 18.7635 6.81348 21.2051 9.25153"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.89038 13.3393C8.24849 11.9867 10.0872 11.2273 12.0039 11.2273C13.9207 11.2273 15.7594 11.9867 17.1175 13.3393"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.0232 17.9846C12.3652 17.9846 12.6425 17.7073 12.6425 17.3652C12.6425 17.0231 12.3652 16.7458 12.0232 16.7458C11.6811 16.7458 11.4038 17.0231 11.4038 17.3652C11.4038 17.7073 11.6811 17.9846 12.0232 17.9846Z"
          fill="#583711"
          stroke="#583711"
          strokeMiterlimit="10"
        />
      </svg>
    </ContainerForFeatures>
  );
};
