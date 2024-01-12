import { useState } from "react";
import { CryptoAmountFormProps } from "../types/FormProps";
import classNames from "classnames";

export const AutoComplete = ({
  register,
  errors,
  loading,
}: CryptoAmountFormProps) => {
  const [optionsHidden, setOptionsHidden] = useState(true);

  return (
    <div className="flex flex-col pb-6">
      <label
        className="block text-gray-800 gray-700 text-sm font-bold mb-3"
        htmlFor="amount"
      >
        Currency:
      </label>
      <input
        data-testid="crypto-form"
        list="crypto"
        onFocus={() => setOptionsHidden(false)}
        {...register("crypto")}
        onBlur={() => setOptionsHidden(true)}
        disabled={loading}
        className={classNames([
          "shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline isolate  bg-white/20 ring-1 ring-black/5 border-slate-300",
          errors?.crypto && "border-red-500",
        ])}
      />
      <datalist
        id="crypto"
        className={classNames([
          "absolute invisible",
          optionsHidden ? "hidden" : "block",
        ])}
      >
        <option>BTC</option>
        <option>XMR</option>
        <option>USDT</option>
        <option>ETH</option>
        <option>ZEC</option>
      </datalist>
      {errors?.crypto?.message && <small data-testid="crypto-form-error" className="text-red-600 mt-1.5 ms-2 -mb-6">{errors?.crypto?.message}</small> }
    </div>
  );
};
