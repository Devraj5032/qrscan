import ScanQr from "./screens/qrScan/ScanQr"
import './App.css';
import logo from "./Images/logo.png"

function App() {
  return (
    <div className="App">
      <img src={logo}  className="img"/>
      <ScanQr />
    </div>
  );
}

export default App;
