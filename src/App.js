import './App.css';
import React, { useState } from 'react';
import { Dropzone } from '@dropzone-ui/react';
import PdfList from './components/PdfList';
import { Container, Button, ButtonGroup } from 'react-bootstrap';
import { PDFDocument } from 'pdf-lib';
import { readFile } from './utils/readFile';

const App = () => {
  const [pdfs, setPdfs] = useState([]);
  const [isDownloadable, setDownloadable] = useState(false);
  const [downloadLink, setDownloadLink] = useState(null);

  const updatePdfs = (newPdfs) => {
    const newValidPdfs = newPdfs.filter((pdf) => pdf.valid && !pdfs.find((p) => p.file.name === pdf.file.name));
    if (newValidPdfs.length !== 0) {
      setDownloadable(false);
    }
    setPdfs([...pdfs, ...newValidPdfs]);
  };

  const mergePdfs = async () => {
    try {
      const arrayBufferPromises = pdfs.map((pdf) => readFile(pdf.file));
      const arrayBuffers = await Promise.all(arrayBufferPromises);

      const pdfDocumentPromises = arrayBuffers.map((buffer) => PDFDocument.load(buffer));
      const pdfDocuments = await Promise.all(pdfDocumentPromises);

      const mergedPdf = await PDFDocument.create();

      for (const pdf of pdfDocuments) {
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => {
          mergedPdf.addPage(page);
        });
      }

      const mergedPdfFile = await mergedPdf.save({ addDefaultPage: false });

      const mergedPdfBlob = new Blob([mergedPdfFile], { type: 'application/pdf' });
      const mergedPdfUrl = URL.createObjectURL(mergedPdfBlob);

      setDownloadLink(mergedPdfUrl);
      setDownloadable(true);
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again or check the console for more information.');
    }
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
          <ButtonGroup className="w-100">
            {pdfs.length > 1 && (
              <Button
                onClick={async () => {
                  if (!isDownloadable) {
                    setDownloadable(false);
                    await mergePdfs();
                  }
                }}
              >
                Merge
              </Button>
            )}
            {isDownloadable && (
              <Button variant="warning" href={downloadLink} download="merged.pdf">
                Download
              </Button>
            )}
          </ButtonGroup>
        </div>
        <PdfList list={pdfs} setList={setPdfs} setDownloadable={setDownloadable} />
      </Container>
    </>
  );
};

export default App;
