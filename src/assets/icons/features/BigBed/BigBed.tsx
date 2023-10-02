import { ContainerForFeatures } from "../ContainerForFeatures";

interface IProps {
  littleIcon?: boolean;
}

export const BigBed = (props: IProps) => {
  return (
    <ContainerForFeatures littleIcon={props.littleIcon}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_0_1672)">
          <path
            d="M9.95401 17.7708C9.62465 17.6931 9.32027 17.5272 9.07732 17.2843L8.23658 16.444C7.51924 15.7268 7.51924 14.5642 8.23658 13.8469L9.07732 13.0062C9.42173 12.6623 9.88915 12.4681 10.3755 12.4681H16.0621C16.5492 12.4681 17.0165 12.6623 17.3609 13.0062L18.2012 13.8469C18.9184 14.5642 18.9184 15.7268 18.2012 16.444L17.3609 17.2843C17.118 17.5272 16.8136 17.693 16.4842 17.7708H24.5156C24.1869 17.6931 23.8824 17.5272 23.6389 17.2843L22.7986 16.444C22.0814 15.7268 22.0814 14.5642 22.7986 13.8469L23.6389 13.0062C23.9839 12.6623 24.4506 12.4681 24.9378 12.4681H30.6243C31.1113 12.4681 31.5781 12.6623 31.9231 13.0062L32.7627 13.8469C33.48 14.5642 33.48 15.7268 32.7627 16.444L31.923 17.2843C31.6795 17.5272 31.3752 17.693 31.0464 17.7708H37.8258H37.9581V8.99949C37.9581 7.34291 36.6158 6 34.9591 6H6.04131C4.38474 6 3.04175 7.34291 3.04175 8.99949V17.7708H3.17396H9.95401Z"
            fill="#583711"
          />
          <path
            d="M40.2068 18.829H37.8259H3.17406H1.85149H0V33.9066H3.17406V30.9969H37.8259V33.9066H41V30.9969V18.829H40.2068Z"
            fill="#583711"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_1672">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </ContainerForFeatures>
  );
};
