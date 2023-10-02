import { ContainerForFeatures } from "../ContainerForFeatures";

interface IProps {
  littleIcon?: boolean;
}

export const NoSmoking = (props: IProps) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 14.5H3C2.72386 14.5 2.5 14.7239 2.5 15C2.5 15.2761 2.72386 15.5 3 15.5H15C15.2761 15.5 15.5 15.2761 15.5 15L15 14.5Z"
          fill="#583711"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.9926 15.2856C17.9974 15.2579 17.9999 15.2293 17.9999 15.2002V14.7002C17.9999 14.4241 17.776 14.2002 17.4999 14.2002C17.3382 14.2002 17.1944 14.277 17.103 14.396L17.9926 15.2856Z"
          fill="#583711"
        />
        <path d="M20 14.7002V15.2002" stroke="#583711" strokeLinecap="round" />
        <path
          d="M17.4999 12C17.4999 11 17.8283 8 14.9999 8C12.1714 8 11.5 6.28851 11.5 5C11.5 3.71149 12.5 2.5 15 2.5"
          stroke="#583711"
          strokeLinecap="round"
        />
        <path
          d="M19.9998 11.9999C19.9998 10.5 20.4667 6.19336 16.9999 5.5C14.4999 5 17 3.5 18.5002 2.5"
          stroke="#583711"
          strokeLinecap="round"
        />
        <path d="M3 3L21 21" stroke="#583711" strokeLinecap="round" />
      </svg>
    </ContainerForFeatures>
  );
};
