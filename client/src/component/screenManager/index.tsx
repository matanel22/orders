import React, { useEffect, useState } from "react";
import { DefaultContainer } from "../../defultContainer";
import { ViewItems } from "./items";
import { ViewEvent } from "./events";
import { ViewLoction } from "./loction";
import { useNavigate, useParams } from "react-router-dom";
import { Items, EventType, LoctionType } from "../formIndex/hookController";
export const ScreenManager = () => {
  const [path, setPath] = useState("");
  const [allItems, setAllItems] = useState(Items);
  const [allEvent, setAllEvent] = useState(EventType);
  const [allLoction, setAllLoction] = useState(LoctionType);
  const navigate = useNavigate();

  const changeItem = (newItemId: string) => {
    setPath(newItemId);
    navigate(`/managerSrceen/${newItemId}`, { replace: true });
  };

  return (
    <DefaultContainer background={true}>
      {path === "items" ? (
        <ViewItems setOptions={setAllItems} options={allItems} />
      ) : path === "ViewLoction" ? (
        <ViewLoction options={allEvent} setOptions={setAllEvent} />
      ) : (
        <ViewEvent options={allLoction} setOptions={setAllLoction} />
      )}
      <button
        type="button"
        onClick={() => {
          changeItem("items");
        }}
      >
        {"items"}
      </button>
      <button
        type="button"
        onClick={() => {
          changeItem("ViewLoction");
        }}
      >
        {"ViewLoction"}
      </button>
      <button
        type="button"
        onClick={() => {
          changeItem("ViewEventType");
        }}
      >
        {"ViewEventType"}
      </button>
    </DefaultContainer>
  );
};
