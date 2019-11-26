import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nike from "./components/Nikes/Index";
import HomePage from "./components/Home";
import NanyaMusic from "./components/nanya-music/Index";
import Flight from "./components/flight";

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/kyrie5-x-bandulu" exact component={Nike} />
      <Route
        path="/nanya-music-by-sky-micheal-ajah"
        exact
        component={NanyaMusic}
      />
      <Route path="/iFlight-A-Flight-Search-Booking-Landing-Page" exact component={Flight} />
    </Router>
  );
};

export default App;
