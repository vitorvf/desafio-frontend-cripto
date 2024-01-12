import { UseFormRegister, FieldErrors } from "react-hook-form"
import { CryptoSchema } from "../schema/cryptoForm.schema"
import { SubmitButtonProps } from "../components/SubmitButton"

export interface CryptoAmountFormProps extends SubmitButtonProps {
    register: UseFormRegister<CryptoSchema>
    errors:  FieldErrors<CryptoSchema>
}

