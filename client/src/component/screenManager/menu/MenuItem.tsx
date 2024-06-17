import styled from "styled-components";

export const MenuItem = ({ active, title, address, changeActive }: any) => {
  const handleClick = () => {
    changeActive(address);
  };
  return !active ? (
    <MenuItemWrapper onClick={handleClick}>{title}</MenuItemWrapper>
  ) : (
    <ActiveItemWrapper onClick={handleClick}>
      {title}
      <Connector>
        <TopCurve>
          <InTop />
        </TopCurve>
        <BottomCurve>
          <InBottom />
        </BottomCurve>
      </Connector>
    </ActiveItemWrapper>
  );
};

const MenuItemWrapper = styled.div`
  position: relative;
  background-color: #f8f8f8;
  padding: 10px 25px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  font-size: 26px;
  font-weight: 600;
  line-height: 30px;
  cursor: pointer;
`;

const ActiveItemWrapper = styled(MenuItemWrapper)`
  color: #fe2d55;
  border: 2px solid #ff0000;
  border-left: 0;
  border-radius: 0 10px 10px 0;
`;

const Connector = styled.div`
  position: absolute;
  top: -2px;
  left: -24px;
  width: 27px;
  height: 100%;
  background-color: #f8f8f8;
  border: 2px solid #ff0000;
  border-right: 0;
  border-left: 0;
  z-index: 10;
`;

const TopCurve = styled.div`
  position: absolute;
  top: -17.5px;
  left: 0;
  width: 17px;
  height: 20px;
  background-color: #f8f8f8;
  overflow: hidden;
`;

const InTop = styled.div`
  position: absolute;
  background-color: #dddddd;
  width: 30px;
  height: 30px;
  top: -17px;
  right: -17px;
  border-radius: 50%;
  border: 2px solid #ff0000;
`;

const BottomCurve = styled.div`
  position: absolute;
  bottom: -17.5px;
  left: 0;
  width: 17px;
  height: 20px;
  background-color: #f8f8f8;
  overflow: hidden;
`;

const InBottom = styled.div`
  position: absolute;
  background-color: #dddddd;
  width: 30px;
  height: 30px;
  bottom: -17px;
  right: -17px;
  border-radius: 50%;
  border: 2px solid #ff0000;
`;
