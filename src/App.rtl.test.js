import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the header text, the click count, and a button', () => {
    render(<App />);
    expect(screen.getByText('Counter Example')).toBeInTheDocument();
    expect(screen.getByText('You clicked 0 times')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('increments the counter when clicked', () => {
    render(<App />);
    expect(screen.getByText('You clicked 0 times')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Click me'));
    expect(screen.getByText('You clicked 1 times')).toBeInTheDocument();
  });
});
