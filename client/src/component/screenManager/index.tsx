import React, { useEffect, useState } from "react";
import { DefaultContainer } from "../../defultContainer";
import { ViewItems } from "./items";
import { ViewEvent } from "./events";
import { ViewLoction } from "./loction";
import { Route, useNavigate, useParams } from "react-router-dom";
import { Items, EventType, LoctionType } from "../formIndex/hookController";
import styled from "styled-components";
enum Views {
  ITEMS = "items",
  VIEW_LOCTION = "ViewLoction",
  VIEW_EVENT_TYPE = "ViewEventType",
}

export const ScreenManager = () => {
  const [currentView, setCurrentView] = useState<Views | null>(null);
  const [allItems, setAllItems] = useState(Items);
  const [allEvent, setAllEvent] = useState(EventType);
  const [allLoction, setAllLoction] = useState(LoctionType);

  const changeView = (view: Views) => {
    setCurrentView(view);
  };

  return (
    <DefaultContainer background={true}>
      <div style={{ direction: "rtl" }}>
        <StyledButton type="button" onClick={() => changeView(Views.ITEMS)}>
          שם פריט
        </StyledButton>
        <StyledButton
          type="button"
          onClick={() => changeView(Views.VIEW_LOCTION)}
        >
          שם מקום
        </StyledButton>
        <StyledButton
          type="button"
          onClick={() => changeView(Views.VIEW_EVENT_TYPE)}
        >
          סוג אירוע
        </StyledButton>

        {currentView === Views.ITEMS && (
          <ViewItems
            setOptions={setAllItems}
            options={allItems}
            allEvent={allEvent}
            allLoction={allLoction}
          />
        )}
        {currentView === Views.VIEW_LOCTION && (
          <ViewLoction options={allLoction} setOptions={setAllLoction} />
        )}
        {currentView === Views.VIEW_EVENT_TYPE && (
          <ViewEvent options={allEvent} setOptions={setAllEvent} />
        )}
      </div>
    </DefaultContainer>
  );
};
const StyledButton = styled.button`
  background-color: #4caf50; /* Green background */
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 15px 32px; /* Some padding */
  text-align: center; /* Center the text */
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Make the button inline-block */
  font-size: 16px; /* Increase font size */
  margin: 4px 2px; /* Some margin */
  cursor: pointer; /* Pointer/hand icon */
  border-radius: 12px; /* Rounded corners */
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
    transform: scale(1.05); /* Slightly larger on hover */
  }

  &:active {
    background-color: #3e8e41; /* Even darker green on click */
    transform: scale(0.95); /* Slightly smaller on click */
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  background: #f8f8f8;
  overflow-y: hidden;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
