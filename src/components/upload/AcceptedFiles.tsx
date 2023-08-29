import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button, Accordion, Table, AccordionContext } from 'react-bootstrap'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import '../../css/main.css'
import ViewFilesModal from '../sideBar/modals/ViewFilesModal';

function CustomToggle({ children, eventKey, callback } : any) {
    
    const chevronUp : any = <FontAwesomeIcon icon="chevron-up"/>;
    const chevronDown : any = <FontAwesomeIcon icon="chevron-down"/>

    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    let isCurrentEventKey : any;

    if(activeEventKey === undefined){
        
    } else {
        isCurrentEventKey = activeEventKey?.includes(eventKey);
    }

    
  
    return (
      <Button
        type="button"
        variant="primary"
        size="sm"
        onClick={decoratedOnClick}
      >
        {children}
        { isCurrentEventKey ? chevronUp : chevronDown}
      </Button>
    );
}

const File = ({
    file, deleteFromUploadedFiles, info, chosenComponents, flawInfo
}: any) => {

    const [hideInfoButton, setHideInfoButton] = useState<string>("none");
    useEffect(() => {
        // Pitäisikö tässä olla filtteröinti (filter by id), jotta pystyy lisäämään uuden tiedoston ilman, että tulokset nappi ilmestyy myös siihen?
        if(info.length <= 0 && flawInfo.length <= 0){
            setHideInfoButton("none");
        }
        if(info.length >= 1 || flawInfo.length >= 1){
            setHideInfoButton("");
        }
    }, [info, flawInfo]);

    const { t } = useTranslation();

    // Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className="my-1">
                <Card.Header>
                    <Container className='center'>
                        <Row>
                            <Col xs={1}>      
                                <FontAwesomeIcon style={{fontSize: "26px"}} icon="file"/>
                            </Col>
                            <Col xs={8}>      
                                <span onClick={handleShow}>{file.file.name}</span>
                            </Col>
                            <Col xs={2} >    
                                <div style={{display:hideInfoButton}}>
                                    <CustomToggle eventKey={file.id}>{t('AcceptedFiles.data')} </CustomToggle>
                                </div>  
                            </Col>
                            <Col  xs={1}>
                                <span 
                                    data-tip 
                                    data-for="trash"
                                    className='deleteFileButton'
                                    aria-hidden="true"
                                    onClick={() => {
                                        deleteFromUploadedFiles(file.id);
                                    }}
                                >
                                    <FontAwesomeIcon style={{fontSize: "26px"}} icon="trash"/>
                                </span>
                            </Col> 
                        </Row>
                    </Container>
                </Card.Header>
                <Accordion.Collapse eventKey={file.id}>
                    <Card.Body>
                        <Container>
                            <Table>
                                <tbody>
                                    {info.filter((i : any) => i.data[0][14].includes(file.id)).map((filteredInfo: any) => (
                                        <>
                                            <tr hidden={chosenComponents.annif === "true" ? false : true}>
                                                <td>{t('AcceptedFiles.keyWords')}</td>
                                                <td>{filteredInfo.data[0][3] && filteredInfo.data[0][3].replaceAll(',', ', ')}</td>
                                            </tr>
                                            <tr hidden={chosenComponents.act === "true" ? false : true}>
                                                <td>{t('AcceptedFiles.actor')}</td>
                                                <td>{filteredInfo.data[0][1] != "[]" && filteredInfo.data[0][1]}</td>
                                            </tr>
                                            <tr hidden={chosenComponents.name === "true" ? false : true}>
                                                <td>{t('AcceptedFiles.names')}</td>
                                                <td>{filteredInfo.data[0][2] != "[]" && filteredInfo.data[0][2]}</td>
                                            </tr>
                                            <tr hidden={chosenComponents.lang === "true" ? false : true}>
                                                <td>{t('AcceptedFiles.language')}</td>
                                                <td>{filteredInfo.data[0][4]}</td>
                                            </tr>
                                            <tr hidden={chosenComponents.date === "true" ? false : true}>
                                                <td>{t('AcceptedFiles.date')}</td>
                                                <td>{filteredInfo.data[0][5] != "[]" && filteredInfo.data[0][5]}</td>
                                            </tr>
                                            <tr hidden={chosenComponents.yField === "true" ? false : true}>
                                                <td>{t('AcceptedFiles.yField')}</td>
                                                <td>{filteredInfo.data[0][6] != "[]" && filteredInfo.data[0][6]}</td>
                                            </tr>
                                            <tr hidden={chosenComponents.diar === "true" ? false : true}>
                                                <td>{t('AcceptedFiles.diar')}</td>
                                                <td>{filteredInfo.data[0][7] != "[]" && filteredInfo.data[0][7]}</td>
                                            </tr>
                                            <tr hidden={chosenComponents.loc === "true" ? false : true}>
                                                <td>{t('AcceptedFiles.loc')}</td>
                                                <td>{filteredInfo.data[0][9] != "[]" && filteredInfo.data[0][9]}</td>
                                            </tr>
                                            <tr hidden={chosenComponents.gpe === "true" ? false : true}>
                                                <td>{t('AcceptedFiles.gpe')}</td>
                                                <td>{filteredInfo.data[0][10] != "[]" && filteredInfo.data[0][10]}</td>
                                            </tr>
                                            <tr hidden={chosenComponents.product === "true" ? false : true}>
                                                <td>{t('AcceptedFiles.product')}</td>
                                                <td>{filteredInfo.data[0][11] != "[]" && filteredInfo.data[0][11]}</td>
                                            </tr>
                                            <tr hidden={chosenComponents.event === "true" ? false : true}>
                                                <td>{t('AcceptedFiles.event')}</td>
                                                <td>{filteredInfo.data[0][12] != "[]" && filteredInfo.data[0][12]}</td>
                                            </tr>
                                            <tr hidden={chosenComponents.norp === "true" ? false : true}>
                                                <td>{t('AcceptedFiles.norp')}</td>
                                                <td>{filteredInfo.data[0][13] != "[]" && filteredInfo.data[0][13]}</td>
                                            </tr>
                                            
                                            
                                        </>
                                    ))}
                                    <tr hidden={chosenComponents.empty === "true" ? false : true}>
                                        <td>{t('AcceptedFiles.emptyPages')}</td>
                                        <td>
                                            {flawInfo.map((nested: any[]) => nested.filter((i : any) => i.id === file.id).map((filteredInfo : any, index : any) => (
                                                <span hidden={filteredInfo.tyhja_sivu === 0}> {t('AcceptedFiles.page')} {index + 1} </span>
                                            )))}
                                        </td>
                                    </tr>
                                    <tr hidden={chosenComponents.postIt === "true" ? false : true}>
                                        <td>{t('AcceptedFiles.postIt')}</td>
                                        <td>
                                            {flawInfo.map((nested: any[]) => nested.filter((i : any) => i.id === file.id).map((filteredInfo : any, index : any) => (
                                                <span hidden={filteredInfo.post_it === 0}> {t('AcceptedFiles.page')} {index + 1}</span>
                                            )))}
                                        </td>
                                    </tr>
                                    <tr hidden={chosenComponents.corner === "true" ? false : true}>
                                        <td>{t('AcceptedFiles.bentCorners')}</td>
                                        <td>
                                            {flawInfo.map((nested: any[]) => nested.filter((i : any) => i.id === file.id).map((filteredInfo : any, index : any) => (
                                                <span hidden={filteredInfo.taittunut_kulma === 0}> {t('AcceptedFiles.page')} {index + 1} </span>
                                            )))}
                                        </td>
                                    </tr>
                                    <tr hidden={chosenComponents.writingType === "true" ? false : true}>
                                        <td>{t('AcceptedFiles.writingType')}</td>
                                        <td>
                                            {flawInfo.map((nested: any[]) => nested.filter((i : any) => i.id === file.id).map((filteredInfo : any, index : any) => (
                                                <>
                                                    {(filteredInfo.kirjoitustyyppi === 0) && <span> {t('AcceptedFiles.page')} {index + 1} {t('AcceptedFiles.isHandwritten')} <br/></span>}
                                                    {(filteredInfo.kirjoitustyyppi === 1) && <span> {t('AcceptedFiles.page')} {index + 1} {t('AcceptedFiles.isTypewritten')} <br/></span>}
                                                    {(filteredInfo.kirjoitustyyppi === 2) && <span> {t('AcceptedFiles.page')} {index + 1} {t('AcceptedFiles.isCombination')} <br/></span>}
                                                    {(filteredInfo.kirjoitustyyppi !== 1 && filteredInfo.kirjoitustyyppi !== 2 && filteredInfo.kirjoitustyyppi !== 0) && <span> {t('AcceptedFiles.page')} {index + 1} tunnistaminen epäonnistui <br/></span>}
                                                </>
                                            )))}
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </Table>
                        </Container>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <ViewFilesModal show={show} handleClose={handleClose} file={file}/>
            
        </>
    );

}

const AcceptedFiles = ({
    files, deleteFromUploadedFiles, info, chosenComponents, flawInfo
} : any) => {
    // render each file by calling File component
    const renderFile = (file: any) => {
        return (
          <File
            file={file}
            key={file.id}
            deleteFromUploadedFiles={deleteFromUploadedFiles}
            info={info}
            chosenComponents={chosenComponents}
            flawInfo={flawInfo}
          />
        );
    };

    // Return list of files
    return <>
        <Accordion alwaysOpen>{files.map(renderFile)}</Accordion>
    </>;
  };
  
  export default AcceptedFiles;