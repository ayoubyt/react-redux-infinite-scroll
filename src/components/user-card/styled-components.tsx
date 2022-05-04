import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 1rem;
  min-width: 300px;
  display: flex;
  background-color: white;
  justify-content: space-between;
  height: 100px;
`;

export const ImgSection = styled.div`
  display: flex;
`;

export const NameSection = styled.div`
  display: flex;
`;

export const ActionsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0.3rem;
  gap: 0.5rem;
`;

export const ProfileButton = styled.button`
  background-color: #49b9dc;
`;

export const DeleteButton = styled.button`
  background-color: #dc497e;
`;
