import React, { useCallback, useEffect, useState } from 'react';
import { Accordion, Form, Container, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const MetadataCheck : React.FC = () => {

    // Translation const
    const { t } = useTranslation();

    // Is component disabled before starting
    // Check .env file 
    const disabled_metadata = process.env.REACT_APP_METADATA_DISABLED;
    const dis_bool_metadata = disabled_metadata === 'true';

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

    // This is for ChooseProcess
    // Checking if the localStorage values have changed and switching switches accordingly
    useEffect(() => {
        const listenStorageChange = () => {
            if(localStorage.getItem("annif") === 'true'){
                setMetadata("true");
                setAnnif("true");
                localStorage.setItem('metadata', "true");
            } else {
                setAnnif("false");
                localStorage.setItem('annif', 'false');
            }

            if(localStorage.getItem("name") === 'true'){
                setMetadata("true");
                setName("true");
                localStorage.setItem('metadata', "true");
            } else {
                setName("false");
                localStorage.setItem('name', 'false');
            }

            if(localStorage.getItem("act") === 'true'){
                setMetadata("true");
                setAct("true");
                localStorage.setItem('metadata', "true");
            } else {
                setAct("false");
                localStorage.setItem('act', 'false');
            }

            if(localStorage.getItem("sos") === 'true'){
                setMetadata("true");
                setSos("true");
                localStorage.setItem('metadata', "true");
            } else {
                setSos("false");
                localStorage.setItem('sos', 'false');
            }

            if(localStorage.getItem("yField") === 'true'){
                setMetadata("true");
                setYField("true");
                localStorage.setItem('metadata', "true");
            } else {
                setYField("false");
                localStorage.setItem('yField', 'false');
            }

            if(localStorage.getItem("diar") === 'true'){
                setMetadata("true");
                setDiar("true");
                localStorage.setItem('metadata', "true");
            } else {
                setDiar("false");
                localStorage.setItem('diar', 'false');
            }

            if(localStorage.getItem("date") === 'true'){
                setMetadata("true");
                setDate("true");
                localStorage.setItem('metadata', "true");
            } else {
                setDate("false");
                localStorage.setItem('date', 'false');
            }
            
            if(localStorage.getItem("lang") === 'true'){
                setMetadata("true");
                setLang("true");
                localStorage.setItem('metadata', "true");
            } else {
                setLang("false");
                localStorage.setItem('lang', 'false');
            }

            if(localStorage.getItem("loc") === 'true'){
                setMetadata("true");
                setLoc("true");
                localStorage.setItem('metadata', "true");
            } else {
                setLoc("false");
                localStorage.setItem('loc', 'false');
            }

            if(localStorage.getItem("gpe") === 'true'){
                setMetadata("true");
                setGpe("true");
                localStorage.setItem('metadata', "true");
            } else {
                setGpe("false");
                localStorage.setItem('gpe', 'false');
            }

            if(localStorage.getItem("product") === 'true'){
                setMetadata("true");
                setProduct("true");
                localStorage.setItem('metadata', "true");
            } else {
                setProduct("false");
                localStorage.setItem('product', 'false');
            }

            if(localStorage.getItem("event") === 'true'){
                setMetadata("true");
                setEvent("true");
                localStorage.setItem('metadata', "true");
            } else {
                setEvent("false");
                localStorage.setItem('event', 'false');
            }

            if(localStorage.getItem("norp") === 'true'){
                setMetadata("true");
                setNorp("true");
                localStorage.setItem('metadata', "true");
            } else {
                setNorp("false");
                localStorage.setItem('norp', 'false');
            }
            
            if (localStorage.getItem("annif") !== 'true' && localStorage.getItem("name") !== 'true' && localStorage.getItem("act") !== 'true' && /*localStorage.getItem("sos") !== 'true' &&*/ localStorage.getItem("yField") !== 'true' && localStorage.getItem("diar") !== 'true' && localStorage.getItem("date") !== 'true' && localStorage.getItem("lang") !== 'true' && localStorage.getItem("loc") !== 'true' && localStorage.getItem("gpe") !== 'true' && localStorage.getItem("product") !== 'true' && localStorage.getItem("event") !== 'true' && localStorage.getItem("norp") !== 'true') {
                setMetadata("false");
                setAnnif("false");
                setName("false");
                setAct("false");
                setSos("false");
                setYField("false");
                setDiar("false");
                setDate("false");
                setLang("false");
                setLoc("false");
                setGpe("false");
                setProduct("false");
                setEvent("false");
                setNorp("false");
                localStorage.setItem('metadata', 'false');
                localStorage.setItem('annif', "false");
                localStorage.setItem('name', "false");
                localStorage.setItem('act', "false");
                localStorage.setItem('sos', "false");
                localStorage.setItem('yField', "false");
                localStorage.setItem('diar', "false");
                localStorage.setItem('date', "false");
                localStorage.setItem('lang', "false");
                localStorage.setItem('loc', "false");
                localStorage.setItem('gpe', "false");
                localStorage.setItem('product', "false");
                localStorage.setItem('event', "false");
                localStorage.setItem('norp', "false");

            }
        };
        window.addEventListener("storage", listenStorageChange);
        return () => window.removeEventListener("storage", listenStorageChange);
    }, []);

    // All metadata checks
    const storageMetadata: any = JSON.parse(localStorage.getItem('metadata') || "false");
    const [, setMetadata] = useState<any>(storageMetadata);

    const changeMetadata = useCallback((event : any) : void => {
        setMetadata(event.target.checked);
        setAnnif(event.target.checked);
        setName(event.target.checked);
        setAct(event.target.checked);
        setSos(event.target.checked);
        setYField(event.target.checked);
        setDiar(event.target.checked);
        setDate(event.target.checked);
        setLang(event.target.checked);
        setLoc(event.target.checked);
        setGpe(event.target.checked);
        setProduct(event.target.checked);
        setEvent(event.target.checked);
        setNorp(event.target.checked);
        localStorage.setItem('metadata', event.target.checked);
        localStorage.setItem('annif', event.target.checked);
        localStorage.setItem('name', event.target.checked);
        localStorage.setItem('act', event.target.checked);
        localStorage.setItem('sos', event.target.checked);
        localStorage.setItem('yField', event.target.checked);
        localStorage.setItem('diar', event.target.checked);
        localStorage.setItem('date', event.target.checked);
        localStorage.setItem('lang', event.target.checked);
        localStorage.setItem('loc', event.target.checked);
        localStorage.setItem('gpe', event.target.checked);
        localStorage.setItem('product', event.target.checked);
        localStorage.setItem('event', event.target.checked);
        localStorage.setItem('norp', event.target.checked);
    }, []);

    // Annif check
    const storageAnnif: any = JSON.parse(localStorage.getItem('annif') || 'false');
    const [, setAnnif] = useState<any>(storageAnnif);

    const changeAnnif = useCallback((event : any) : void => {
        setAnnif(event.target.checked);
        localStorage.setItem('annif', event.target.checked);
        if(event.target.checked === true){
            setMetadata("true");
            localStorage.setItem('metadata', event.target.checked);
        }
        if (localStorage.getItem("annif") !== 'true' && localStorage.getItem("name") !== 'true' && localStorage.getItem("act") !== 'true' && /*localStorage.getItem("sos") !== 'true' && */ localStorage.getItem("yField") !== 'true' && localStorage.getItem("diar") !== 'true' && localStorage.getItem("date") !== 'true' && localStorage.getItem("lang") !== 'true' && localStorage.getItem("loc") !== 'true' && localStorage.getItem("gpe") !== 'true' && localStorage.getItem("product") !== 'true' && localStorage.getItem("event") !== 'true' && localStorage.getItem("norp") !== 'true') {
            setMetadata("false");
            localStorage.setItem('metadata', 'false');
        }
    }, []);

    // Name check
    const storageName: any = JSON.parse(localStorage.getItem('name') || 'false');
    const [, setName] = useState<any>(storageName);

    const changeName = useCallback((event : any) : void => {
        setName(event.target.checked);
        localStorage.setItem('name', event.target.checked);
        if(event.target.checked === true){
            setMetadata("true");
            localStorage.setItem('metadata', event.target.checked);
        }
        if (localStorage.getItem("annif") !== 'true' && localStorage.getItem("name") !== 'true' && localStorage.getItem("act") !== 'true' && /*localStorage.getItem("sos") !== 'true' && */ localStorage.getItem("yField") !== 'true' && localStorage.getItem("diar") !== 'true' && localStorage.getItem("date") !== 'true' && localStorage.getItem("lang") !== 'true' && localStorage.getItem("loc") !== 'true' && localStorage.getItem("gpe") !== 'true' && localStorage.getItem("product") !== 'true' && localStorage.getItem("event") !== 'true' && localStorage.getItem("norp") !== 'true') {
            setMetadata("false");
            localStorage.setItem('metadata', 'false');
        }
    }, []);

    // Act check
    const storageAct: any = JSON.parse(localStorage.getItem('act') || 'false');
    const [, setAct] = useState<any>(storageAct);

    const changeAct = useCallback((event : any) : void => {
        setAct(event.target.checked);
        localStorage.setItem('act', event.target.checked);
        if(event.target.checked === true){
            setMetadata("true");
            localStorage.setItem('metadata', event.target.checked);
        }
        if (localStorage.getItem("annif") !== 'true' && localStorage.getItem("name") !== 'true' && localStorage.getItem("act") !== 'true' && /*localStorage.getItem("sos") !== 'true' &&*/ localStorage.getItem("yField") !== 'true' && localStorage.getItem("diar") !== 'true' && localStorage.getItem("date") !== 'true' && localStorage.getItem("lang") !== 'true' && localStorage.getItem("loc") !== 'true' && localStorage.getItem("gpe") !== 'true' && localStorage.getItem("product") !== 'true' && localStorage.getItem("event") !== 'true' && localStorage.getItem("norp") !== 'true') {
            setMetadata("false");
            localStorage.setItem('metadata', 'false');
        }
    }, []);

    // Sos check
    const storageSos: any = JSON.parse(localStorage.getItem('sos') || 'false');
    const [, setSos] = useState<any>(storageSos);

    const changeSos = useCallback((event : any) : void => {
        setSos(event.target.checked);
        localStorage.setItem('sos', event.target.checked);
        if(event.target.checked === true){
            setMetadata("true");
            localStorage.setItem('metadata', event.target.checked);
        }
        if (localStorage.getItem("annif") !== 'true' && localStorage.getItem("name") !== 'true' && localStorage.getItem("act") !== 'true' && /*localStorage.getItem("sos") !== 'true' &&*/ localStorage.getItem("yField") !== 'true' && localStorage.getItem("diar") !== 'true' && localStorage.getItem("date") !== 'true' && localStorage.getItem("lang") !== 'true' && localStorage.getItem("loc") !== 'true' && localStorage.getItem("gpe") !== 'true' && localStorage.getItem("product") !== 'true' && localStorage.getItem("event") !== 'true' && localStorage.getItem("norp") !== 'true') {
            setMetadata("false");
            localStorage.setItem('metadata', 'false');
        }
    }, []);

    // Y_field check
    const storageYField: any = JSON.parse(localStorage.getItem('yField') || 'false');
    const [, setYField] = useState<any>(storageYField);

    const changeYField = useCallback((event : any) : void => {
        setYField(event.target.checked);
        localStorage.setItem('yField', event.target.checked);
        if(event.target.checked === true){
            setMetadata("true");
            localStorage.setItem('metadata', event.target.checked);
        }
        if (localStorage.getItem("annif") !== 'true' && localStorage.getItem("name") !== 'true' && localStorage.getItem("act") !== 'true' && /*localStorage.getItem("sos") !== 'true' &&*/ localStorage.getItem("yField") !== 'true' && localStorage.getItem("diar") !== 'true' && localStorage.getItem("date") !== 'true' && localStorage.getItem("lang") !== 'true' && localStorage.getItem("loc") !== 'true' && localStorage.getItem("gpe") !== 'true' && localStorage.getItem("product") !== 'true' && localStorage.getItem("event") !== 'true' && localStorage.getItem("norp") !== 'true') {
            setMetadata("false");
            localStorage.setItem('metadata', 'false');
        }
    }, []);

    // Diar check
    const storageDiar: any = JSON.parse(localStorage.getItem('diar') || 'false');
    const [, setDiar] = useState<any>(storageDiar);

    const changeDiar = useCallback((event : any) : void => {
        setDiar(event.target.checked);
        localStorage.setItem('diar', event.target.checked);
        if(event.target.checked === true){
            setMetadata("true");
            localStorage.setItem('metadata', event.target.checked);
        }
        if (localStorage.getItem("annif") !== 'true' && localStorage.getItem("name") !== 'true' && localStorage.getItem("act") !== 'true' && /*localStorage.getItem("sos") !== 'true' &&*/ localStorage.getItem("yField") !== 'true' && localStorage.getItem("diar") !== 'true' && localStorage.getItem("date") !== 'true' && localStorage.getItem("lang") !== 'true' && localStorage.getItem("loc") !== 'true' && localStorage.getItem("gpe") !== 'true' && localStorage.getItem("product") !== 'true' && localStorage.getItem("event") !== 'true' && localStorage.getItem("norp") !== 'true') {
            setMetadata("false");
            localStorage.setItem('metadata', 'false');
        }
    }, []);

    // Date check
    const storageDate: any = JSON.parse(localStorage.getItem('date') || 'false');
    const [, setDate] = useState<any>(storageDate);

    const changeDate = useCallback((event : any) : void => {
        setDate(event.target.checked);
        localStorage.setItem('date', event.target.checked);
        if(event.target.checked === true){
            setMetadata("true");
            localStorage.setItem('metadata', event.target.checked);
        }
        if (localStorage.getItem("annif") !== 'true' && localStorage.getItem("name") !== 'true' && localStorage.getItem("act") !== 'true' && /*localStorage.getItem("sos") !== 'true' &&*/ localStorage.getItem("yField") !== 'true' && localStorage.getItem("diar") !== 'true' && localStorage.getItem("date") !== 'true' && localStorage.getItem("lang") !== 'true' && localStorage.getItem("loc") !== 'true' && localStorage.getItem("gpe") !== 'true' && localStorage.getItem("product") !== 'true' && localStorage.getItem("event") !== 'true' && localStorage.getItem("norp") !== 'true') {
            setMetadata("false");
            localStorage.setItem('metadata', 'false');
        }
    }, []);

    // Lang check
    const storageLang: any = JSON.parse(localStorage.getItem('lang') || 'false');
    const [, setLang] = useState<any>(storageLang);

    const changeLang = useCallback((event : any) : void => {
        setLang(event.target.checked);
        localStorage.setItem('lang', event.target.checked);
        if(event.target.checked === true){
            setMetadata("true");
            localStorage.setItem('metadata', event.target.checked);
        }
        if (localStorage.getItem("annif") !== 'true' && localStorage.getItem("name") !== 'true' && localStorage.getItem("act") !== 'true' && /*localStorage.getItem("sos") !== 'true' &&*/ localStorage.getItem("yField") !== 'true' && localStorage.getItem("diar") !== 'true' && localStorage.getItem("date") !== 'true' && localStorage.getItem("lang") !== 'true' && localStorage.getItem("loc") !== 'true' && localStorage.getItem("gpe") !== 'true' && localStorage.getItem("product") !== 'true' && localStorage.getItem("event") !== 'true' && localStorage.getItem("norp") !== 'true') {
            setMetadata("false");
            localStorage.setItem('metadata', 'false');
        }
    }, []);

    // Loc check
    const storageLoc: any = JSON.parse(localStorage.getItem('loc') || 'false');
    const [, setLoc] = useState<any>(storageLoc);

    const changeLoc = useCallback((event : any) : void => {
        setLoc(event.target.checked);
        localStorage.setItem('loc', event.target.checked);
        if(event.target.checked === true){
            setMetadata("true");
            localStorage.setItem('metadata', event.target.checked);
        }
        if (localStorage.getItem("annif") !== 'true' && localStorage.getItem("name") !== 'true' && localStorage.getItem("act") !== 'true' && /*localStorage.getItem("sos") !== 'true' &&*/ localStorage.getItem("yField") !== 'true' && localStorage.getItem("diar") !== 'true' && localStorage.getItem("date") !== 'true' && localStorage.getItem("lang") !== 'true' && localStorage.getItem("loc") !== 'true' && localStorage.getItem("gpe") !== 'true' && localStorage.getItem("product") !== 'true' && localStorage.getItem("event") !== 'true' && localStorage.getItem("norp") !== 'true') {
            setMetadata("false");
            localStorage.setItem('metadata', 'false');
        }
    }, []);

    // Gpe check
    const storageGpe: any = JSON.parse(localStorage.getItem('gpe') || 'false');
    const [, setGpe] = useState<any>(storageGpe);

    const changeGpe = useCallback((event : any) : void => {
        setGpe(event.target.checked);
        localStorage.setItem('gpe', event.target.checked);
        if(event.target.checked === true){
            setMetadata("true");
            localStorage.setItem('metadata', event.target.checked);
        }
        if (localStorage.getItem("annif") !== 'true' && localStorage.getItem("name") !== 'true' && localStorage.getItem("act") !== 'true' && /*localStorage.getItem("sos") !== 'true' &&*/ localStorage.getItem("yField") !== 'true' && localStorage.getItem("diar") !== 'true' && localStorage.getItem("date") !== 'true' && localStorage.getItem("lang") !== 'true' && localStorage.getItem("loc") !== 'true' && localStorage.getItem("gpe") !== 'true' && localStorage.getItem("product") !== 'true' && localStorage.getItem("event") !== 'true' && localStorage.getItem("norp") !== 'true') {
            setMetadata("false");
            localStorage.setItem('metadata', 'false');
        }
    }, []);

    // Product check
    const storageProduct: any = JSON.parse(localStorage.getItem('product') || 'false');
    const [, setProduct] = useState<any>(storageProduct);

    const changeProduct = useCallback((event : any) : void => {
        setLoc(event.target.checked);
        localStorage.setItem('product', event.target.checked);
        if(event.target.checked === true){
            setMetadata("true");
            localStorage.setItem('metadata', event.target.checked);
        }
        if (localStorage.getItem("annif") !== 'true' && localStorage.getItem("name") !== 'true' && localStorage.getItem("act") !== 'true' && /*localStorage.getItem("sos") !== 'true' &&*/ localStorage.getItem("yField") !== 'true' && localStorage.getItem("diar") !== 'true' && localStorage.getItem("date") !== 'true' && localStorage.getItem("lang") !== 'true' && localStorage.getItem("loc") !== 'true' && localStorage.getItem("gpe") !== 'true' && localStorage.getItem("product") !== 'true' && localStorage.getItem("event") !== 'true' && localStorage.getItem("norp") !== 'true') {
            setMetadata("false");
            localStorage.setItem('metadata', 'false');
        }
    }, []);

    // Event check
    const storageEvent: any = JSON.parse(localStorage.getItem('event') || 'false');
    const [, setEvent] = useState<any>(storageEvent);

    const changeEvent = useCallback((event : any) : void => {
        setEvent(event.target.checked);
        localStorage.setItem('event', event.target.checked);
        if(event.target.checked === true){
            setMetadata("true");
            localStorage.setItem('metadata', event.target.checked);
        }
        if (localStorage.getItem("annif") !== 'true' && localStorage.getItem("name") !== 'true' && localStorage.getItem("act") !== 'true' && /*localStorage.getItem("sos") !== 'true' &&*/ localStorage.getItem("yField") !== 'true' && localStorage.getItem("diar") !== 'true' && localStorage.getItem("date") !== 'true' && localStorage.getItem("lang") !== 'true' && localStorage.getItem("loc") !== 'true' && localStorage.getItem("gpe") !== 'true' && localStorage.getItem("product") !== 'true' && localStorage.getItem("event") !== 'true' && localStorage.getItem("norp") !== 'true') {
            setMetadata("false");
            localStorage.setItem('metadata', 'false');
        }
    }, []);

    // Norp check
    const storageNorp: any = JSON.parse(localStorage.getItem('norp') || 'false');
    const [, setNorp] = useState<any>(storageNorp);

    const changeNorp = useCallback((event : any) : void => {
        setNorp(event.target.checked);
        localStorage.setItem('norp', event.target.checked);
        if(event.target.checked === true){
            setMetadata("true");
            localStorage.setItem('metadata', event.target.checked);
        }
        if (localStorage.getItem("annif") !== 'true' && localStorage.getItem("name") !== 'true' && localStorage.getItem("act") !== 'true' && /*localStorage.getItem("sos") !== 'true' &&*/ localStorage.getItem("yField") !== 'true' && localStorage.getItem("diar") !== 'true' && localStorage.getItem("date") !== 'true' && localStorage.getItem("lang") !== 'true' && localStorage.getItem("loc") !== 'true' && localStorage.getItem("gpe") !== 'true' && localStorage.getItem("product") !== 'true' && localStorage.getItem("event") !== 'true' && localStorage.getItem("norp") !== 'true') {
            setMetadata("false");
            localStorage.setItem('metadata', 'false');
        }
    }, []);

    return (
      <>
    
        <Accordion.Item eventKey="2" hidden={dis_bool_metadata}>
            <Accordion.Header>
                <Container>
                    <Row>
                        <Col xs={9}>
                            {t('MetadataCheck.metadata')}
                        </Col>
                        <Col xs={3}>
                            <Form.Check type="switch" onChange={changeMetadata} checked={storageMetadata}/>
                        </Col>
                    </Row>
                </Container>
            </Accordion.Header>
            <Accordion.Body>
                <Container>
                    <Row hidden={dis_bool_annif}>
                        <Col xs={9}>
                            {t('MetadataCheck.keyWords')}
                        </Col>
                        <Col xs={3}>
                            <Form.Check type="switch" onChange={changeAnnif} checked={storageAnnif}/>
                        </Col>
                    </Row>
                    <Row hidden={dis_bool_lang}>
                        <Col xs={9}>
                            {t('MetadataCheck.language')}
                        </Col>
                        <Col xs={3}>
                            <Form.Check type="switch" onChange={changeLang} checked={storageLang}/>
                        </Col>
                    </Row>
                    <h6 className='mt-3'><b>{t('MetadataCheck.ner')}</b></h6>
                    <Row hidden={dis_bool_name}>
                        <Col xs={9}>
                            {t('MetadataCheck.name')}
                        </Col>
                        <Col xs={3}>
                            <Form.Check type="switch" onChange={changeName} checked={storageName}/>
                        </Col>
                    </Row>
                    <Row hidden={dis_bool_act}>
                        <Col xs={9}>
                            {t('MetadataCheck.act')}
                        </Col>
                        <Col xs={3}>
                            <Form.Check type="switch" onChange={changeAct} checked={storageAct}/>
                        </Col>
                    </Row>
                    <Row hidden={dis_bool_sos}>
                        <Col xs={9}>
                            {t('MetadataCheck.sosNumber')}
                        </Col>
                        <Col xs={3}>
                            <Form.Check type="switch" onChange={changeSos} checked={storageSos}/>
                        </Col>
                    </Row>
                    <Row hidden={dis_bool_yField}>
                        <Col xs={9}>
                            {t('MetadataCheck.yField')}
                        </Col>
                        <Col xs={3}>
                            <Form.Check type="switch" onChange={changeYField} checked={storageYField}/>
                        </Col>
                    </Row>
                    <Row hidden={dis_bool_diar}>
                        <Col xs={9}>
                            {t('MetadataCheck.diar')}
                        </Col>
                        <Col xs={3}>
                            <Form.Check type="switch" onChange={changeDiar} checked={storageDiar}/>
                        </Col>
                    </Row>
                    <Row hidden={dis_bool_date}>
                        <Col xs={9}>
                            {t('MetadataCheck.date')}
                        </Col>
                        <Col xs={3}>
                            <Form.Check type="switch" onChange={changeDate} checked={storageDate}/>
                        </Col>
                    </Row>
                    <Row hidden={dis_bool_loc}>
                        <Col xs={9}>
                            {t('MetadataCheck.loc')}
                        </Col>
                        <Col xs={3}>
                            <Form.Check type="switch" onChange={changeLoc} checked={storageLoc}/>
                        </Col>
                    </Row>
                    <Row hidden={dis_bool_gpe}>
                        <Col xs={9}>
                            {t('MetadataCheck.gpe')}
                        </Col>
                        <Col xs={3}>
                            <Form.Check type="switch" onChange={changeGpe} checked={storageGpe}/>
                        </Col>
                    </Row>
                    <Row hidden={dis_bool_product}>
                        <Col xs={9}>
                            {t('MetadataCheck.product')}
                        </Col>
                        <Col xs={3}>
                            <Form.Check type="switch" onChange={changeProduct} checked={storageProduct}/>
                        </Col>
                    </Row>
                    <Row hidden={dis_bool_event}>
                        <Col xs={9}>
                            {t('MetadataCheck.event')}
                        </Col>
                        <Col xs={3}>
                            <Form.Check type="switch" onChange={changeEvent} checked={storageEvent}/>
                        </Col>
                    </Row>
                    <Row hidden={dis_bool_norp}>
                        <Col xs={9}>
                            {t('MetadataCheck.norp')}
                        </Col>
                        <Col xs={3}>
                            <Form.Check type="switch" onChange={changeNorp} checked={storageNorp}/>
                        </Col>
                    </Row>
                </Container>
            </Accordion.Body>
        </Accordion.Item>
                    
      </>
    );
  };
  
 export default MetadataCheck;