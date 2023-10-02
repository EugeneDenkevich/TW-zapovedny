import { ContainerForFeatures } from "../ContainerForFeatures";

interface IProps {
  littleIcon?: boolean;
}

export const Conditioner = (props: IProps) => {
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
          d="M10.165 16.3975C10.6714 16.8393 11.3201 17.084 11.9921 17.0865C12.6528 17.0822 13.291 16.8467 13.796 16.4207"
          stroke="#583711"
          strokeMiterlimit="10"
        />
        <path
          d="M9.10463 14.4697V14.1445C9.08344 13.556 9.24463 12.9754 9.56615 12.482C9.88768 11.9886 10.3538 11.6067 10.9008 11.3884V8.33034L9.67754 7.10712C9.51923 6.94385 9.4269 6.7278 9.41832 6.50054C9.40975 6.27329 9.48553 6.05089 9.63108 5.87615C9.77234 5.71219 9.96982 5.60698 10.1847 5.58119C10.3996 5.55541 10.6163 5.61091 10.7924 5.7368L11.0324 5.94583V4.76131C11.0293 4.64819 11.0488 4.53558 11.0897 4.43007C11.1306 4.32456 11.1922 4.22827 11.2707 4.14682C11.3493 4.06537 11.4433 4.00039 11.5473 3.95569C11.6513 3.91099 11.7631 3.88746 11.8762 3.88647C12.1213 3.89055 12.3548 3.99129 12.5259 4.16675C12.697 4.34221 12.7919 4.57818 12.7898 4.82325V5.93035L12.9988 5.76002C13.0822 5.68917 13.1788 5.63569 13.2831 5.60273C13.3874 5.56977 13.4972 5.55799 13.6062 5.56809C13.7151 5.57819 13.8209 5.60996 13.9173 5.66153C14.0138 5.71311 14.099 5.78344 14.1679 5.86841C14.308 6.03514 14.3809 6.24815 14.3723 6.46578C14.3637 6.68341 14.2742 6.89001 14.1214 7.04518L13.0685 8.11357V11.3884C13.6155 11.6067 14.0816 11.9886 14.4031 12.482C14.7246 12.9754 14.8858 13.556 14.8646 14.1445C14.8646 14.2607 14.8646 14.3613 14.8646 14.4774"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9691 14.5625C12.2855 14.5625 12.542 14.2991 12.542 13.9741C12.542 13.6492 12.2855 13.3857 11.9691 13.3857C11.6527 13.3857 11.3962 13.6492 11.3962 13.9741C11.3962 14.2991 11.6527 14.5625 11.9691 14.5625Z"
          fill="#583711"
          stroke="#583711"
          strokeMiterlimit="10"
        />
        <path
          d="M14.8878 14.5083L17.4891 16.018L19.1226 15.5225C19.3392 15.4611 19.5711 15.4856 19.7701 15.5909C19.9691 15.6962 20.1199 15.8741 20.191 16.0877C20.2632 16.2953 20.2575 16.522 20.1749 16.7257C20.0923 16.9294 19.9384 17.0961 19.742 17.1948L19.4478 17.3031L20.462 17.8683C20.6593 17.9849 20.804 18.1732 20.866 18.3938C20.928 18.6144 20.9025 18.8505 20.7949 19.0528C20.7367 19.1583 20.6583 19.2513 20.564 19.3264C20.4698 19.4015 20.3616 19.4572 20.2458 19.4903C20.1299 19.5234 20.0087 19.5332 19.889 19.5193C19.7693 19.5053 19.6536 19.4678 19.5485 19.4089L18.6039 18.8593L18.6504 19.138C18.6894 19.3572 18.6419 19.5831 18.5176 19.768C18.3934 19.9528 18.2023 20.0822 17.9846 20.1289C17.7727 20.1694 17.5534 20.128 17.3709 20.013C17.1884 19.8981 17.0563 19.7181 17.0013 19.5096L16.6143 18.0386L13.8271 16.436"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.10455 14.5083L6.52648 16.018L4.89293 15.5225C4.67634 15.4611 4.44444 15.4856 4.24545 15.5909C4.04646 15.6962 3.89571 15.8741 3.82454 16.0877C3.75232 16.2953 3.75805 16.522 3.84067 16.7257C3.92328 16.9294 4.07715 17.0961 4.27358 17.1948L4.56777 17.3031L3.55358 17.8683C3.35464 17.9834 3.209 18.1722 3.14815 18.3939C3.08731 18.6156 3.11614 18.8522 3.22842 19.0528C3.28504 19.1588 3.36237 19.2524 3.45582 19.328C3.54927 19.4036 3.65694 19.4597 3.77246 19.4929C3.88797 19.5261 4.00897 19.5358 4.1283 19.5213C4.24762 19.5069 4.36284 19.4687 4.46713 19.4089L5.41164 18.8593L5.36519 19.138C5.32613 19.3572 5.37371 19.5831 5.49792 19.768C5.62212 19.9528 5.81324 20.0822 6.031 20.1289C6.24285 20.1694 6.46217 20.128 6.64466 20.013C6.82716 19.8981 6.95924 19.7181 7.01423 19.5096L7.40906 18.0386L10.1884 16.436"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ContainerForFeatures>
  );
};
