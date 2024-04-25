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
      <p className="font-custom">Baixar Currículo em PDF</p>
      <Divider className="w-full dark:bg-gray-500 bg-gray-200" />
      <Button
        className="w-[80px]"
        onClick={ handleDownload }
      >
        <img src={ pdfLogo } alt="adobe" />
      </Button>
    </div>
  );
}

export default DownloadPdf;
