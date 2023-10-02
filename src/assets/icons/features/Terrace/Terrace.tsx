import { ContainerForFeatures } from "../ContainerForFeatures";

interface IProps {
  littleIcon?: boolean;
}

export const Terrace = (props: IProps) => {
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
          d="M11.6987 20.0361V10.1812"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.16699 8.73039C3.16699 6.12079 6.98917 4 11.6986 4C16.4081 4 20.2303 6.12079 20.2303 8.73039"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.2303 8.73022C20.2303 9.53439 16.4081 10.1809 11.6986 10.1809C6.98917 10.1809 3.16699 9.53439 3.16699 8.73022"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.8186 7.84735C7.23665 7.32701 7.91919 6.6411 8.78942 6.34151C9.14775 6.22325 9.46342 6.18383 9.73643 6.1996"
          stroke="#583711"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M6.85278 16.5552H7.82539"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.62236 16.5552L4.29321 20.3176"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.9021 18.2954L9.11359 20.2577"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.68262 13.4922L4.06295 18.2955"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.06299 18.2954H9.36115"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5617 16.5552H15.5891"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.792 16.5552L19.1211 20.3176"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5125 18.2954L14.301 20.2577"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.7319 13.4922L19.3516 18.2955"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.3516 18.2954H14.0535"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ContainerForFeatures>
  );
};
