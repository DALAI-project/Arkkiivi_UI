import React, { useCallback, useEffect, useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ChooseProcess = () => {

  // Translation const
  const { t } = useTranslation();

  const [processesInStorage, setProcessesInStorage] = useState<any[]>([]);

  useEffect(() => {
    const processes : any = localStorage.getItem("processes") || [];
    if(processes.length > 0){
      setProcessesInStorage(JSON.parse(processes));
    }

    const listenStorageChange = () => {
      const processes : any = localStorage.getItem("processes") || [];
      if(processes.length > 0){
        setProcessesInStorage(JSON.parse(processes));
      }
    };

    window.addEventListener("storage", listenStorageChange);
    return () => window.removeEventListener("storage", listenStorageChange);
    
  }, []);

  const chooseLeft = useCallback(() => {
    localStorage.setItem('metadata', 'false');
    localStorage.setItem('empty', 'true');
    localStorage.setItem('stripe', 'true');
    localStorage.setItem('postIt', 'true');
    localStorage.setItem('corner', 'true');
    localStorage.setItem('writingType', 'true');
    localStorage.setItem('annif', "false");
    localStorage.setItem('name', "false");
    localStorage.setItem('act', "false");
    localStorage.setItem('sos', "false");
    localStorage.setItem('yField', "false");
    localStorage.setItem('diar', "false");
    localStorage.setItem('date', "false");
    localStorage.setItem('lang', "false");
    localStorage.setItem('segmentation', 'false');
    localStorage.setItem('loc', "false");
    localStorage.setItem('gpe', "false");
    localStorage.setItem('product', "false");
    localStorage.setItem('event', "false");
    localStorage.setItem('norp', "false");
    window.dispatchEvent(new Event("storage"));
  }, []);

  const chooseRight = useCallback(() => {
    localStorage.setItem('flaw', 'false');
    localStorage.setItem('empty', 'false');
    localStorage.setItem('stripe', 'false');
    localStorage.setItem('postIt', 'false');
    localStorage.setItem('corner', 'false');
    localStorage.setItem('writingType', 'false');
    localStorage.setItem('annif', "true");
    localStorage.setItem('name', "true");
    localStorage.setItem('act', "true");
    localStorage.setItem('sos', "true");
    localStorage.setItem('yField', "true");
    localStorage.setItem('diar', "true");
    localStorage.setItem('date', "true");
    localStorage.setItem('lang', "true");
    localStorage.setItem('loc', "true");
    localStorage.setItem('gpe', "true");
    localStorage.setItem('product', "true");
    localStorage.setItem('event', "true");
    localStorage.setItem('norp', "true");
    localStorage.setItem('segmentation', 'false');
    window.dispatchEvent(new Event("storage"));
  }, []);

  const chooseCustom = useCallback((process: any) => {
    if(process.act === "false" && process.annif === "false" && process.date === "false" && process.diar === "false" && process.lang === "false" && process.name === "false" && /*process.sos === "false" && */ process.yField === "false" && process.loc === "false" && process.gpe === "false" && process.product === "false" && process.event === "false" && process.norp === "false"){
      localStorage.setItem('metadata', 'false');
    }
    if(process.corner === "false" && process.empty === "false" && process.postIt === "false" /* && process.stripe === "false"*/){
      localStorage.setItem('flaw', 'false');
    }
    localStorage.setItem('act', process.act);
    localStorage.setItem('annif', process.annif);
    localStorage.setItem('corner', process.corner);
    localStorage.setItem('date', process.date);
    localStorage.setItem('diar', process.diar);
    localStorage.setItem('empty', process.empty);
    localStorage.setItem('lang', process.lang);
    localStorage.setItem('name', process.name);
    localStorage.setItem('postIt', process.postIt);
    localStorage.setItem('segmentation', process.segmentation);
    localStorage.setItem('sos', process.sos);
    localStorage.setItem('stripe', process.stripe);
    localStorage.setItem('writingType', process.writingType);
    localStorage.setItem('yField', process.yField);
    localStorage.setItem('loc', process.loc);
    localStorage.setItem('gpe', process.gpe);
    localStorage.setItem('product', process.product);
    localStorage.setItem('event', process.event);
    localStorage.setItem('norp', process.norp);
    window.dispatchEvent(new Event("storage"));
  }, []);

  return (
    <>

      <DropdownButton title={t('ChooseProcess.ready-madeProcess')} className='mt-2 dropdown-process'>
          <Dropdown.Item onClick={chooseLeft}>{t('ChooseProcess.left')}</Dropdown.Item>
          <Dropdown.Item onClick={chooseRight}>{t('ChooseProcess.right')}</Dropdown.Item>
          {processesInStorage.map(function(item, i){
            return <Dropdown.Item key={i} onClick={() => chooseCustom(item)}>{item.processName}</Dropdown.Item>
          })}
      </DropdownButton>
      
    </>
  );
};
  
 export default ChooseProcess;