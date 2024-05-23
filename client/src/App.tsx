// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllOrders, { ALL_ORDERS } from "./component/orders";
import Card from "./component/Cards";
import Test from "./component/Test";
import AppForm from "./component/formIndex/hookController";

function App() {
  const [searchResults, setSearchResults] = useState(ALL_ORDERS);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllOrders />} />
        <Route path="/test" element={<AppForm options={searchResults} setOptions={setSearchResults}/>} />
      </Routes>
    </Router>
  );
}

export default App;
