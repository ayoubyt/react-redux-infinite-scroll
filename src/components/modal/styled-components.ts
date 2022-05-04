import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #000a;
  padding: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  color: white;
  font-size: 2rem;
  background: none;
  cursor: pointer;
`;
