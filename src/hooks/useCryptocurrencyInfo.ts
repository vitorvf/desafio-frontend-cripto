import { useEffect, useState } from "react";
import {  CryptocurrencyInfoVars, RegisteredCryptoData, SymbolType, symbolsArray } from "../types/CryptocurrencyInfo";
import { toast } from "react-toastify";

interface RegisterData {
    symbol: SymbolType
    amount: number
    hasFetched: boolean
}

export const useCryptocurrencyInfo = ({
    address,
    aux,
    id,
    skip_invalid,
    slug,
}: CryptocurrencyInfoVars) => {
    const [registeredCrypto, setRegisteredCypto] =
    useState<RegisteredCryptoData>();
  const [{symbol, amount, hasFetched}, setRegisterData] = useState({hasFetched: true} as RegisterData);

    const fetchDone = () => {
        setRegisterData({amount, symbol, hasFetched: true})
    }

    useEffect(() => {
        /*fetch(
            "https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?slug=bitcoin",
            {headers: [
                ['X-CMC_PRO_API_KEY', '123-123-123-suachave']
            ]}
            )*/
        const importSymbol = async () => {

            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const mod = await import(`../json/${symbol}.json`)
                const data = { ...(mod?.default || {}), data: mod?.default?.data?.[symbol || ''] }
                setRegisteredCypto([
                    { data: data?.data, amount },
                    ...(registeredCrypto || []),
                  ]);
            } catch (_err) {
                // trate erro (exemplo seria analytics)
                console.error(_err)
                fetchDone()
                throw _err
            }
            fetchDone()

        }

        if (symbolsArray.includes(symbol || '') && !hasFetched) {
            toast.promise(
                importSymbol(),
                {
                    pending: 'Fetching Information...',
                    success: 'Information Successfully Retrieved!',
                    error: 'Error Fetching Crypto Information!'
                }                
            )
        }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        address,
        aux,
        id,
        skip_invalid,
        slug,
        symbol,
        symbol,
        amount,
        hasFetched
    ])

    return { registeredCrypto, setRegisterData, loading: !hasFetched }
}
