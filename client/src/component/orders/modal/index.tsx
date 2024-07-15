import styled, { css } from "styled-components";
import React, { useState } from "react";

interface IProps {
  children: React.ReactNode;

  onClose?: () => void;
  isOpen?: boolean;
}

export const ModalDegine = ({ children, onClose, isOpen }: IProps) => {
  return (
    <Overlay isOpen={isOpen}>
      <ModalContainer>
        <Header>Modal Title</Header>
        <Content>{children}</Content>
        <CloseButton onClick={onClose}>סגור</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

// Styled components
const Overlay = styled.div<IProps>`
  ${(props) => (!props.isOpen ? "display: none" : "")}

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const Header = styled.h2`
  margin-top: 0;
`;

const Content = styled.p`
  margin: 20px 0;
`;

const CloseButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const OpenButton = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 20px;
  transition: background 0.3s;

  &:hover {
    background: #218838;
  }
`;
