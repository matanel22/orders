import styled from "styled-components";

interface IPropsButton {
  variable: string;
  text: string;
  width: string;
  style?: React.CSSProperties;
  onClick: () => void;
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
        <EditButton onClick={onClick} style={{ width, ...style }}>
          {text}
        </EditButton>
      );
    case "miniFULL":
      return (
        <FullMiniButton onClick={onClick} style={{ width, ...style }}>
          {text}
        </FullMiniButton>
      );
    case "LITE":
      return (
        <DeleteButton onClick={onClick} style={{ width, ...style }}>
          {text}
        </DeleteButton>
      );
    case "miniLITE":
      return (
        <DeleteButton onClick={onClick} style={{ width, ...style }}>
          {text}
        </DeleteButton>
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
export const Buttons = styled.button`
  background-color: #009879;
  color: white;
  border: none;
  padding: 8px 12px;
  margin: 4px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007b63;
  }

  &:focus {
    outline: none;
  }
`;

export const EditButton = styled(Buttons)`
  background-color: #152a63;
  ;

  &:hover {
    background-color: #000000;
  }
`;

export const DeleteButton = styled(Buttons)`
  background-color: #ff4d4d;

  &:hover {
    background-color: #cc0000;
  }
`;
