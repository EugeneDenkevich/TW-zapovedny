import { ContainerForFeatures } from "../ContainerForFeatures";

interface IProps {
  littleIcon?: boolean;
}

export const Parking = (props: IProps) => {
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
          d="M11.8994 19.7419C16.1752 19.7419 19.6413 16.2757 19.6413 12C19.6413 7.72424 16.1752 4.25806 11.8994 4.25806C7.62365 4.25806 4.15747 7.72424 4.15747 12C4.15747 16.2757 7.62365 19.7419 11.8994 19.7419Z"
          stroke="#583711"
          strokeMiterlimit="10"
        />
        <path
          d="M10.4517 8.26074H13.5484C13.7045 8.26074 13.8542 8.32273 13.9645 8.43308C14.0748 8.54342 14.1368 8.69308 14.1368 8.84913V11.9459C14.1368 12.102 14.0748 12.2516 13.9645 12.362C13.8542 12.4723 13.7045 12.5343 13.5484 12.5343H9.86328V8.84913C9.86328 8.69308 9.92527 8.54342 10.0356 8.43308C10.146 8.32273 10.2956 8.26074 10.4517 8.26074Z"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.1343 12.3485C10.1343 12.1903 10.0077 12.062 9.85167 12.062C9.69561 12.062 9.56909 12.1903 9.56909 12.3485V16.0491C9.56909 16.2073 9.69561 16.3356 9.85167 16.3356C10.0077 16.3356 10.1343 16.2073 10.1343 16.0491V12.3485Z"
          fill="#583711"
          stroke="#583711"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
      </svg>
    </ContainerForFeatures>
  );
};
