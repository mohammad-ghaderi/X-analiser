import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row, Table } from 'react-bootstrap'

const History = () => {

    const [analysisData, setAnalysisData] = useState([]);

    const fetchData = async () => {
        try {
            const {data} = await axios.get("http://localhost:3001/analysis");
            console.log(data);
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
            <Table striped>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>created at</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {analysisData.map((tr, index) => (
                        <tr>
                            <td>{tr.id}</td>
                            <td>{tr.name}</td>
                            <td>{tr.created_at}</td>
                            <td>{tr.last_edit}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </Row>
    </Container>
  )
}

export default History