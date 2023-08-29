import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useState } from 'react';
import { Modal, Button, Table, Form, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

interface ModalSettings {
    show : boolean,
    handleClose : () => void;
}

const ProcessControlModal = ({show, handleClose} : ModalSettings) => {

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

    // Delete saved process
    const deleteProcess = useCallback((id : any) : void => {

        const array = [...processesInStorage];

        const index = array.findIndex((i) => i.id === id);
        if (index !== -1) {
            array.splice(index, 1);
        }

        setProcessesInStorage(array);

        localStorage.setItem('processes', JSON.stringify(array));

        window.dispatchEvent(new Event("storage"));

    }, [processesInStorage]);

    // Edit saved process
    const [idEdit, setIdEdit] = useState<number>(-1);

    const changeId = useCallback((id : any) : void => {
        setIdEdit(id);
        let currentName = processesInStorage[id].processName;
        setProcessName(currentName);
    }, [processesInStorage]);

    const [processName, setProcessName] = useState<string>('');
    const handleProcessName = (event : any) => {
        setProcessName(event.target.value);
    };

    const saveChanges = useCallback((id : any) : void => {

        const array = [...processesInStorage];

        const index = array.findIndex((i) => i.id === id);
        if (index !== -1) {
            array[index].processName = processName;
        }

        setProcessesInStorage(array);

        localStorage.setItem('processes', JSON.stringify(array));

        window.dispatchEvent(new Event("storage"));
        setProcessName('');

    }, [processesInStorage, processName]);

    return (
      <>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton closeVariant='white' className="modal-bg">
                <Modal.Title>{t('ProcessControlModal.processControl')}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-bg">
                {t('ProcessControlModal.processes')}:
                <Table striped variant="dark">
                    <tbody>
                        <tr>
                            <td>{t('ProcessControlModal.left')}</td>
                            <td><FontAwesomeIcon icon="pen" style={{cursor: 'not-allowed'}}/></td>
                            <td><FontAwesomeIcon icon="trash" style={{cursor: 'not-allowed'}}/></td>
                        </tr>
                        <tr>
                            <td>{t('ProcessControlModal.right')}</td>
                            <td><FontAwesomeIcon icon="pen" style={{cursor: 'not-allowed'}}/></td>
                            <td><FontAwesomeIcon icon="trash" style={{cursor: 'not-allowed'}}/></td>
                        </tr>
                        {processesInStorage.map(function(item, i){
                            return <tr key={i}>
                                    {idEdit == i ? (
                                        <td>
                                            <Form>
                                                <InputGroup size="sm">
                                                    <Form.Control 
                                                        aria-label="Small" 
                                                        aria-describedby="inputGroup-sizing-sm" 
                                                        type="text" 
                                                        defaultValue={item.processName}
                                                        onChange={handleProcessName}
                                                        >
                                                    </Form.Control>
                                                    <Button onClick={() => {setIdEdit(-1); saveChanges(item.id)}}>{t('ProcessControlModal.save')}</Button>
                                                </InputGroup>
                                            </Form>
                                        </td>
                                    ) : (
                                        <td>{item.processName}</td>
                                    )}
                                    
                                    <td>
                                        <FontAwesomeIcon icon="pen" style={{cursor: 'pointer'}} onClick={() => {changeId(i)}}/>
                                    </td>
                                    <td><FontAwesomeIcon icon="trash" style={{cursor: 'pointer'}} onClick={() => deleteProcess(item.id)}/></td>
                                    </tr>
                            
                        })}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer className="modal-bg">
                <Button variant="primary" onClick={handleClose}>
                    {t('ProcessControlModal.close')}
                </Button>
            </Modal.Footer>
        </Modal>
                    
      </>
    );
  };
  
 export default ProcessControlModal;