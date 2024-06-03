import { Dispatch } from "react";

interface EventProper {
  id: string;
  name: string;
  comments: string;
}
export interface IPropsEventLoc {
  options: EventProper[];
  setOptions: Dispatch<React.SetStateAction<EventProper[]>>;
}

export const ViewLoction = ({ options, setOptions }: IPropsEventLoc) => {
  return <h1>ViewLoction</h1>;
};
