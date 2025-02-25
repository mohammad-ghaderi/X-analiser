import React, {useEffect, useRef, useState} from 'react';
import {Table} from 'react-bootstrap';

import "../styles/table.css";

const SelectionLRS = ({template}) => {

    const [techData, setTechData] = useState(Array.from({ length: template.body.length }, () => Array(6).fill(0)));
    const [resTd, setResTd] = useState(Array.from({ length: 4}, () => Array(6).fill('')));

    const refs = useRef([])

    const selectionHandler = (e, index, idx) => {
        let newData = [...techData];
        newData[index][idx] = e.target.selectedIndex;
        setTechData(newData);
        calculateResult();
    }

    const calculateResult = () => {
        let newResTD = [...resTd];

        for (let idx = 0; idx < 6; idx++) {
            let newRes = [0, 0, 0, ''];
            for (let i = 0; i < template.body.length; i++) {
                if (techData[i][idx] != 0) newRes[techData[i][idx] - 1]++;
            }

            if (newRes[0] >= newRes[1] && newRes[0] >= newRes[2]) newRes[3] += 'L';
            if (newRes[1] >= newRes[0] && newRes[1] >= newRes[2]) newRes[3] += 'R';
            if (newRes[2] >= newRes[0] && newRes[2] >= newRes[1]) newRes[3] += 'S';
    
            if (newRes[3] == 'LRS') newRes[3] = '-';

            for (let i = 0; i < 4; i++) newResTD[i][idx] = newRes[i];
        }
        setResTd(newResTD);     
    }

    const handleKeyDown = (e, index, idx) => {
        
        if (e.key === " ") {
            e.preventDefault();
            const targetIdx = index * 6 + idx + 1;
            if (refs.current[targetIdx]) {
                refs.current[targetIdx].focus(); // Move focus to the next <select>
            }
        } else if (e.key === "ArrowRight") {
            e.preventDefault();
            const targetIdx = index * 6 + idx + 1;
            if (refs.current[targetIdx]) {
                refs.current[targetIdx].focus(); // Move focus to the next <select>
            }
        } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            const targetIdx = index * 6 + idx - 1;
            if (refs.current[targetIdx]) {
                refs.current[targetIdx].focus(); // Move focus to the previous <select>
            }
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            const targetIdx = index * 6 + idx - 6;
            if (refs.current[targetIdx]) {
                refs.current[targetIdx].focus(); // Move focus to the up <select>
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            const targetIdx = index * 6 + idx + 6;
            if (refs.current[targetIdx]) {
                refs.current[targetIdx].focus(); // Move focus to the down <select>
            }
        }
    }

    useEffect(() => {
        calculateResult();
    }, [])

  return (
    <Table className={template.class} bordered>
        {template.header && <thead>
            {template.header.map((head, index) => (
                <tr key={index}>
                    {head.map((th,idx) => (
                        <th rowSpan={th.rowSpan?th.rowSpan:'1'} 
                            colSpan={th.colSpan?th.colSpan:'1'} 
                            className={th.class?th.class:'p-1'}
                            style={th.style}
                            key={idx}
                        >
                            {th.content?th.content:''}
                        </th>
                    ))}
                </tr>
            ))}
        </thead>}
        {template.body && <tbody>
            {template.body.map((tr, index) => (
                <tr key={index}>
                    <td className='p-1'>
                        {tr.content}
                    </td>
                    {Array(tr.count).fill().map((td, idx) => (
                        <td className='p-0 custom-select-option' key={idx}>
                            <select className="custopm-selcet" 
                                    defaultValue={''} 
                                    onChange={(e) => selectionHandler(e, index, idx - 1)}
                                    ref={(el) => (refs.current[index * 6 + idx - 1] = el)}
                                    onKeyDown={(e) => handleKeyDown(e, index, idx - 1)} 
                            >
                                <option disabled></option>
                                <option>L</option>
                                <option>R</option>
                                <option>S</option>
                            </select>
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>}
        {template.footer && <tfoot>
            {template.footer.map((tr, index) => (
                <tr key={index} className='tr-res'>
                    <td>
                        {tr.label}
                    </td>
                    {Array(tr.count).fill().map((td, idx) => (
                        <td key={idx}>{resTd[index][idx]}</td>
                    ))}
                </tr>
            ))}
            <tr className='p-1'>
                <td className='text-area' colSpan={8}>
                    <textarea name="" id="" placeholder="Additional Note"></textarea>
                </td>
            </tr>
        </tfoot>}
    </Table>
  )
}

export default SelectionLRS