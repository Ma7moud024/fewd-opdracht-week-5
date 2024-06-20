import { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';
import Input from './Input';

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    justify-content: flex-end;
  }
`;

export default function BribeForm(props) {
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [amount, setAmount] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    props.addBribe({
      name,
      email,
      location,
      time,
      amount,
    });
  }

  function changeState(e, setter) {
    setter(e.target.value);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Hi Marco</h1>
      <Input
        label="Name"
        name="name"
        onChange={(e) => changeState(e, setName)}
      />
      <Input
        label="Location"
        name="location"
        onChange={(e) => changeState(e, setLocation)}
      />
      <Input
        label="E-mail"
        name="email"
        type="email"
        onChange={(e) => changeState(e, setEmail)}
        value={email}
      />
      <Input
        label="time"
        name="time"
        type="time"
        onChange={(e) => changeState(e, setTime)}
        value={time}
      />
      <Input
        label="Amount"
        name="amount"
        type="number"
        onChange={(e) => changeState(e, setAmount)}
        value={amount}
      />
      <Button>Submit!</Button>
    </Form>
  );
}
