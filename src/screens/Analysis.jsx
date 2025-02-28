import React, { useState, useEffect } from 'react'
import {
    Row,
    ButtonGroup,
    ToggleButton,
    Dropdown,
    Form,
    Col
} from 'react-bootstrap';

import '../styles/analysis.css';
import TechnicalAnalisis from '../components/TechnicalAnalisis';
import FundamentalAnalisis from '../components/FundamentalAnalisis';
import SentimentAnalisis from '../components/SentimentAnalisis';

const Analysis = () => {

    const [tabIdx, setTabIdx] = useState(0);
    const [categoryIdx, setCategoryIdx] = useState(0);
    const [targetIdx, setTargetIdx] = useState(0);

    const buttonTabs = ['Technical', 'Fundamental', 'Sentiment'];
    const categories = ['Forex', 'Stocks', 'Commodity', 'Crypto'];
    const target = {
        Forex: [
            'EUR/USD',
            'GBP/USD',
            'USD/JPY',
            'AUD/USD',
            'USD/CAD',
            'NZD/USD'
        ],
        Stocks: [
            'AAPL',
            'TSLA',
            'AMZN',
            'GOOGL',
            'MSFT',
            'NVDA'
        ],
        Commodity: [
            'Gold',
            'Silver',
            'Crude Oil',
            'Natural Gas',
            'Copper',
            'Platinum'
        ],
        Crypto: [
            'BTC/USD',
            'ETH/USD',
            'XRP/USD',
            'LTC/USD',
            'ADA/USD',
            'DOGE/USD'
        ],
    };

    const categoryHandler = (idx) => {
        setCategoryIdx(idx);
        setTargetIdx(0);
    }

    const targetHandler = (idx) => {
        setTargetIdx(idx);
    }   

    return (
        <div>
            <Row className='g-0'>
                <div className='top-analysis px-3'>
                    <ButtonGroup>
                        {buttonTabs.map((btn, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant='outline-primary'
                                name="radio"
                                value={btn}
                                checked={tabIdx === idx}
                                onChange={() => setTabIdx(idx)}
                            >
                                {btn}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>

                    <div className='top-left-button-wrapper'>
                        <ButtonGroup >
                            <Form.Select className="form-select analysis-top-select"
                                id="exampleSelect1"
                                style={{ borderRight: '1px solid #e1e1e1', borderRight: '1px solid #e1e1e1' }}
                                onChange={(e) => categoryHandler(e.target.selectedIndex)}
                            >
                                {categories.map((cat, idx) => (
                                    <option key={idx}>{cat}</option>
                                ))}
                            </Form.Select>
                            <Form.Select className="form-select analysis-top-select"
                                id="exampleSelect1"
                                onChange={(e) => targetHandler(e.target.selectedIndex)}
                            >
                                {target[categories[categoryIdx]].map((option, idx) => (
                                    <option key={idx}>{option}</option>
                                ))}
                            </Form.Select>
                        </ButtonGroup>


                        <ButtonGroup>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Export
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">export PDF</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">export excel</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ButtonGroup>

                    </div>


                </div>
            </Row>
            <Row className='g-0'>
                
                {tabIdx === 0 && <TechnicalAnalisis /> }
                {tabIdx === 1 && <FundamentalAnalisis type={categoryIdx}/> }
                {tabIdx === 2 && <SentimentAnalisis /> }

            </Row>
        </div>
    )
}

export default Analysis;