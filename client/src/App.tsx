// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ALL_ORDERS } from "./component/ArrData";

import AppForm from "./component/formIndex/hookController";
import AllOrders from "./component/orders";
import { ScreenManager } from "./component/screenManager";
import AppContext from "./component/themeContext";

function App() {
  const [allOrders, setAllOrders] = useState(ALL_ORDERS);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AllOrders options={allOrders} setOptions={setAllOrders} />
            }
          />
          <Route
            path="/creatOrder"
            element={<AppForm options={allOrders} setOptions={setAllOrders} />}
          />
          <Route path="/managerSrceen" element={<ScreenManager />} />
          <Route path="/appContext" element={<AppContext />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
