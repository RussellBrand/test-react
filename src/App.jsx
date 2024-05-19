import React, { useState } from 'react';
import { Button } from './Button';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        data-testid="iptext"
      />
      <Button onClick={handleAddTodo} data-testid="add_button">
        Add
      </Button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} data-testid="to-do-item">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
