import React from 'react';
import { Card, Container, Row, Col, Accordion} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/main.css'

const File = ({
    file
}: any) => {

    return (
        <>
            <Card className="my-1">
                <Card.Header>
                    <Container className='center'>
                        <Row>
                            <Col xs={1}>      
                                <FontAwesomeIcon style={{fontSize: "26px"}} icon="file"/>
                            </Col>
                            <Col xs={11}>      
                                {file.file.name}
                            </Col>
                        </Row>
                    </Container>
                </Card.Header>
            </Card>
            
        </>
    );

}

const RejectedFiles = ({
    files
} : any) => {
    // render each file by calling File component
    const renderFile = (file: any) => {
        return (
          <File
            file={file}
            key={file.id}
          />
        );
    };

    // Return list of files
    return <>
        <Accordion alwaysOpen>{files.map(renderFile)}</Accordion>
    </>;
  };
  
  export default RejectedFiles;