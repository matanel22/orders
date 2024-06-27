import React, { Dispatch, useEffect, useState } from "react";

import { FormInputs, FormOptions } from "../formIndex/hookController";

export interface ArrayComponentProps<T> {
  items?: T[];
  options: FormInputs[];
  state?: Dispatch<React.SetStateAction<T[]>>;
  image?: File;
}

const Card = <T extends Record<string, any>>({
  options,
  image,
}: ArrayComponentProps<T>) => {
  const [show, setShow] = useState(false);
  return <div style={{ display: "flex" }}></div>;
};

export default Card;
