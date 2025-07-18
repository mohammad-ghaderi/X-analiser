import React from 'react';
import SelectionLRS from './SelectionLRS';
import { TECHNICAL_ANALYSIS } from '../designs/Tables';
import { Col } from 'react-bootstrap';

import {TECHNICAL} from '../constants/analysis'
import ChartLRST from './charts/ChartLRS';


const TechnicalAnalisis = ({fr}) => {

  return (
    <>
      <Col xs={12}  md={12} lg={8} xl={6} className=' p-0 pe-lg-3'>
        <SelectionLRS template={TECHNICAL_ANALYSIS} type={TECHNICAL} fr={fr}/> 
      </Col>
      <Col xs={12}  md={12} lg={4} xl={6}>
        <ChartLRST />
      </Col>
    </>
  )
}

export default TechnicalAnalisis