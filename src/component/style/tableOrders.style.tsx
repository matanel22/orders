import styled, { css } from "styled-components";

export const DefultContainer = styled.div``;
export const ContainerMorDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 200px;
`;
export const Container = styled.div`
  padding: 10px;
  margin-right: 15%;
  margin-left: 15%;
  box-shadow: 10px 5px 5px rgba(0, 128, 0, 0.3);
  ${css`
    @media (max-width: 768px) {
      padding: 5px;
      width: 100%;
      overflow: hidden;
    }
  `}
`;
export const HeaderWarper = styled.div`
  top: 0;
  padding: 1rem 0rem 1.5rem 0rem;
  height: 4rem;
  position: sticky;
  background-color: rgba(255, 255, 255, 1);
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  margin-right: 16%;
  margin-left: 16%;
  display: flex;
  justify-content: space-between;
`;
const ButtonBsic = styled.button`
display:flex;
align-items:center;
text-align center;
justify-content: center;
background:rgba(0, 128, 0, 0.3);
box-sizing: border-box;
cursor :pointer
font-size:1rem;
font-weight:550;
`;

export const ButtonUi = styled(ButtonBsic)`
  // color: #5b7fff;
  // border: 1px solid #547fff;
  min-width: 11.5rem;
  height: 2.625rem;
  transition: font-size 0.25s ease;
  &:hover {
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

export const Column = styled.div`
  display: flex;

  flex-direction: column;
  padding-left: 2rem;
`;
export const style = {
  position: "absolute" as "absolute",
  direction: "rtl",
  width: "50%",
  top: "50%",
  height: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid rgba(0, 128, 0, 0.3)",
  boxShadow: 24,
  p: 4,
  dirction: "rtl",
};
export const addNewOrderStyle = {
  position: "absolute" as "absolute",
  direction: "rtl",
  // width: "50%",
  top: "50%",
  // height: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid rgba(0, 128, 0, 0.3)",
  boxShadow: 24,
  p: 4,
  dirction: "rtl",
};
export const SearchOrder = styled.input`
  height: 2rem;
  display: flex;
  direction: rtl;
  border: 1px solid rgba(0, 128, 0, 0.3);
`;
export const ButtonArrow = styled.img``;
