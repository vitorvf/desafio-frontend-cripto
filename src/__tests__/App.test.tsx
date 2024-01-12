import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import App from "../App";

test("should render the main page forms and button", () => {
  render(<App />);

  const cryptoButton = screen.getByTestId('add-crypto-button')
  const amountForm = screen.getByTestId('amount-form')
  const cryptoForm = screen.getByTestId('crypto-form')

  expect(cryptoButton).toBeInTheDocument();
  expect(amountForm).toBeInTheDocument();
  expect(cryptoForm).toBeInTheDocument();
});

test("should not render any form error", () => {
  render(<App />);

  const amountFormError = screen.queryByTestId('amount-form-error')
  const cryptoFormError = screen.queryByTestId('crypto-form-error')

  expect(amountFormError).not.toBeInTheDocument();
  expect(cryptoFormError).not.toBeInTheDocument();
})

test("should show form errors when button is clicked without filling the forms", async () => {
  render(<App />);
  const cryptoButton = screen.getByTestId('add-crypto-button')
  fireEvent.click(cryptoButton);

  await waitFor(() => {
    const amountFormError = screen.getByTestId('amount-form-error')
    const cryptoFormError = screen.getByTestId('crypto-form-error')

    expect(amountFormError).toBeInTheDocument();
    expect(cryptoFormError).toBeInTheDocument();
  });
})

test("should show form error when amount form is filled with letters", async () => {
  render(<App />);
  const amountForm = screen.getByTestId('amount-form')
  fireEvent.change(amountForm, { target: { value: 'abc' } });
  const cryptoButton = screen.getByTestId('add-crypto-button')
  fireEvent.click(cryptoButton);

  await waitFor(() => {
    const amountFormError = screen.getByTestId('amount-form-error')
    expect(amountFormError).toBeInTheDocument();
  });
})

test("should show form error when amount form is filled with -1", async () => {
  render(<App />);
  const amountForm = screen.getByTestId('amount-form')
  fireEvent.change(amountForm, { target: { value: '-1' } });
  const cryptoButton = screen.getByTestId('add-crypto-button')
  fireEvent.click(cryptoButton);

  await waitFor(() => {
    const amountFormError = screen.getByTestId('amount-form-error')
    expect(amountFormError).toBeInTheDocument();
  });
})

test("should show form error when crypto form is filled with garbage", async () => {
  render(<App />);
  const cryptoForm = screen.getByTestId('crypto-form')
  fireEvent.change(cryptoForm, { target: { value: 'erroObvio' } });
  const cryptoButton = screen.getByTestId('add-crypto-button')
  fireEvent.click(cryptoButton);

  await waitFor(() => {
    const cryptoFormError = screen.getByTestId('crypto-form-error')
    expect(cryptoFormError).toBeInTheDocument();
  });
})

test("should fill forms with '1337' and 'BTC', make request", async () => {
  
  render(<App />);
  
  
  const amountForm = screen.getByTestId('amount-form');
  const cryptoForm = screen.getByTestId('crypto-form');
  const cryptoButton = screen.getByTestId('add-crypto-button');
  await act(async () => {

    // Submit form
    fireEvent.change(amountForm, { target: { value: '1337' } });
    fireEvent.change(cryptoForm, { target: { value: 'BTC' } });
    fireEvent.click(cryptoButton);

    // Wait for the request to complete
    await new Promise(r => setTimeout(r, 2000));
  

  // No errors
  const amountFormError = screen.queryByTestId('amount-form-error');
  const cryptoFormError = screen.queryByTestId('crypto-form-error');
  expect(amountFormError).not.toBeInTheDocument();
  expect(cryptoFormError).not.toBeInTheDocument();

  await new Promise(r => setTimeout(r, 2000))

});
});


