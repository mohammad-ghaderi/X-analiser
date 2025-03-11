import React, { useState, useEffect, useContext } from 'react'
import {
    Row,
    Button,
    ButtonGroup,
    ToggleButton,
    Dropdown,
    Form,
} from 'react-bootstrap';
import axios from 'axios';

import TechnicalAnalisis from '../components/TechnicalAnalisis';
import FundamentalAnalisis from '../components/FundamentalAnalisis';
import SentimentAnalisis from '../components/SentimentAnalisis';
import { TablesContext } from '../contexts/TablesContext';
import '../styles/analysis.css';

const Analysis = () => {

    const [tabIdx, setTabIdx] = useState(0);
    const [categoryIdx, setCategoryIdx] = useState(0);
    const [targetIdx, setTargetIdx] = useState(0);
    const [fr, sfr] = useState(0);

    const buttonTabs = ['Technical', 'Fundamental', 'Sentiment'];
    const { tables, setTables } = useContext(TablesContext);
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

    const saveHandler = async () => {
        try {
            const {data} = await axios.post("http://localhost:3001/analysis", {
                data: tables,
                type: target[categories[categoryIdx]][targetIdx],
                category: categories[categoryIdx],
            });
        } catch (err) {
            console.log('Error while adding data to database.');
        }
    }

    const exportPdf = async (e) => {
        e.preventDefault();
        console.log('tables');
        console.log(tables);

        try {
            const result = await window.electron.generatePDF({data: tables, type: categories[categoryIdx]});
            // setFilePath(result.filePath);  // Display file path or use it for further logic
            console.log('result');
            console.log(result);

            
          } catch (error) {
            console.error(error);
        }

    }

    const exportExcel = async (e) => {
        e.preventDefault();

        try {
            const result = await window.electron.generateExcel({data: tables, type: categories[categoryIdx]});
            // setFilePath(result.filePath);  // Display file path or use it for further logic
            console.log('result');
            console.log(result);
            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (fr === 0) return;
        setTables({});
        console.log('clear');
    }, [categoryIdx, targetIdx]);

    useEffect(() => {
        sfr((prev) => prev + 1);
    }, [tables])

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
                        <Dropdown className='d-md-none'>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Export
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={(e) => exportPdf(e)}>export PDF</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => exportExcel(e)}>export excel</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ButtonGroup>

                    <div className='top-left-button-wrapper'>
                        <ButtonGroup >
                            <Form.Select className="form-select analysis-top-select"
                                id="exampleSelect1"
                                style={{ borderRight: '1px solid #e1e1e1'}}
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
                            <Dropdown className='d-none d-md-block'>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Export
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={(e) => exportPdf(e)}>export PDF</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => exportExcel(e)}>export excel</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button variant="dark" onClick={() => saveHandler()}>Save</Button>
                            <Button variant="primary">New</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </Row>
            <Row className='g-0'>

                {tabIdx === 0 && <TechnicalAnalisis fr={fr} />}
                {tabIdx === 1 && <FundamentalAnalisis type={categoryIdx} fr={fr} />}
                {tabIdx === 2 && <SentimentAnalisis fr={fr} />}

            </Row>
        </div>
    )
}

export default Analysis;