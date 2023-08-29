import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import ReactPdf from './ReactPdf';
import '../../css/main.css'

interface Props {
  file : any
}

const PdfDisplay = ({
    file,
}: Props) => {

  const { t } = useTranslation();

  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function changePageNumber(page: React.SetStateAction<number>) {
    setPageNumber(page);
  }

  const onDocumentLoadSuccess = ({
    numPages,
  }: any) => {
    setNumPages(numPages);
  };

  return (
    <>

      <TransformWrapper>
        <TransformComponent>
          <Document className="pdf-document-display" file={file.src}
            loading="ladataan" error="error"
            onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </TransformComponent>
      </TransformWrapper>

      <ReactPdf numPages={numPages} changePageNumber={changePageNumber}
        pageNumber={pageNumber} />
    </>

  );
};

export default PdfDisplay;
