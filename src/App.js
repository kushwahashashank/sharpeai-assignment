import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Transaction from "./Components/Transaction/Transaction.jsx";
import "./App.css";
import Data from "./Components/Data/Data.jsx";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
function App() {
  document.title = "Sharpe AI";

  // Declaring cases for notifying in notify function
  const notify = (type, message) => {
    switch (type) {
      case "info":
        NotificationManager.info(message);
        break;
      case "success":
        NotificationManager.success(message);
        break;
      case "warning":
        NotificationManager.warning(message);
        break;
      case "error":
        NotificationManager.error(message);
        break;
      default:
    }
  };
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data" element={<Data />} />
            <Route
              path="/transaction"
              element={<Transaction notify={notify} />}
            />
          </Routes>
          <NotificationContainer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
