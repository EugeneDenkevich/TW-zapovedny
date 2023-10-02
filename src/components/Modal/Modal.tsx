import { useEffect,useMemo } from "react";
import { createPortal } from "react-dom";

import { CloseIcon } from "../../assets/icons/Close";

import { AlertCircle } from "./../../assets/icons/AlertCircle/AlertCircle";
import { CheckIcon } from "./../../assets/icons/CheckIcon/CheckIcon";

import "./Modal.scss";

const modalRootElement = document.querySelector("#modal");

type IProps = {
  myClass: string;
  content: string;
  onClose: (ev: React.MouseEvent<HTMLDivElement>) => void;
  isOpen: boolean;
};

const Modal = (props: IProps) => {
  const { myClass, content, onClose, isOpen } = props;
  const element = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    if (isOpen) {
      modalRootElement?.appendChild(element);
      return () => {
        modalRootElement?.removeChild(element);
      };
    }
  });
  
  if (isOpen) {
    return createPortal(
      <div className="modal_container">
        <div className={myClass}>
          {myClass === "success wrapper" ? <CheckIcon /> : <AlertCircle />}
          <div className="content">{content}</div>
          <CloseIcon onClick={onClose} />
        </div>
      </div>,

      element,
    );
  } else return null;
};

export default Modal;
