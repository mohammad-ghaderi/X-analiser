import React from 'react';
import {Col} from 'react-bootstrap';
import SelectionLRS from './SelectionLRS';

import { SENTIMENT_ANALYSIS} from '../designs/Tables';

const SentimentAnalisis = ({fr}) => {
  return (
    <Col xs={6} className='p-3'>
        <SelectionLRS template={SENTIMENT_ANALYSIS} fr={fr}/> 
      </Col>
  )
}

export default SentimentAnalisis