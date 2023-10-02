import { ContainerForFeatures } from "../ContainerForFeatures";

interface IProps {
  littleIcon?: boolean;
}

export const Mangal = (props: IProps) => {
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
          d="M9.12772 16.9858L7.12256 20.0052"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.1123 16.9858L17.1175 20.0052"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.7045 11.9536C18.7045 14.0517 17.1561 17.0323 12.1239 17.0323C7.4787 17.0323 5.54321 14.0517 5.54321 11.9536"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.1239 13.2465C15.7582 13.2465 18.7045 12.5914 18.7045 11.7833C18.7045 10.9752 15.7582 10.3201 12.1239 10.3201C8.48947 10.3201 5.54321 10.9752 5.54321 11.7833C5.54321 12.5914 8.48947 13.2465 12.1239 13.2465Z"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.1238 18.8826V17.311"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.9549 10.7227L9.5459 12.8517"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.7251 10.8079L13.2231 13.084"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.9756 12.4877C19.5795 12.96 20.2298 13.0684 20.524 12.7974C20.6249 12.7172 20.6958 12.6054 20.7253 12.48"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.36516 12.4877C4.76129 12.96 4.11096 13.0684 3.81677 12.7974C3.71589 12.7172 3.64497 12.6054 3.61548 12.48"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ContainerForFeatures>
  );
};
