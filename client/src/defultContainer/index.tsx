import styled from "styled-components";
import { Header } from "../component/header";
import SearchComponent from "../component/header/search";

interface IProps {
  children: React.ReactNode;
  background?: boolean;

  plus?: boolean;
  overflow?: string;
  height?: number;
}

export const DefaultContainer = ({
  children,
  background,

  plus,
  overflow,
}: IProps) => {
  return (
    <AppWrapper background={background} overflow={overflow}>
      <Header />
      {children}
    </AppWrapper>
  );
};

const AppWrapper = styled.div<IProps>`
  overflow: ${(props) => props.overflow};
  background-size: cover;
  position: relative;
  /* height: unset; */
  height: ${(props) => (props?.height ? `${props.height}%` : "unset")};
  min-height: 100vh;
  width: 100vw;
  /* direction:"rtl" */
`;
// background: ${(props) => props.background === true && `#d1d1d1`};
