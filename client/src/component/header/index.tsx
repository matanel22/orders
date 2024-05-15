// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useRecoilValue } from "recoil";
import styled from "styled-components";
// import { BASE_URL } from "../../api/constants";
// import { Plus } from "../../assets/Svgs/Plus";
// import { Modal } from "../../atoms/Modal";
// import { selectedFolder } from "../../store/upload";

// import { UploadModal } from "../UploadModal";

// import ClockHello from "../Clock/ClockHello";

interface IProps {
  plus?: boolean;
}

export const Header = ({ plus }: IProps) => {
  return (
    <>
      <HeaderWarper>
        <HeaderStyle></HeaderStyle>
      </HeaderWarper>
    </>
  );
};

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderWarper = styled.div`
  z-index: 10;
  top: 0;
  left: 0;
  padding: 1rem 0rem 1.5rem 0rem;
  max-width: 100vw;
  position: sticky;
  background-color: #6cba65;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  margin: 0 0 1rem 0;
  height: 10vw;
`;
