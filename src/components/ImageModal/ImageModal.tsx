import { FC } from "react";
import ReactModal from "react-modal";
import { ModalParams } from "../types";
import style from "./ImageModal.module.css";

interface ModalProps {
  modalParams: ModalParams;
  onClose: () => void;
}

const ImageModal: FC<ModalProps> = ({ modalParams, onClose }) => {
  return (
    <ReactModal
      className={style.modal}
      overlayClassName={style.overlay}
      isOpen={modalParams.isOpen}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      onRequestClose={onClose}
    >
      <img
        className={style.image}
        src={modalParams.url}
        alt={modalParams.alt}
        width="100%"
      />
    </ReactModal>
  );
};

export default ImageModal;
