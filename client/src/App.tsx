// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllOrders from "./component/orders";
import Card from "./component/Cards";
import Test from "./component/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllOrders />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
