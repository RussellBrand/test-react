import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

function App(){
  return(<div><i>Learn React </i> </div>);
}

it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});
