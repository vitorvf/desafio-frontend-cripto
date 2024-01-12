import { useCryptocurrencyInfo } from "./hooks/useCryptocurrencyInfo";
import { SymbolType } from "./types/CryptocurrencyInfo";
import { Forms } from "./components/Forms";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CryptoSchema, cryptoFormSchema } from "./schema/cryptoForm.schema";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "reset.css";
import { CryptoInfoCard } from "./components/CryptoInfoCard";

function App() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(cryptoFormSchema),
  });

  const { loading, registeredCrypto, setRegisterData } = useCryptocurrencyInfo(
    {}
  );

  const onSubmit = async ({ crypto, amount }: CryptoSchema) => {
    const symbol = crypto as SymbolType;
    const hasFetched = false;

    setRegisterData({ amount, symbol, hasFetched });
  };

  return (
    <>
      <ToastContainer theme="colored" />
      <div className="flex justify-center items-center flex-col">
        <Forms {...{ errors, handleSubmit, register, onSubmit, loading }} />
        <CryptoInfoCard {...{ loading, registeredCrypto }} />
      </div>
    </>
  );
}

export default App;
