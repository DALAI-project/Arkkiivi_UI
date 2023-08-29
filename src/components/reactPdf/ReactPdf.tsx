import { useTranslation } from 'react-i18next';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ReactPdf = ({
    numPages, changePageNumber, pageNumber,
}: any) => {

  const { t } = useTranslation();

  return (
    <>
      {numPages > 1 ?
        <>
            <Row>
                <Col xs={6}>      
                    <button type="button" className="button expanded peruuta"
                        onClick={() => {
                        changePageNumber(pageNumber - 1);
                        }}>{t('ReactPdf.previousPage')}</button>
                </Col>
                <Col xs={6}>      
                    <button type="button" className="button expanded seuraava"
                        onClick={() => {
                        changePageNumber(pageNumber + 1);
                        }}>{t('ReactPdf.nextPage')}</button>
                </Col>
            </Row>

          {pageNumber}/{numPages}

        </> :
        null}
    </>

  );
};

export default ReactPdf;