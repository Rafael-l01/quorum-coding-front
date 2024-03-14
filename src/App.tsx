import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LegislatorsVotes from "./pages/LegislatorsVotes";
import BillsVotes from "./pages/BillsVotes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LegislatorsVotes />} />
        <Route path="/bills-votes" element={<BillsVotes />} />
        <Route path="/legislators-votes" element={<LegislatorsVotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
