import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cuid from 'cuid';
import React, { useCallback, useEffect, useState } from 'react';
import { Modal, Button, Form, Table, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

interface ModalSettings {
    show : boolean,
    handleClose : () => void;
}

const SaveSettingsModal = ({show, handleClose} : ModalSettings) => {

    // Translation const
    const { t } = useTranslation();

    //Is component disabled before starting
    // Check .env file 
    const disabled_empty = process.env.REACT_APP_EMPTY_DISABLED;
    const dis_bool_empty = disabled_empty === 'true';
    // const disabled_flaw = process.env.REACT_APP_FLAW_DISABLED;
    // const dis_bool_flaw = disabled_flaw === 'true';
    const disabled_stripe = process.env.REACT_APP_STRIPE_DISABLED;
    const dis_bool_stripe = disabled_stripe === 'true';
    const disabled_postit = process.env.REACT_APP_POSTIT_DISABLED;
    const dis_bool_postit = disabled_postit === 'true';
    const disabled_corner = process.env.REACT_APP_CORNER_DISABLED;
    const dis_bool_corner = disabled_corner === 'true';
    // const disabled_metadata = process.env.REACT_APP_METADATA_DISABLED;
    // const dis_bool_metadata = disabled_metadata === 'true';
    const disabled_annif = process.env.REACT_APP_ANNIF_DISABLED;
    const dis_bool_annif = disabled_annif === 'true';
    const disabled_name = process.env.REACT_APP_NAME_DISABLED;
    const dis_bool_name = disabled_name === 'true';
    const disabled_act = process.env.REACT_APP_ACT_DISABLED;
    const dis_bool_act = disabled_act === 'true';
    const disabled_sos = process.env.REACT_APP_SOS_DISABLED;
    const dis_bool_sos = disabled_sos === 'true';
    const disabled_yField = process.env.REACT_APP_YFIELD_DISABLED;
    const dis_bool_yField = disabled_yField === 'true';
    const disabled_diar = process.env.REACT_APP_DIAR_DISABLED;
    const dis_bool_diar = disabled_diar === 'true';
    const disabled_date = process.env.REACT_APP_DATE_DISABLED;
    const dis_bool_date = disabled_date === 'true';
    const disabled_lang = process.env.REACT_APP_LANG_DISABLED;
    const dis_bool_lang = disabled_lang === 'true';
    const disabled_loc = process.env.REACT_APP_LOC_DISABLED;
    const dis_bool_loc = disabled_loc === 'true';
    const disabled_gpe = process.env.REACT_APP_GPE_DISABLED;
    const dis_bool_gpe = disabled_gpe === 'true';
    const disabled_product = process.env.REACT_APP_PRODUCT_DISABLED;
    const dis_bool_product = disabled_product === 'true';
    const disabled_event = process.env.REACT_APP_EVENT_DISABLED;
    const dis_bool_event = disabled_event === 'true';
    const disabled_norp = process.env.REACT_APP_NORP_DISABLED;
    const dis_bool_norp = disabled_norp === 'true';
    const disabled_segmentation = process.env.REACT_APP_SEGMENTATION_DISABLED;
    const dis_bool_segmentation = disabled_segmentation === 'true';
    const disabled_writingType = process.env.REACT_APP_WRITING_TYPE_DISABLED;
    const dis_bool_writingType = disabled_writingType === 'true';

    const empty : any = localStorage.getItem("empty");
    const segmentation : any = localStorage.getItem("segmentation");
    const postIt : any = localStorage.getItem("postIt");
    const stripe : any = localStorage.getItem("stripe");
    const corner : any = localStorage.getItem("corner");
    const annif : any = localStorage.getItem("annif");
    const name : any = localStorage.getItem("name");
    const act : any = localStorage.getItem("act");
    const sos : any = localStorage.getItem("sos");
    const yField : any = localStorage.getItem("yField");
    const diar : any = localStorage.getItem("diar");
    const date : any = localStorage.getItem("date");
    const lang : any = localStorage.getItem("lang");
    const loc : any = localStorage.getItem("loc");
    const gpe : any = localStorage.getItem("gpe");
    const product : any = localStorage.getItem("product");
    const event : any = localStorage.getItem("event");
    const norp : any = localStorage.getItem("norp");
    const writingType : any = localStorage.getItem("writingType");

    const iconCheck : any = <FontAwesomeIcon icon="circle-check" color='green'/>;
    const iconXmark : any = <FontAwesomeIcon icon="circle-xmark" color='red'/>

    let emptyIcon : any;
    if (empty === 'true') {
        emptyIcon = iconCheck;
    } else {
        emptyIcon = iconXmark;
    }

    let segmentationIcon : any;
    if (segmentation === 'true') {
        segmentationIcon = iconCheck;
    } else {
        segmentationIcon = iconXmark;
    }

    let postItIcon : any;
    if (postIt === 'true') {
        postItIcon = iconCheck;
    } else {
        postItIcon = iconXmark;
    }

    let stripeIcon : any;
    if (stripe === 'true') {
        stripeIcon = iconCheck;
    } else {
        stripeIcon = iconXmark;
    }

    let cornerIcon : any;
    if (corner === 'true') {
        cornerIcon = iconCheck;
    } else {
        cornerIcon = iconXmark;
    }

    let annifIcon : any;
    if (annif === 'true') {
        annifIcon = iconCheck;
    } else {
        annifIcon = iconXmark;
    }

    let nameIcon : any;
    if (name === 'true') {
        nameIcon = iconCheck;
    } else {
        nameIcon = iconXmark;
    }

    let actIcon : any;
    if (act === 'true') {
        actIcon = iconCheck;
    } else {
        actIcon = iconXmark;
    }

    let sosIcon : any;
    if (sos === 'true') {
        sosIcon = iconCheck;
    } else {
        sosIcon = iconXmark;
    }

    let yFieldIcon : any;
    if (yField === 'true') {
        yFieldIcon = iconCheck;
    } else {
        yFieldIcon = iconXmark;
    }

    let diarIcon : any;
    if (diar === 'true') {
        diarIcon = iconCheck;
    } else {
        diarIcon = iconXmark;
    }

    let dateIcon : any;
    if (date === 'true') {
        dateIcon = iconCheck;
    } else {
        dateIcon = iconXmark;
    }

    let langIcon : any;
    if (lang === 'true') {
        langIcon = iconCheck;
    } else {
        langIcon = iconXmark;
    }

    let locIcon : any;
    if (loc === 'true') {
        locIcon = iconCheck;
    } else {
        locIcon = iconXmark;
    }

    let gpeIcon : any;
    if (gpe === 'true') {
        gpeIcon = iconCheck;
    } else {
        gpeIcon = iconXmark;
    }

    let productIcon : any;
    if (product === 'true') {
        productIcon = iconCheck;
    } else {
        productIcon = iconXmark;
    }

    let eventIcon : any;
    if (event === 'true') {
        eventIcon = iconCheck;
    } else {
        eventIcon = iconXmark;
    }

    let norpIcon : any;
    if (norp === 'true') {
        norpIcon = iconCheck;
    } else {
        norpIcon = iconXmark;
    }

    let writingTypeIcon : any;
    if (writingType === 'true') {
        writingTypeIcon = iconCheck;
    } else {
        writingTypeIcon = iconXmark;
    }

    const [processName, setProcessName] = useState<string>('');
    const handleProcessName = (event : any) => {
        setProcessName(event.target.value);
    };

    const [hideError, setHideError] = useState<boolean>(true);
    const [errorText, setErrorText] = useState<string>('');

    const saveChanges = useCallback(() => {

        if(processName.length <= 0){
            setHideError(false);
            setErrorText(`${t('SaveSettingsModal.giveName')}`);
        }else{

            setHideError(true);

            let processesInStorage : any = [];
            processesInStorage = localStorage.getItem("processes") || [];
            if(processesInStorage.length > 0){
                processesInStorage = JSON.parse(processesInStorage);
            }

            let currentProcess = {
                empty : empty,
                segmentation  : segmentation,
                postIt : postIt, 
                stripe : stripe, 
                corner : corner,
                annif : annif,
                name : name, 
                act : act, 
                sos : sos,
                yField : yField,
                diar : diar, 
                date : date,
                lang : lang,
                loc : loc,
                gpe : gpe,
                product : product,
                event : event,
                norp : norp,
                writingType : writingType,
                processName : processName,
                id : cuid(),
            }

            processesInStorage.push(currentProcess);
            
            localStorage.setItem('processes', JSON.stringify(processesInStorage));
            setProcessName("");
            handleClose();

            window.dispatchEvent(new Event("storage"));
        }
    }, [act, annif, corner, date, diar, empty, event, gpe, handleClose, lang, loc, name, norp, postIt, processName, product, segmentation, sos, stripe, t, writingType, yField]);

    return (
      <>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton closeVariant='white' className="modal-bg">
                <Modal.Title>{t('SaveSettingsModal.saveCurrentSettings')}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-bg">
                <h5>{t('SaveSettingsModal.chosenSettings')}:</h5>

                <Table variant="dark" >
                    <tbody>
                        <tr hidden={dis_bool_empty}>
                            <td>{t('SaveSettingsModal.emptyCheck')}</td>
                            <td>{emptyIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_stripe}>
                            <td>{t('SaveSettingsModal.stripe')}</td>
                            <td>{stripeIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_postit}>
                            <td>{t('SaveSettingsModal.postIt')}</td>
                            <td>{postItIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_corner}>
                            <td>{t('SaveSettingsModal.bentCorner')}</td>
                            <td>{cornerIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_annif}>
                            <td>{t('SaveSettingsModal.keyWords')}</td>
                            <td>{annifIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_name}>
                            <td>{t('SaveSettingsModal.names')}</td>
                            <td>{nameIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_act}>
                            <td>{t('SaveSettingsModal.actor')}</td>
                            <td>{actIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_sos}>
                            <td>{t('SaveSettingsModal.sosNumber')}</td>
                            <td>{sosIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_yField}>
                            <td>{t('SaveSettingsModal.yField')}</td>
                            <td>{yFieldIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_diar}>
                            <td>{t('SaveSettingsModal.diar')}</td>
                            <td>{diarIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_date}>
                            <td>{t('SaveSettingsModal.date')}</td>
                            <td>{dateIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_lang}>
                            <td>{t('SaveSettingsModal.language')}</td>
                            <td>{langIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_loc}>
                            <td>{t('SaveSettingsModal.loc')}</td>
                            <td>{locIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_gpe}>
                            <td>{t('SaveSettingsModal.gpe')}</td>
                            <td>{gpeIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_product}>
                            <td>{t('SaveSettingsModal.product')}</td>
                            <td>{productIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_event}>
                            <td>{t('SaveSettingsModal.event')}</td>
                            <td>{eventIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_norp}>
                            <td>{t('SaveSettingsModal.norp')}</td>
                            <td>{norpIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_writingType}>
                            <td>{t('SaveSettingsModal.writingType')}</td>
                            <td>{writingTypeIcon}</td>
                        </tr>
                        <tr hidden={dis_bool_segmentation}>
                            <td>{t('SaveSettingsModal.segmentation')}</td>
                            <td>{segmentationIcon}</td>
                        </tr>
                    </tbody>
                </Table>

                <br/>

                <Alert variant="danger" hidden={hideError ? true : false}>
                  {errorText}
                </Alert>

                <Form>
                    <Form.Label>{t('SaveSettingsModal.nameProcess')}:</Form.Label>
                    <Form.Control type="text" value={processName} onChange={handleProcessName}></Form.Control>
                </Form>
                
            </Modal.Body>
            <Modal.Footer className="modal-bg">
                <Button variant="secondary" onClick={handleClose}>
                    {t('SaveSettingsModal.close')}
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    {t('SaveSettingsModal.save')}
                </Button>
            </Modal.Footer>
        </Modal>
                    
      </>
    );
  };
  
 export default SaveSettingsModal;