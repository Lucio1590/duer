import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CreateContest from "./pages/CreateContest";
import Bets from "./pages/Bets";
import Marketplace from "./pages/Marketplace";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="create" element={<CreateContest />} />
            <Route path="bets" element={<Bets />} />
            <Route path="marketplace" element={<Marketplace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
