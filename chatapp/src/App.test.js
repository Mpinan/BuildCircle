import { render, screen } from '@testing-library/react';
import App from './App';
// import Chat from './../chat';

test('renders channels', () => {
  render(<App />);
  const channelOne = screen.getByText(/channel-1/i);
  const channelTwo = screen.getByText(/channel-2/i);
  const channelThree = screen.getByText(/channel-3/i);
  expect(channelOne).toBeInTheDocument();
  expect(channelTwo).toBeInTheDocument();
  expect(channelThree).toBeInTheDocument();
});
