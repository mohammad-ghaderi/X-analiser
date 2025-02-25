import React from 'react';
import SelectionLRS from './SelectionLRS';
import { TECHNICAL_ANALYSIS } from '../designs/Tables';
import { Col } from 'react-bootstrap';


const TechnicalAnalisis = () => {
  return (
      <Col xs={12}  md={8} lg={8} xl={6} className='p-3'>
        <SelectionLRS template={TECHNICAL_ANALYSIS}/> 
      </Col>
  )
}

export default TechnicalAnalisis