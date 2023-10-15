/* eslint-disable no-undef */
// ContactPage.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from './ContactPage';

test('ContactPage renders correctly', () => {
  render(<ContactPage />);
  const title = screen.getByText('Kontak Kami');
  expect(title).toBeInTheDocument();
});

test('Submitting a message updates the message count', () => {
  render(<ContactPage />);
  const messageInput = screen.getByPlaceholderText('Tulis pesan Anda...');
  const submitButton = screen.getByText('Kirim Pesan');

  fireEvent.change(messageInput, { target: { value: 'Ini adalah pesan uji.' } });
  fireEvent.click(submitButton);

  const messageCount = screen.getByTestId('message-count');
  expect(messageCount).toHaveTextContent('1');
});
