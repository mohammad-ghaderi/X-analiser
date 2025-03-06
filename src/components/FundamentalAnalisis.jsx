import React from 'react'
import FundTable from './FundTable'
import { Col } from 'react-bootstrap'

const FundamentalAnalisis = ({type, fr}) => {
  return (
    <Col xs={12} lg={8} xl={6}  className='p-3'>

      <FundTable type={type} fr={fr}/>
    </Col>
  )
}

export default FundamentalAnalisis