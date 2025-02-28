import React, { useEffect, useState } from 'react';
import { Table, Form, Button, InputGroup } from 'react-bootstrap';
import { FUNDAMENTAL_ANALYSIS_TYPE1 } from '../designs/Tables';
import '../styles/table.css';

const FundTable = ({ type }) => {

    const values = ['GBP', 'USD', 'EUR', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD', 'MXN', 'SGD', 'HKD', 'NOK', 'KRW']

    const [firstIdx, setFirstIdx] = useState(0);
    const [secondIdx, setSecondIdx] = useState(1);
    const [data, setData] = useState({});

    const symbols = ['fa-greater-than', 'fa-less-than', 'fa-equals', ''];

    const dataHandler = (index, idx, value) => {        
        let newData = {...data};
        let line = newData[index] === undefined ? {} : newData[index];
        line[idx] = value;
        console.log(line);
        newData[index] = line;
        setData(newData);
        console.log(newData);
    }


    const firstValueHandler = (idx) => {
        if (idx === firstIdx) return;
        setFirstIdx(idx);
    }
    const secondValueHandler = (idx) => {
        if (idx === secondIdx) return;
        setSecondIdx(idx);
    }

    const compareHandler = (index) => {
        let newCompare = (data[index] !== undefined && data[index][2] !== undefined) ? data[index][2] : -1;
        newCompare++;
        newCompare %= 3;        
        dataHandler(index, 2, newCompare);
    }

    useEffect(() => {
        console.log(`f${firstIdx}, s${secondIdx}`);
    }, [firstIdx, secondIdx])
    
    return (
        <Table bordered className={'fundamental-analysis'} variant='secondary'>
            <thead>
                <tr>
                    <th className='p-0 pb-3' style={{width : '70px'}}>Data</th>
                    <th className='p-0 pb-3'>Currency</th>
                    <th className='p-0' style={{width: '130px'}} colSpan={2}>
                        <Form.Select className="form-select"
                                onChange={(e) => firstValueHandler(e.target.selectedIndex)}
                                value={values[firstIdx]}
                                style={{textAlign: 'center'}}
                                
                            >
                            {values.map((option, idx) => (
                                <option key={idx} value={option}>{option}</option>
                            ))}
                        </Form.Select>
                    </th>
                    <th className='p-0 pb-2' style={{ width: '30px', fontSize: '1.1rem'}}>
                        <i className="fa-solid fa-xmark text-dark"></i>
                    </th>
                    <th className='p-0'>
                        <Form.Select className="form-select"
                                onChange={(e) => secondValueHandler(e.target.selectedIndex)}
                                value={values[secondIdx]}
                                style={{textAlign: 'center'}}
                        >
                            {values.map((option, idx) => (
                                <option key={idx} value={option}>{option}</option>
                            ))}
                        </Form.Select>
                    </th>
                </tr>
            </thead>

            <tbody>
                {FUNDAMENTAL_ANALYSIS_TYPE1.body.map((tr, index) => (
                    <tr key={index}>
                        {tr.map((td, idx) => (
                            <td className={td.class?td.class:''}
                                colSpan={td.colSpan?td.colSpan:'1'}
                                rowSpan={td.rowSpan?td.rowSpan:'1'}
                                key={idx}
                                style={td.style&&td.style}
                            >
                                {td.content && td.content}
                                {td.type === 'cmp' && 
                                    <Button variant={`${data[index] !== undefined && data[index][2] !== undefined ? 'outline-': ''}secondary`}
                                            className='p-2 border-0 border-0' 
                                            style={{height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, fontSize: '1.1rem'}}
                                            onClick={() => compareHandler(index)}
                                    >   
                                        <i className={`fa-solid ${symbols[((data[index] !== undefined && data[index][2] !== undefined) ? data[index][2] : 3)]}`}></i>
                                    </Button>
                                }
                                {td.type === 'inp' && 
                                    <InputGroup className="">
                                        <Form.Control
                                        aria-label="Small"
                                        aria-describedby="inputGroup-sizing-lg"
                                        style={{height: '100%'}}
                                        onChange={(e) => dataHandler(index, idx, e.target.value)}
                                        value={(data[index] !== undefined && data[index][idx] !== undefined) ? data[index][idx] : ''}
                                        />
                                    </InputGroup>
                                }
                                {td.type === 'inp-textarea' && 
                                    <InputGroup className="" style={{ position: 'absolute', left: '0', top: '0', height: '100%'}}>
                                        <Form.Control
                                        as="textarea"
                                        aria-label="Small"
                                        aria-describedby="inputGroup-sizing-lg"
                                        style={{height: '100%', resize: 'none'}}
                                        onChange={(e) => dataHandler(index, idx, e.target.value)}
                                        value={(data[index] !== undefined && data[index][idx] !== undefined) ? data[index][idx] : ''}
                                        />
                                    </InputGroup>
                                }
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>

        </Table>
    )
}

export default FundTable