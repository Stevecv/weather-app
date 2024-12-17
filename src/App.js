import logo from './logo.svg';
import './App.css';
import WeatherInformation from "./pages/WeatherInformation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Information from "./pages/Information";
import AirQuality from "./pages/AirQuality";

function App() {
  return (
      <div className="h-screen w-screen bg-[#F2F2F2]">
          <BrowserRouter>
              <Header />
              <Routes>
                      <Route index element={<WeatherInformation />} />
                      <Route path="information" element={<Information />} />
                      <Route path="air-quality" element={<AirQuality />} />
                      <Route path="weather-information" element={<WeatherInformation />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
