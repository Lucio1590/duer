import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CreateContest from "./pages/CreateContest";
import Bets from "./pages/Bets";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<CreateContest />} />
          <Route path="bets" element={<Bets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
