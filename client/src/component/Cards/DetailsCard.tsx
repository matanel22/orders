import { FormInputs } from "../formIndex/hookController";
import { CardContainer } from "../style/tableOrders.style";
import ItemsDetails from "./Items";
import deleteOrder from "../../svg/deleteOrder.svg";
import view from "../../svg/view.svg";
import { Span } from "../orders/OrderDeteils";
import { Line, TableColumn } from "../screenManager/MSTtable";
import { ORDERS_FOOD } from "../orders";

interface IPropsDetails {
  line: Line;
  tableHeadRow: TableColumn[];
}

const DeteilsCard = ({ line }: IPropsDetails) => {
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
            return <div key={index}>{`${line[field.columnId]}`}</div>;
          })}
        </div>
      </div>

      <div>
        <img src={view} alt="Description of the image" />
        <img src={deleteOrder} alt="Description of the image" />
      </div>
    </CardContainer>
  );
};
export default DeteilsCard;
