import QRCode from 'qrcode.react';
import { useState } from 'react';

function QRcode(){
    const [inputData, setInputData] = useState('');

  return (
    <div>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Enter data for QR code"
      />
      {inputData && <QRCode value={inputData} />}
    </div>
  );
}

export default QRcode;