import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";

const Layout: React.FC = () => {
  return (
    <div className="app-layout">
      <main className="main-content">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Layout;
