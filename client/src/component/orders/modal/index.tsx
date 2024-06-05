import styled from "styled-components";


interface IProps {
    children: React.ReactNode;
    background?: boolean;
  
    plus?: boolean;
    overflow?: string;
    height?: number;
  }

export const ModalDegine=({children,background,overflow}:IProps)=>{
    return (
        <WrapperModal>
            {children}
        </WrapperModal>
    )
}

const WrapperModal=styled.div`
    /* position: fixed; */
    /* background-color: red; */
    box-shadow: "0 8px 16px 0 rgba(0,0,0,0.2)";
    background-color:"#6cba65";
    height:"20vh";
    width:"80vw";
    margin:"0 auto";
    direction:"rtl";
    margin-top:"1rem";
    border-radius:"3rem"
`