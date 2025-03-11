import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ButtonGroup, Container, Row, Table } from 'react-bootstrap'
import { TablesContext } from '../contexts/TablesContext';
import { useNavigate } from 'react-router-dom';
import { CATEGORY, TARGET } from '../designs/types';

const History = ({setMenuIdx}) => {

    const [analysisData, setAnalysisData] = useState([]);
    const {setTables, setCategoryIdx, setTargetIdx  } = useContext(TablesContext);

    const navigate = useNavigate();

    const selectHistoryHandler = (index) => {
        setTables(analysisData[index].data);
        setCategoryIdx(analysisData[index].category)
        console.log('xx', analysisData[index])
        setTargetIdx(analysisData[index].type)
        setMenuIdx(1);
        navigate('/analysis');
    }

    const deleteHandler = async (e, index) => {
        e.stopPropagation();
        try {
            const {data} = await axios.delete(`http://localhost:3001/analysis/${index}`);
            console.log(data)
            fetchData();
        } catch (err) {
            console.log('Error while removing anslysis data.');
        }
    }

    const fetchData = async () => {
        try {
            const {data} = await axios.get("http://localhost:3001/analysis");
            setAnalysisData(data);
        } catch (err) {
            console.log('Error while fetching anslysis data.');
        }
    }


    useEffect(() => {
        fetchData();
    }, [])

  return (
    <Container>
        <Row className='mt-5'>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>id</th>
                        <th>category</th>
                        <th>type</th>
                        <th>created</th>
                        <th>last edit</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {analysisData.map((tr, index) => (
                        <tr key={index} onClick={() => selectHistoryHandler(index)}>
                            <td>{index + 1}</td>
                            <td>{tr.id}</td>
                            <td>{CATEGORY[Number(tr.category)]}</td>
                            <td>{TARGET[CATEGORY[Number(tr.category)]][Number(tr.type)]}</td>
                            <td>{tr.created_at}</td>
                            <td>{tr.last_edited}</td>
                            <td style={{width: '100px'}}>
                                <ButtonGroup>
                                    <i className="fa-solid fa-trash-can text-danger px-1"
                                        style={{fontSize: '1.5rem'}}
                                        onClick={(e) => deleteHandler(e, tr.id)}
                                    ></i>
                                    <i className="fa-solid fa-file-pdf text-wanring px-1"
                                        style={{fontSize: '1.5rem'}}
                                    ></i>
                                    <i className="fa-solid fa-file-csv text-success px-1"
                                        style={{fontSize: '1.5rem'}}
                                    ></i>
                                </ButtonGroup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </Row>
    </Container>
  )
}

export default History