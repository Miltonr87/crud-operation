import React, {useState, useEffect} from 'react';
import { Button, Form } from 'semantic-ui-react';
import Axios from 'axios';

export default function Update() {
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ID, setID] = useState(null);

  console.log(firstName)
  console.log(lastName);

  const sendDataToAPI = () => {
    Axios.put(`https://61127ec389c6d00017ac039e.mockapi.io/Crud/${ID}`, {
      firstName,
      lastName,
    })
  }

  useEffect(()=> {
    setFirstName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'));
    setID(localStorage.getItem('ID'))
  }, [])
    return (
        <Form>
            <Form.Field>
                <label>First Name</label>
                <input
                    name="fname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='First Name' />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input
                    name="lname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Last Name' />
            </Form.Field>
            <Button type='submit' onClick={sendDataToAPI} >Update</Button>
        </Form>
    )
}