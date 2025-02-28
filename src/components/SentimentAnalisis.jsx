import React from 'react';
import {Col} from 'react-bootstrap';
import SelectionLRS from './SelectionLRS';

import { SENTIMENT_ANALYSIS} from '../designs/Tables';

const SentimentAnalisis = () => {
  return (
    <Col xs={6} className='p-3'>
        <SelectionLRS template={SENTIMENT_ANALYSIS}/> 
      </Col>
  )
}

export default SentimentAnalisis