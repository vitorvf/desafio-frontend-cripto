import classNames from "classnames";
import { CryptoAmountFormProps } from "../types/FormProps";

export const AmountForm = ({register, errors, loading}: CryptoAmountFormProps) => (
    <div className="flex flex-col">
      <label className="text-gray-800 block text-sm font-bold mb-3" htmlFor="amount">
        Amount:
      </label>
    <input
        data-testid="amount-form"
        list="amount"
        {...register('amount')}
        disabled={loading}
        autoComplete="off"
        className={classNames(["shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline isolate bg-white/20 ring-1 ring-black/5 border-slate-300", errors?.amount && 'border-red-500'])}
      />
      {errors?.amount?.message && <small data-testid="amount-form-error" className="text-red-600 mt-1.5 ms-2 -mb-3">{errors?.amount?.message}</small>}
      </div>
)