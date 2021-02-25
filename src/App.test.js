import { render, screen } from '@testing-library/react';
import App from './App';
// import Chat from './../chat';

test('renders channels', () => {
  render(<App />);
  const channelOne = screen.getByText("channel-1");
  const channelTwo = screen.getByText("channel-2");
  const channelThree = screen.getByText("channel-3");
  const channelFour = screen.getByText("channel-4");
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


test('You can introduce emoji', () => {
  render(<App />);
  const button = screen.getByText("Emojis");
  expect(button).toBeInTheDocument();
});
