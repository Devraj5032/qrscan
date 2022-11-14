import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate} from "react-router-dom"
import Button from '@mui/material/Button';

const ScanQr = () => {
//   const [houseId, setHouseId] = useState("");

  let navigate = useNavigate()

  const handleErrorWebCam = (error) => {
    console.log(error);
  };

  const handleScanWebCam = () => {
        navigate("/questions")
    
   }
  return (
    <div style={{display: "flex"  , alignItems: "center" , flexDirection: "column"}}>
    <div style={{ width:"100%" , maxWidth: "600px"}}>
      <QrReader
        delay={300}
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}
      />
    </div>
    <Button onClick={() => {navigate("/questions")}} variant="contained">Click</Button>
    </div>
  );
};

export default ScanQr;
