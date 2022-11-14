import ScanQr from "./screens/qrScan/ScanQr";
import "./App.css";
import logo from "./Images/logo.png";
import {BrowserRouter, Router, Routes, Route } from "react-router-dom";
import BasicTable from "./screens/questions";

function App() {
  return (
    <div className="App">
      <img src={logo} className="img" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScanQr />} />
          <Route path="/questions" element={<BasicTable/>} />
        </Routes>
      </BrowserRouter>
      {/* <ScanQr /> */}
    </div>
  );
}

export default App;
