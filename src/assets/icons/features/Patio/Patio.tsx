import { ContainerForFeatures } from "../ContainerForFeatures";

interface IProps {
  littleIcon?: boolean;
}

export const Patio = (props: IProps) => {
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
          d="M11.9302 15.6928H6.89795L9.41408 12.596L11.9302 9.49927L14.4463 12.596L16.9625 15.6928H11.9302Z"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9303 9.10456H8.05933L9.99481 6.78198L11.9303 4.45166L13.8658 6.78198L15.8013 9.10456H11.9303Z"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.1612 15.8555H10.8386V20.5006H13.1612V15.8555Z"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ContainerForFeatures>
  );
};
