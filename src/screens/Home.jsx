import React, { useContext } from 'react'
import { Button, ButtonGroup, Card, Col, Row } from 'react-bootstrap'
import ChartTreemap from '../components/charts/ChartTreemap'
import ChartPie from '../components/charts/ChartPie'
import { CATEGORY, CATEGORY_COLOR, CATEGORY_ICON } from '../designs/types';
import '../styles/homeScreen.css';
import { TablesContext } from '../contexts/TablesContext';
import { useNavigate } from 'react-router-dom';

const Home = ({ setMenuIdx }) => {

    const { setTables, setCategoryIdx, setTargetIdx } = useContext(TablesContext);

    const navigate = useNavigate();

    const categoryHandler = (idx) => {
        setTables({});
        setCategoryIdx(idx);
        setTargetIdx(0);
        setMenuIdx(1);
        navigate('/analysis');
    }

    return (
        <div>
            <Row className='gx-0 p-1 p-md-2 p-lg-3 p-xxl-4' style={{ backgroundColor: '#8884d840' }}>

                <Col md={6} className='ps-1 ps-md-2 ps-lg-4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi sunt possimus dicta fuga nesciunt, minima vero impedit repudiandae maxime molestiae?</h3>
                    <ButtonGroup className='w-50'>
                        <Button className='me-2'
                            style={{ backgroundColor: '#615daf' }}
                            onClick={() => categoryHandler(0)}
                        >
                            New
                        </Button>
                        <Button style={{ backgroundColor: '#615daf' }}>Last</Button>
                    </ButtonGroup>
                </Col>

                <Col md={6} >
                    <ChartPie />
                </Col>
            </Row>

            <Row className='gx-0 p-1 p-md-2 p-lg-3 p-xxl-4  my-5'>

                <Col md={6}>
                    <ChartTreemap />
                </Col>

                <Col md={6} className='ps-1 ps-md-2 ps-lg-4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 className='text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, assumenda!
                    </h3>

                </Col>
            </Row>

            <Row className='gx-0 p-1 p-5 categ' style={{ backgroundColor: '#8884d840' }}>
                {CATEGORY.map((cat, idx) => (
                    <Col md={3} key={idx} className='px-3'>
                        <Card className='py-3 box border-0' onClick={() => categoryHandler(idx)}>
                            <Card.Title className='text-center p-1'>{cat}</Card.Title>

                            <Card.Body className='d-flex justify-content-center display-4' >
                                <i className={`fas ${CATEGORY_ICON[idx]}`} style={{ color: `#${CATEGORY_COLOR[idx]}` }}></i>
                                {/* <i className={`fas ${CATEGORY_ICON[idx]} text-${CATEGORY_COLOR[idx]}`}></i> */}
                                {/* <i className={`fas ${CATEGORY_ICON[idx]} text-primary`}></i> */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Home