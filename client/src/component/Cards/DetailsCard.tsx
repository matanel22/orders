import AppForm, { FormInputs } from "../formIndex/hookController";
import { CardContainer } from "../style/tableOrders.style";
import ItemsDetails from "./Items";
import deleteOrder from "../../svg/deleteOrder.svg";
import view from "../../svg/view.svg";
import { Span } from "../orders/OrderDeteils";
import { Line, TableColumn } from "../screenManager/MSTtable";
import { ORDERS_FOOD } from "../orders";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { ModalDegine } from "../orders/modal";

interface IPropsDetails {
  heandleLineChange?: any;
  handleAddLine?: any;
  handleDelete?: (id: string) => void;
  line: Line;
  tableHeadRow: TableColumn[];
  setOptions: any;
  options: any;
}

const DeteilsCard = ({
  line,
  handleDelete,
  heandleLineChange,
  setOptions,
  options,
}: IPropsDetails) => {
  const [mode, setMode] = useState(false);

  const renderFieldValue = (field: any, line: Line) => {
    if (field.type === "arr") {
      const itemsArray = field.columnId
        .split(".")
        .reduce((o: any, i: any) => o?.[i], line);
      if (Array.isArray(itemsArray)) {
        return (
          <ul>
            {itemsArray.map((item, index) => (
              <li key={index}>{`${item.name}: ${item.amount}`}</li>
            ))}
          </ul>
        );
      } else {
        return "No items";
      }
    } else {
      // Handle other fields
      return (
        field.columnId.split(".").reduce((o: any, i: any) => o?.[i], line) ??
        "N/A"
      );
    }
  };
  return (
    <CardContainer>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "1rem" }}>
          {ORDERS_FOOD.map((field, index) => (
            <div key={index}>{`${field.label}:`}</div>
          ))}
        </div>

        <div style={{ paddingRight: "1rem" }}>
          {ORDERS_FOOD.map((field, index) => {
            return <div key={index}>{`${renderFieldValue(field, line)}`}</div>;
          })}
        </div>
      </div>

      {mode && (
        <ModalDegine
          isOpen={mode}
          onClose={() => {
            setMode(false);
          }}
        >
          <AppForm options={options} setOptions={setOptions} line={line} />
        </ModalDegine>
      )}

      <div
        style={{ display: "flex", justifyContent: "end", paddingLeft: "10px" }}
      >
        <ViewIcon src={view} onClick={() => setMode(true)} />
        <DeleteIcon
          onClick={() => {
            if (handleDelete) handleDelete(line.id);
          }}
          src={deleteOrder}
        />
      </div>
    </CardContainer>
  );
};
export default DeteilsCard;

const DeleteIcon = styled.img`
  padding: 5px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }
`;
const ViewIcon = styled.img`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }
`;
