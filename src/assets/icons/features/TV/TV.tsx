import { ContainerForFeatures } from "../ContainerForFeatures";

interface IProps {
  littleIcon?: boolean;
}

export const TV = (props: IProps) => {
  return (
    <ContainerForFeatures littleIcon={props.littleIcon}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1558_3187)">
          <path
            d="M18.9356 3.70703H5.0646C3.74718 3.70703 2.6792 4.81874 2.6792 6.19009V17.8101C2.6792 19.1815 3.74718 20.2932 5.0646 20.2932H18.9356C20.253 20.2932 21.321 19.1815 21.321 17.8101V6.19009C21.321 4.81874 20.253 3.70703 18.9356 3.70703Z"
            stroke="#583711"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.0473 7.84672C12.9937 7.67499 12.8183 7.58039 12.6555 7.63544C12.4928 7.69048 12.4043 7.87432 12.4579 8.04606L15.1966 16.8199C15.2502 16.9916 15.4255 17.0862 15.5883 17.0311C15.751 16.9761 15.8395 16.7923 15.7859 16.6205L13.0473 7.84672Z"
            fill="#583711"
            stroke="#583711"
            strokeWidth="0.5"
            strokeMiterlimit="10"
          />
          <path
            d="M18.524 8.04642C18.5776 7.87469 18.4892 7.69085 18.3264 7.6358C18.1637 7.58076 17.9883 7.67535 17.9347 7.84708L15.196 16.6209C15.1424 16.7926 15.2309 16.9765 15.3936 17.0315C15.5564 17.0866 15.7318 16.992 15.7854 16.8202L18.524 8.04642Z"
            fill="#583711"
            stroke="#583711"
            strokeWidth="0.5"
            strokeMiterlimit="10"
          />
          <path
            d="M8.49421 7.89555C8.49421 7.71498 8.35548 7.5686 8.18436 7.5686C8.01323 7.5686 7.87451 7.71498 7.87451 7.89555V16.7232C7.87451 16.9038 8.01323 17.0502 8.18436 17.0502C8.35548 17.0502 8.49421 16.9038 8.49421 16.7232V7.89555Z"
            fill="#583711"
            stroke="#583711"
            strokeWidth="0.5"
            strokeMiterlimit="10"
          />
          <path
            d="M5.52308 7.498C5.34961 7.498 5.20898 7.6424 5.20898 7.82053C5.20898 7.99866 5.34961 8.14307 5.52308 8.14307H10.8372C11.0106 8.14307 11.1513 7.99866 11.1513 7.82053C11.1513 7.6424 11.0106 7.498 10.8372 7.498H5.52308Z"
            fill="#583711"
            stroke="#583711"
            strokeWidth="0.5"
            strokeMiterlimit="10"
          />
        </g>
        <defs>
          <clipPath id="clip0_1558_3187">
            <rect
              width="20"
              height="18"
              fill="white"
              transform="translate(2 3)"
            />
          </clipPath>
        </defs>
      </svg>
    </ContainerForFeatures>
  );
};
