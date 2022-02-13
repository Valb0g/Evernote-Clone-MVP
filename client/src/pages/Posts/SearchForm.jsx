import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form, FormGroup, Input,
} from 'reactstrap';
import { searchSagaPosts } from '../../Redux/Actions/Actions';

function SearchForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    dispatch(searchSagaPosts(input));
  }, [input]);

  return (
    <Form>
      <FormGroup>
        <Input
          type="text"
          id="words"
          value={input}
          onChange={changeHandler}
          placeholder="Поиск..."
        />
      </FormGroup>
    </Form>
  );
}

export default SearchForm;
