// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ALL_ORDERS } from "./component/ArrData";
import Card from "./component/Cards";
import Test from "./component/Test";
import AppForm from "./component/formIndex/hookController";
import AllOrders from "./component/orders";
import { ScreenManager } from "./component/screenManager";

function App() {
  const [allOrders, setAllOrders] = useState(ALL_ORDERS);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<AllOrders options={allOrders} setOptions={setAllOrders} />}
        />
        <Route
          path="/test"
          element={<AppForm options={allOrders} setOptions={setAllOrders} />}
        />
        <Route path="/managerSrceen/:pages" element={<ScreenManager />} />
      </Routes>
    </Router>
  );
}

export default App;
