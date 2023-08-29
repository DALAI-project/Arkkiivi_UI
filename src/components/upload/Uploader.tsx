import { useDropzone } from 'react-dropzone';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import AcceptedFiles from './AcceptedFiles';
import cuid from 'cuid';
import { Alert, Button, Navbar, Spinner } from 'react-bootstrap';
import CsvDownloadButton from 'react-json-to-csv';
import RejectedFiles from './rejectedFiles';
import RejectedFilesInfo from '../sideBar/modals/RejectedFilesInfo';

const getColor = (props: any) => {
    if (props.isDragAccept) {
      return '#00e676';
    }
    if (props.isDragReject) {
      return '#ff1744';
    }
    if (props.isDragActive) {
      return '#2196f3';
    }
    return '#787878';
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props: any) => getColor(props)};
  border-style: dashed;
  background-color: #d9d9d9;
  color: #242526;
  outline: none;
  transition: border .24s ease-in-out;
  cursor: pointer;
  margin-bottom: 1rem;
  margin-top: 2rem;`;

  interface ChosenComponents {
    empty : any,
    segmentation : any,
    postIt : any,
    stripe : any,
    corner : any,
    annif : any,
    name : any,
    act : any,
    sos : any,
    yField : any,
    diar : any,
    date : any,
    lang : any,
    loc : any,
    gpe : any,
    product : any,
    event : any,
    norp : any,
    writingType : any
  }

const Uploader: React.FC = () => {

  // Translation const
  const { t } = useTranslation();

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // Uploaded and rejected files
  const [uploadedFiles, setUploadedFiles] = useState<any>([]);
  const [rejectedFiles, setRejectedFiles] = useState<any>([]);

  // Dropzone callback
  const onDrop = useCallback((acceptedFiles: any, fileRejections : any) => {
    setHideError(true);
    setHideSuccess(true);
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onabort = () => {
        console.log('file reading was aborted');
      };
      reader.onerror = () => {
        console.log('file reading has failed');
      };
      reader.onloadstart = () => {
        
      };
      reader.onprogress = () => {
        
      };
      reader.onloadend = () => {
        
      };

      reader.onload = readSuccess;
      function readSuccess(e: any) {
        let base64 = e.target.result;
          setUploadedFiles((prevState: any) => [
              ...prevState,
              {
                id: cuid(),
                src: e.target.result,
                file,
                filetype: file.type,
                pdfString : (base64.substr(base64.indexOf(',') + 1))
              },
          ]);
      }
        
      reader.readAsDataURL(file);
    });

    fileRejections.forEach((file: any) => {
      setRejectedFiles((prevState: any) => [
          ...prevState,
          {
            id: cuid(),
            file: file.file,
            filetype: file.file.type,
          },
      ]);
    });

  }, []);

  // Setting up react-dropzone (also restricting accepted files)
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: {
      'image/*' : ['.jpeg', '.jpg', '.png', '.tif', '.tiff'],
      'application/pdf' : ['.pdf'],
      'text/*' : ['.txt', '.xml']
    }
  });

  // Delete files from uploaded files
  function deleteFromUploadedFiles(id: any) {
    const array = [...uploadedFiles];

    const index = array.findIndex((i) => i.id === id);
    if (index !== -1) {
      array.splice(index, 1);
      if(counter > 0){
        setCounter(counter => counter - 1);
      }
      if(array.length === 0){
        setUploadedFiles([]);
        setRejectedFiles([]);
        setHideError(true);
        setHideSuccess(true);
        setReceivedFlaw([]);
        setReceivedInfo([]);
        setCounter(0);
      }
    }

    setUploadedFiles(array);

  }

  // Delete all files from uploaded files
  function deleteAllFiles() {
    setUploadedFiles([]);
    setRejectedFiles([]);
    setHideError(true);
    setHideSuccess(true);
    setReceivedFlaw([]);
    setReceivedInfo([]);
    setCounter(0);
  }

  const [receivedInfo, setReceivedInfo] = useState<any>([]);
  const [receivedFlaw, setReceivedFlaw] = useState<any>([]);
  const [counter, setCounter] = useState<number>(0);
  const [hideSpinner, setHideSpinner] = useState<boolean>(true);
  const [hideError, setHideError] = useState<boolean>(true);
  const [errorText, setErrorText] = useState<string>('');
  const [hideSuccess, setHideSuccess] = useState<boolean>(true);
  const [successText, setSuccessText] = useState<string>('');
  const [chosenComponents, setChosenComponents] = useState<ChosenComponents>({
    empty : "false",
    segmentation : "false",
    postIt : "false",
    stripe : "false",
    corner : "false",
    annif : "false",
    name : "false",
    act : "false",
    sos : "false",
    yField : "false",
    diar : "false",
    date : "false",
    lang : "false",
    loc : "false",
    gpe : "false",
    product : "false",
    event : "false",
    norp : "false",
    writingType : "false"
  });
  const [csvData, setCsvData] = useState<any>([]);
  const [csvDataFlaw, setCsvDataFlaw] = useState<any>([]);

  // Sending files to backend
  async function upload() {

    setReceivedInfo([]);
    setReceivedFlaw([]);
    setCounter(0);
    setHideError(true);
    setHideSuccess(true);

    setChosenComponents({
      empty : localStorage.getItem("empty"),
      segmentation : localStorage.getItem("segmentation"),
      postIt : localStorage.getItem("postIt"),
      stripe : localStorage.getItem("stripe"),
      corner : localStorage.getItem("corner"),
      annif : localStorage.getItem("annif"),
      name : localStorage.getItem("name"),
      act : localStorage.getItem("act"),
      sos : localStorage.getItem("sos"),
      yField : localStorage.getItem("yField"),
      diar : localStorage.getItem("diar"),
      date : localStorage.getItem("date"),
      lang : localStorage.getItem("lang"),
      loc : localStorage.getItem("loc"),
      gpe : localStorage.getItem("gpe"),
      product : localStorage.getItem("product"),
      event : localStorage.getItem("event"),
      norp : localStorage.getItem("norp"),
      writingType : localStorage.getItem("writingType")
    });

    let empty : any = localStorage.getItem("empty");
    let segmentation : any = localStorage.getItem("segmentation");
    let postIt : any = localStorage.getItem("postIt");
    let stripe : any = localStorage.getItem("stripe");
    let corner : any = localStorage.getItem("corner");
    let annif : any = localStorage.getItem("annif");
    let name : any = localStorage.getItem("name");
    let act : any = localStorage.getItem("act");
    let sos : any = localStorage.getItem("sos");
    let yField : any = localStorage.getItem("yField");
    let diar : any = localStorage.getItem("diar");
    let date : any = localStorage.getItem("date");
    let lang : any = localStorage.getItem("lang");
    let loc : any = localStorage.getItem("loc");
    let gpe : any = localStorage.getItem("gpe");
    let product : any = localStorage.getItem("product");
    let event : any = localStorage.getItem("event");
    let norp : any = localStorage.getItem("norp");
    let writingType : any = localStorage.getItem("writingType");

    annif = annif === "true" ? 1 : 0;
    name = name === "true" ? 1 : 0;
    act = act === "true" ? 1 : 0;
    sos = sos === "true" ? 1 : 0;
    yField = yField === "true" ? 1 : 0;
    diar = diar === "true" ? 1 : 0;
    date = date === "true" ? 1 : 0;
    lang = lang === "true" ? 1 : 0;
    loc = loc === "true" ? 1 : 0;
    gpe = gpe === "true" ? 1 : 0;
    product = product === "true" ? 1 : 0;
    event = event === "true" ? 1 : 0;
    norp = norp === "true" ? 1 : 0;
    empty = empty === "true" ? 1 : 0;
    postIt = postIt === "true" ? 1 : 0;
    corner = corner === "true" ? 1 : 0;
    writingType = writingType === "true" ? 1 : 0;

    if(annif === 0 && name === 0 && act === 0 && sos === 0 && yField === 0 && diar === 0 && date === 0 && lang === 0 && loc === 0 && gpe === 0 && product === 0 && event === 0 && norp === 0 && empty === 0 && postIt === 0 && corner === 0 && writingType === 0){
      setHideError(false);
      setErrorText(`${t('Uploader.noChosenComponents')}`);
    } else {

      setHideSpinner(false);

      const formData = new FormData();
      const formData2 = new FormData();
      setRejectedFiles([]);
      setCsvData([]);
      setCsvDataFlaw([]);

      for (let x = 0; x < uploadedFiles.length; x++) {
        formData.append(`file`, uploadedFiles[x].file);
        formData2.append(`image`, uploadedFiles[x].file);

        if(annif === 1 || name === 1 || act === 1 || sos === 1 || yField === 1 || diar === 1 || date === 1 || lang === 1 || loc === 1 || gpe === 1 || product === 1 || event === 1 || norp === 1){
          try {
            
            const res = await fetch(`http://${/*Your address*/}?annif=${annif}&name=${name}&act=${act}&sos=${sos}&y_field=${yField}&diar=${diar}&date=${date}&lang=${lang}&loc=${loc}&gpe=${gpe}&product=${product}&event=${event}&norp=${norp}&id=${uploadedFiles[x].id}`, {
              method: 'POST',
              body: formData
            });

            const response = await res.text();
            let resp = JSON.parse(response);

            /* CSV */
            let metadataForCsv = 
              {
                Tiedosto : resp.data[0][0],
                Asiasanat : resp.data[0][3],
                Toimijat : resp.data[0][1],
                Nimet : resp.data[0][2],
                Kieli : resp.data[0][4],
                Paivamaara : resp.data[0][5],
                YTunnus : resp.data[0][6],
                Diaari : resp.data[0][7],
                Paikat : resp.data[0][9],
                GeopoliittisetPaikat : resp.data[0][10],
                Tuotteet : resp.data[0][11],
                Tapahtumat : resp.data[0][12],
                KansallisuusUskonnollisetPoliittiset : resp.data[0][13],
              }
            
            setCsvData((prevState: any) => [
              ...prevState,
              metadataForCsv
            ]);

            /* CSV ends */
            

            setReceivedInfo((prevState: any) => [
              ...prevState,
              resp
            ]);
            
          } catch (error) {
            setHideError(false);
            setErrorText(`${t('Uploader.metadataError')}`);
            console.log(error);
          }
        } else {
          console.log("Metadata ei valittuna");
        }

        if(empty === 1 || postIt === 1 || corner === 1 || writingType === 1){
          try{
            const res = await fetch(`http://${/*Your address*/}/detect?postit=${postIt}&corner=${corner}&empty=${empty}&writing_type=${writingType}&id=${uploadedFiles[x].id}`, {
              method: 'POST',
              body: formData2
            });

            const response = await res.text();
            let resp = JSON.parse(response);

            /** CSV **/

            resp.forEach((element: any) => {

              let flawForCsv = 
              {
                Tiedosto : element.tiedosto,
                TyhjaSivu : element.tyhja_sivu,
                PostIt: element.post_it,
                TaittunutKulma : element.taittunut_kulma,
                Kirjoitustyyppi : element.kirjoitustyyppi            
              }

              setCsvDataFlaw((prevState: any) => [
                ...prevState,
                flawForCsv
              ]);
            });
            
            /** CSV ENDS **/

            setReceivedFlaw((prevState: any) => [
              ...prevState,
              resp
            ]);

            
          } catch (error){
            setHideError(false);
            setErrorText(`${t('Uploader.flawError')}`);
            console.log(error);
          }
        } else {
          console.log("Virheet ei valittuna");
        }

        setCounter(counter => counter + 1);

        if(x >= uploadedFiles.length - 1){
          setHideSpinner(true);
          setHideSuccess(false);
          setSuccessText(`${t('Uploader.success')}`);
        }

        formData2.delete('image');
        formData.delete('file');
      }
    }
  }

  return (

      <>
          <section className="container">
              <Container {...getRootProps({
                isDragActive,
                isDragAccept,
                isDragReject,
              })}>
                <input {...getInputProps()} />
                <FontAwesomeIcon icon="upload" />
                <span className='mt-2'>{t('Uploader.dragFiles')}</span>
                <span>(jpeg, jpg, png, tif, tiff, pdf, txt, xml)</span>
              </Container>

              <div hidden={rejectedFiles.length > 0}>
                <div hidden={uploadedFiles.length > 0}>
                  {t('Uploader.notYetFiles')}...
                </div>
              </div>

              <div hidden={rejectedFiles.length == 0}>
                <h4 onClick={handleShow} style={{cursor: "pointer"}}>{t('Uploader.rejectedFiles')}: <FontAwesomeIcon icon="triangle-exclamation" color="#B22222"/></h4>
                <RejectedFiles files={rejectedFiles}/>
              </div>

              <div hidden={uploadedFiles.length == 0}>
                <h4>{t('Uploader.acceptedFiles')}:</h4>
                {t('Uploader.filesProcessed')} {counter}/{uploadedFiles.length} &emsp;
                <Spinner animation="border" variant='primary' role="status" size="sm" hidden={hideSpinner ? true : false}>
                  <span className="visually-hidden">{t('Uploader.loading')}...</span>
                </Spinner>
                <Alert variant="danger" hidden={hideError ? true : false}>
                  {errorText}
                </Alert>
                <Alert variant="success" hidden={hideSuccess ? true : false}>
                  {successText}
                </Alert>
                

                <Navbar expand="lg" >
                  <div hidden={uploadedFiles.length == 0}>
                      <Button type="button" onClick={() => {upload();}} >{t('Uploader.processFiles')}</Button>
                  </div>

                  <Button type="button" style={{marginLeft: "1rem"}} onClick={() => {deleteAllFiles();}}>{t('Uploader.deleteAllFiles')}</Button>
                </Navbar>
                <Navbar expand="lg">
                  <div hidden={receivedInfo.length <= 0}>
                      <CsvDownloadButton 
                        style={{
                          borderRadius: "6px",
                          fontSize: "16px",
                          padding: "6px 12px",
                          marginBottom: "0",
                          display: "inline-block",
                          textDecoration: "none",
                          textAlign: "center",
                          whiteSpace: "nowrap",
                          verticalAlign: "middle",
                          touchAction: "manipulation",
                          cursor: "pointer",
                          userSelect: "none",
                          backgroundImage: "none",
                          border: "1px solid transparent",
                          color: "#fff",
                          backgroundColor: "#224C8E",
                          borderColor: "#224C8E"
                        }} 
                        data={csvData} 
                        filename="arkkiiviMetatiedot.csv"
                        delimiter=","
                        >
                          {t('Uploader.downloadCSV')}
                      </CsvDownloadButton>
                    </div>
                    <div hidden={receivedFlaw.length <= 0}>
                      <CsvDownloadButton 
                          style={{
                            borderRadius: "6px",
                            fontSize: "16px",
                            padding: "6px 12px",
                            marginBottom: "0",
                            display: "inline-block",
                            textDecoration: "none",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                            verticalAlign: "middle",
                            touchAction: "manipulation",
                            cursor: "pointer",
                            userSelect: "none",
                            backgroundImage: "none",
                            border: "1px solid transparent",
                            color: "#fff",
                            backgroundColor: "#224C8E",
                            borderColor: "#224C8E",
                            marginLeft: "1rem"
                          }} 
                          data={csvDataFlaw} 
                          filename="arkkiiviVirheet.csv"
                          delimiter=","
                          >
                            {t('Uploader.downloadCSVFlaw')}
                        </CsvDownloadButton>
                      </div>
                  
                </Navbar>

                <AcceptedFiles files={uploadedFiles} deleteFromUploadedFiles={deleteFromUploadedFiles} info={receivedInfo} chosenComponents={chosenComponents} flawInfo={receivedFlaw}/>
              </div>

              <RejectedFilesInfo show={show} handleClose={handleClose}/>

          </section>

      </>
  );
};

export default Uploader;
