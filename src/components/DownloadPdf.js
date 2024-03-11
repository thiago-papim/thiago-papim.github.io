import React from 'react';
import { Button } from '@mui/material';
import pdf from '../curriculo/Profile.pdf';

function DownloadPdf() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'Curriculo-Thiago-Papim.pdf';
    link.click();
  };

  return (
    <Button
      className="w-[250px]"
      variant="contained"
      onClick={ handleDownload }
    >
      Baixar Currículo em PDF
    </Button>
  );
}

export default DownloadPdf;
