import React from 'react';
import QRCode from 'qrcode.react';

function MyQR() {
  const token = localStorage.getItem("authTokens");
  let user_id = "default";

  if (token) {
    const decoded = jwt_decode(token);
    user_id = decoded.user_id;
  }

  return (
    <div>
      <h2>Your QR Code</h2>
      <QRCode value={user_id} />
    </div>
  );
}

export default MyQR;
