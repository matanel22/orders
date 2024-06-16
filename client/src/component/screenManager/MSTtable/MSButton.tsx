import styled from "styled-components";

interface IPropsButton {
  variable: string;
  text: string;
  width: string;
  style?: React.CSSProperties;
  onClick: any;
}

export const MSButton = ({
  variable,
  text,
  width,
  onClick,
  style,
}: IPropsButton) => {
  switch (variable) {
    case "FULL":
      return (
        <FullButton onClick={onClick} style={{ width, ...style }}>
          {text}
        </FullButton>
      );
    case "miniFULL":
      return (
        <FullMiniButton onClick={onClick} style={{ width, ...style }}>
          {text}
        </FullMiniButton>
      );
    case "LITE":
      return (
        <LiteButton onClick={onClick} style={{ width, ...style }}>
          {text}
        </LiteButton>
      );
    case "miniLITE":
      return (
        <LITEMiniButton onClick={onClick} style={{ width, ...style }}>
          {text}
        </LITEMiniButton>
      );
    default:
      return null;
  }
};

const Button = styled.button`
  border: none;
  margin-left: 5px;
  font-family: "Rubik";
  font-weight: 500;
  cursor: pointer;
  box-sizing: border-box;
  padding: 2px 0;
`;

const FullButton = styled(Button)`
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  background-color: #fe2d55;
  box-shadow: 0px 0px 8px rgba(254, 45, 85, 0.3);
  border-radius: 4px;
`;

const FullMiniButton = styled(FullButton)`
  font-size: 12px;
  line-height: 14px;
`;

const LiteButton = styled(Button)`
  font-size: 20px;
  line-height: 24px;
  color: #fe2d55;
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #fe2d55;
`;

const LITEMiniButton = styled(LiteButton)`
  font-size: 14px;
  line-height: 17px;
`;
