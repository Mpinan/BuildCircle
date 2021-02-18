import { render, screen } from '@testing-library/react';
import App from './App';
// import Chat from './../chat';

test('renders channels', () => {
  render(<App />);
  const channelOne = screen.getByText(/channel-1/i);
  const channelTwo = screen.getByText(/channel-2/i);
  const channelThree = screen.getByText(/channel-3/i);
  const channelFour = screen.getByText(/channel-4/i);
  expect(channelOne).toBeInTheDocument();
  expect(channelTwo).toBeInTheDocument();
  expect(channelThree).toBeInTheDocument();
  expect(channelFour).toBeInTheDocument();
});

test('You can introduce name', () => {
  render(<App />);
  const button = screen.getByText("Submit name");
  expect(button).toBeInTheDocument();
});


test('You can introduce name', () => {
  render(<App />);
  const button = screen.getByText("Emojis");
  expect(button).toBeInTheDocument();
});
