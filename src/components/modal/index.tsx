import React from "react";

import * as Styled from "./styled-components";

interface ModalProps {
  show: boolean;
  handleClose: Function;
  loading?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  show,
  handleClose,
  loading
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!show) return null;
  return (
    <Styled.Container onClick={handleClick}>
      <Styled.CloseButton onClick={() => handleClose()}>X</Styled.CloseButton>
      {!loading ? children : <h1 style={{ color: "white" }}>Loading...</h1>}
    </Styled.Container>
  );
};

export default Modal;
