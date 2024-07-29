import React, { useState, useEffect } from 'react';
import QrScanner from 'react-qr-scanner';

const QrScannerComponent = () => {
  const [result, setResult] = useState('');
  const [isScanning, setIsScanning] = useState(true);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    // Request camera permission when the component mounts
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        console.log("Camera permission granted");
        setPermissionGranted(true);
        // Stop all tracks to release the camera
        stream.getTracks().forEach(track => track.stop());
      })
      .catch((err) => {
        console.error('Error accessing camera:', err);
        setPermissionGranted(false);
      });
  }, []);

  const handleScan = (data) => {
    console.log('Scanning data:', data);
    if (data) {
      setResult(data);
      console.log("data is : " + data);
      // Stop scanning after getting the result
      setIsScanning(false);
    }
  };

  const handleError = (err) => {
    console.error('Error scanning QR code:', err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
    border: '1px solid black',
    margin: '10px auto'
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {isScanning && permissionGranted && (
        <div>
          <QrScanner
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={previewStyle}
          />
        </div>
      )}
      <p>{result ? `Scanned result: ${result}` : 'No result'}</p>
      {!permissionGranted && <p>Camera permission is required to scan QR codes.</p>}
    </div>
  );
};

export default QrScannerComponent;
