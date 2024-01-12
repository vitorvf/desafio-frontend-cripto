import { object, string, number, InferType } from 'yup';
import { symbolsArray } from '../types/CryptocurrencyInfo';

export const cryptoFormSchema = object({
  crypto: string().oneOf(symbolsArray, "Symbol does not Exist!").required('Symbol is Required!'),
  amount: number().typeError("Amount must be Numeric!").required("Amount is Required!").min(0, "Amount must be Positive!"),
});

export type CryptoSchema = InferType<typeof cryptoFormSchema>;
