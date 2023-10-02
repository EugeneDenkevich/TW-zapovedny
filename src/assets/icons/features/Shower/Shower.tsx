import { ContainerForFeatures } from "../ContainerForFeatures";

interface IProps {
  littleIcon?: boolean;
}

export const Shower = (props: IProps) => {
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
          d="M4 21.9653V6.9655C4 5.4655 4.9 2.8655 8.5 4.4655"
          stroke="#583711"
          strokeLinecap="round"
        />
        <path
          d="M17.8495 2.96535L10.1841 13.999"
          stroke="#583711"
          strokeLinecap="round"
        />
        <path
          d="M14 12.9653L15.5 14.9653"
          stroke="#583711"
          strokeLinecap="round"
        />
        <path
          d="M16.5 10.1104L18.6035 11.4613"
          stroke="#583711"
          strokeLinecap="round"
        />
        <path
          d="M18.4004 6.46533L20.8508 6.96081"
          stroke="#583711"
          strokeLinecap="round"
        />
        <path
          d="M11 12.4653C9.16667 11.132 6.49997 7.6649 8.49997 4.4649C10.5 1.2649 14.5002 2.63195 16.5003 3.96528"
          stroke="#583711"
          strokeLinecap="round"
        />
      </svg>
    </ContainerForFeatures>
  );
};
