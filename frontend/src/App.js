import React from "react";


// pages and layout
import { WeatherProvider } from "./WeatherContext";
import Sidebar from "./components/sidebar";
import Weatherpanel from "./components/weatherpanel";



function App() {
  return (
    <div className="App d-flex">
      <WeatherProvider>
        <Sidebar />
        <Weatherpanel />
      </WeatherProvider>
    </div>
  );
}

export default App;
