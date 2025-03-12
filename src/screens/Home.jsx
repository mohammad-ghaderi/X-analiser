import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ChartTreemap from '../components/charts/ChartTreemap'
import ChartPie from '../components/charts/ChartPie'

const Home = () => {
  return (
    <div>
        <Row className='gx-3'>
            
            <Col md={6} >

            </Col>
            
            <Col md={6} >
                <ChartPie />
            </Col>
        </Row>

        <Row className='gx-3'>
            
            <Col md={6} >
                
                <ChartTreemap />
            </Col>
            
            <Col md={6} >
            </Col>
        </Row>
    </div>
  )
}

export default Home