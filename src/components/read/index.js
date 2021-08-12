import React, { useEffect, useState } from 'react';
import { Label, Table, Button } from 'semantic-ui-react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        Axios.get(`https://61127ec389c6d00017ac039e.mockapi.io/Crud`)
            .then((getData) => {
                setApiData(getData.data)
                console.log(getData.data);
            })
    }, [])

    const setID = (id) => {
        console.log(id);
        localStorage.setItem('ID', id);
    };

    const getData = () => {
        Axios.get(`https://61127ec389c6d00017ac039e.mockapi.io/Crud`)
            .then((getData) => {
                setApiData(getData.data)
                console.log(getData.data);
            })
    }

    const onDelete = (id) => {
        Axios.delete(`https://61127ec389c6d00017ac039e.mockapi.io/Crud/${id}`)
            .then((getData) => {
                getData();
                console.log(getData.data);
            })
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <>
                                <Table.Row>
                                    <Table.Cell>
                                        <Label ribbon>{data.id}</Label>
                                    </Table.Cell>
                                    <Table.Cell>{data.firstName}</Table.Cell>
                                    <Table.Cell>{data.lastName}</Table.Cell>
                                    <Table.Cell>
                                        <Link to='/update'>
                                            <Button
                                                color="green"
                                                onClick={() => setID(data.id)}
                                            >Update</Button>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell>
                                            <Button 
                                            color="red" 
                                            onCLick={() => onDelete(data.id)}
                                            >Delete</Button>   
                                    </Table.Cell>
                                </Table.Row>
                            </>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
};