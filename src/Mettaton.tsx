import React from 'react';
import { Accordion, Button, Card, Row, Col } from 'react-bootstrap';

import 'Mettaton.css';

const Mettaton = () => {
    return (
        <div style={{ minHeight: '1000px' }}>
            <Row>
                <Col xs={0} lg={1} xl={1} />
                <Col xs={12} sm={12} lg={10} xl={10}>

                    <Accordion defaultActiveKey='0'>
                        
                    </Accordion>
                    <div style={{ padding: '30pt' }} />
                </Col>
                <Col xs={0} lg={1} xl={1} />
            </Row>
        </div>
    );
};

export default Mettaton;