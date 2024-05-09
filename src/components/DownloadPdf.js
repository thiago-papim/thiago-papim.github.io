import React from 'react';
import { Button, Divider } from '@mui/material';
import pdf from '../curriculo/Profile.pdf';
import pdfLogo from '../images/pdf.png';

function DownloadPdf() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'Curriculo-Thiago-Papim.pdf';
    link.click();
  };

  return (
    <div className="flex flex-col items-center w-full">
      <p
        className="font-[Poppins] text-white"
        style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 500 } }
      >
        Baixar meu currículo em PDF
      </p>
      <Divider className="md:w-64 w-[90%] bg-gray-200" />
      <Button
        className="w-[50px] lg:w-[80px] hover:scale-105 trasform"
        onClick={ handleDownload }
      >
        <img src={ pdfLogo } alt="adobe" />
      </Button>
    </div>
  );
}

export default DownloadPdf;
