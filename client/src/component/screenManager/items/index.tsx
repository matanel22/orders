import { Dispatch } from "react";
import { IPropsItems } from "../../formIndex/hookController";

interface IProps {
  setOptions: Dispatch<React.SetStateAction<IPropsItems[]>>;
  options: IPropsItems[];
}

export const ViewItems = ({ setOptions, options }: IProps) => {
  return <h1>View Items</h1>;
};
