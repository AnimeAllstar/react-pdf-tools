import './App.css';
import React, { useState } from 'react';
import { Dropzone } from '@dropzone-ui/react';
import PdfList from './components/PdfList';
import { Button, Container } from 'react-bootstrap';
import { PDFDocument } from 'pdf-lib';
import { readFile } from './utils/readFile';

const App = () => {
  const [pdfs, setPdfs] = useState([]);

  const updatePdfs = (newPdfs) => {
    const newValidPdfs = newPdfs.filter((pdf) => pdf.valid && !pdfs.find((p) => p.file.name === pdf.file.name));
    setPdfs([...pdfs, ...newValidPdfs]);
  };

  const mergePdfs = async () => {
    const arrayBufferPromises = pdfs.map((pdf) => readFile(pdf.file));
    const arrayBuffers = await Promise.all(arrayBufferPromises);

    const pdfDocumentPromises = arrayBuffers.map((buffer) => PDFDocument.load(buffer));
    const pdfDocuments = await Promise.all(pdfDocumentPromises);

    const mergedPdf = await PDFDocument.create();

    pdfDocuments.forEach(async (pdf) => {
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => {
        mergedPdf.addPage(page);
      });
    });

    const mergedPdfFile = await mergedPdf.save({ addDefaultPage: false });

    const mergedPdfBlob = new Blob([mergedPdfFile], { type: 'application/pdf' });
    const mergedPdfUrl = URL.createObjectURL(mergedPdfBlob);
    const a = document.createElement('a');
    a.href = mergedPdfUrl;
    a.download = 'merged.pdf';
    a.click();
  };

  return (
    <>
      <Container className="my-4">
        <Dropzone
          onChange={updatePdfs}
          value={pdfs}
          accept="application/pdf"
          label="Drop your pdfs here"
          header={false}
          footer={false}
          behaviour="replace"
        />
        <div className="my-4">
          {pdfs.length > 1 && (
            <Button className="w-100" onClick={mergePdfs}>
              Merge
            </Button>
          )}
        </div>
        <PdfList list={pdfs} setList={setPdfs} />
      </Container>
    </>
  );
};

export default App;
