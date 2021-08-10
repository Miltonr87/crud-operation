import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

export default function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  console.log(firstName)
  console.log(lastName);

  const sendDataToAPI = () => {
    axios.post(`https://61127ec389c6d00017ac039e.mockapi.io/Crud`, {
      firstName,
      lastName,
    })
  }

  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input
          name="fname"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          name="lname"
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Last Name' />
      </Form.Field>
      <Button type='submit' onClick={sendDataToAPI} >Submit</Button>
    </Form>
  )
};