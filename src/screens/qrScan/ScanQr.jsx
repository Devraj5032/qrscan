import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const ScanQr = () => {
  const [houseId, setHouseId] = useState("");

  const handleErrorWebCam = (error) => {
    console.log(error);
  };

  const handleScanWebCam = (result) => {
    if (result.length != 0 ) {
    //   // setScanResultWebCam(result);
    //   setHouseId(result.slice(-9));
      console.log(result);
    }
  };
  return (
    <>
      <QrReader
        delay={300}
        style={{ width: "100%", maxWidth: "600px" }}
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}
      />
    </>
  );
};

export default ScanQr;
