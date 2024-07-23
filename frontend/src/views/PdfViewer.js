import React, { useState } from 'react';
import axios from 'axios';

const PdfViewer = () => {
  const [pdfUrl, setPdfUrl] = useState('');

  const fetchPdf = async () => {
    try {
      const response = await axios.get('http://example.com/path/to/pdf', {
        responseType: 'blob', // Important to handle binary data
      });
      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      setPdfUrl(url);
    } catch (error) {
      console.error('Error fetching PDF:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchPdf}>Load PDF</button>
      {pdfUrl && (
        <iframe
          src={pdfUrl}
          width="100%"
          height="600px"
          title="PDF Viewer"
        />
      )}
    </div>
  );
};

export default PdfViewer;
