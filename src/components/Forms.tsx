import {
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { CryptoSchema } from "../schema/cryptoForm.schema";
import { AmountForm } from "./AmountForm";
import { AutoComplete } from "./AutoComplete";
import { SubmitButton } from "./SubmitButton";
import { CryptoAmountFormProps } from "../types/FormProps";
import { SubmitButtonProps } from "./SubmitButton";

interface _CryptoAmountFormProps
  extends CryptoAmountFormProps,
    SubmitButtonProps {
  // watch: UseFormWatch<CryptoSchema>
  handleSubmit: UseFormHandleSubmit<CryptoSchema>;
  register: UseFormRegister<CryptoSchema>;
  onSubmit: (data: CryptoSchema) => void;
}

export const Forms = ({
  errors,
  handleSubmit,
  register,
  onSubmit,
  loading,
}: _CryptoAmountFormProps) => {
  return (
    <div className="-translate-y-20 mobileLandscape:translate-y-5 flex justify-center flex-col w-full items-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center max-w-xl w-full p-4 space-y-4 isolate aspect-video rounded-xl bg-white brightness-95 shadow-md ring-1 ring-black/5 py-12 px-16"
      >
        <AmountForm {...{ errors, register, loading }} />
        <AutoComplete {...{ errors, register, loading }} />
        <SubmitButton {...{ loading }} />
      </form>
      </div>
    
  );
};
