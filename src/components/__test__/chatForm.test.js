import { render, screen } from '@testing-library/react';
import ChatForm from './../chatForm';

beforeEach(() => {
  render(<ChatForm />);
});

test('renders button', () => {
  const button = screen.getByText("Send Message");
  expect(button).toBeInTheDocument();
});
