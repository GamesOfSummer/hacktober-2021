import React from 'react';
import { Accordion, Button, Card, Row, Col, Container } from 'react-bootstrap';
import MettatonOutputScreen from './MettatonOutputScreen';
import MettatonButton from './MettatonButton';

import './Mettaton.css';

const Mettaton = () => {
  return (
    <div className="mettatonFrame">
    <div className="mainMettaton">
    <MettatonOutputScreen/>
    <div className="button-row">
      <MettatonButton label={'Clear'}/>
      <MettatonButton label={'Delete'}/>
      <MettatonButton label={'.'}/>
      <MettatonButton label={'/'}/>
    </div>
    <div className="button-row">
      <MettatonButton label={'7'}/>
      <MettatonButton label={'8'}/>
      <MettatonButton label={'9'}/>
      <MettatonButton label={'*'}/>
    </div>
    <div className="button-row">
      <MettatonButton label={'4'}/>
      <MettatonButton label={'5'}/>
      <MettatonButton label={'6'}/>
      <MettatonButton label={'-'}/>
    </div>
    <div className="button-row">
      <MettatonButton label={'1'}/>
      <MettatonButton label={'2'}/>
      <MettatonButton label={'3'}/>
      <MettatonButton label={'+'}/>
    </div>
    <div className="button-row">
      <MettatonButton label={'0'}/>
      <MettatonButton label={'='}/>
    </div>
    </div>
    </div>
  )
}

export default Mettaton;
