import React, { Dispatch, useEffect, useState } from "react";
import styled from "styled-components";
import { SelectFields } from "./SelectFields";
import { MSButton } from "../MSButton";

// Styled components
interface IProps {
  AddLineText: any;
  handleAddLine: any;
  type: string;
  inputValue: any;
  setInputValue: any;
  setMode: any;
  editData: any;
  setValueSelect?: any;
  valueSelect?: any;
}
export const AddLineComponent = ({
  AddLineText,
  handleAddLine,
  type,
  inputValue,
  setInputValue,
  setMode,
  editData,
  valueSelect,
  setValueSelect,
}: IProps) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    name: string
  ) => {
    const newValue = event.target.value;
    setValueSelect((prev: any) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  return (
    <Container>
      {editData.length > 0
        ? editData.map((field: any, index: number) => {
            return (
              <React.Fragment key={index}>
                {field.edit !== "input" ? (
                  <SelectFields
                    handleChange={handleChange}
                    valueSelect={valueSelect}
                    setValueSelect={setValueSelect}
                    field={field}
                    mode="ADD"
                    initial={""}
                    changeSelectValue={handleAddLine}
                    options={field.options}
                  />
                ) : (
                  <Input
                    type={type}
                    onChange={(event: any) => {
                      valueSelect
                        ? handleChange(event, field.name)
                        : setInputValue(event.target.value);
                    }}
                    placeholder="הוסף שדה"
                  />
                )}
              </React.Fragment>
            );
          })
        : ""}
      <div style={{ display: "flex" }}>
        <StyledButton
          onClick={() => {
            valueSelect
              ? handleAddLine(valueSelect)
              : handleAddLine(inputValue);

            setMode("");
          }}
        >
          {AddLineText}
        </StyledButton>
        <MSButton
          onClick={() => {
            setValueSelect({});
            setMode("");
          }}
          text="בטל"
          variable="FULL"
          width=""
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  // flex-direction: column;
  align-items: center;
  // position: fixed;

  // margin-top: 1rem;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  width: 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StyledButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  &:active {
    background-color: #3e8e41;
    transform: scale(0.95);
  }
`;
