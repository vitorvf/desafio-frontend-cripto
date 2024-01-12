import { RegisteredCryptoData } from "../types/CryptocurrencyInfo";

interface CryptoInfoCardProps {
  registeredCrypto?: RegisteredCryptoData;
  loading: boolean;
}

export const CryptoInfoCard = ({
  registeredCrypto,
  loading,
}: CryptoInfoCardProps) =>
  !registeredCrypto
    ? null
    : registeredCrypto?.map((data, i) => (
        <div
          key={i}
          className="-translate-y-20 sm:-translate-y-1/4 lg:-translate-y-1/3 mobileLandscape:translate-y-0"
        >
          <div className="mobileLandscape:translate-y-0 -translate-y-1/3 flex flex-col justify-center max-w-xl w-full space-y-4 isolate rounded-xl bg-white brightness-95 shadow-md ring-1 ring-black/5 py-12 px-3 sm:px-16 my-8">
            {loading ? (
              <div className="h-96 w-96 bg-gray-300 animate-pulse object-cover object-center"></div>
            ) : (
              <div className="relative" data-testid="crypto-info-card">
                <table className="border-collapse w-full">
                  <thead className="hidden  bg-gray-100">
                    <tr className="border-t-2 border-gray-400 ">
                      <th className="text-left text-gray-700 capitalize px-4 py-4">
                        Avaliable Amount:
                      </th>
                      <th className="text-left text-gray-700 capitalize px-4 py-4">
                        Name:
                      </th>
                      <th className="text-left text-gray-700 capitalize px-4 py-4">
                        Category:
                      </th>
                      <th className="text-left text-gray-700 capitalize px-4 py-4">
                        Symbol:
                      </th>
                      <th className="text-left text-gray-700 capitalize px-4 py-4">
                        Logo:
                      </th>
                      {data?.data?.[0].urls?.website?.[0] && (
                        <th className="text-left text-gray-700 capitalize px-4 py-4">
                          Website:
                        </th>
                      )}
                      {data?.data?.[0].urls?.twitter?.[0] && (
                        <th className="text-left text-gray-700 capitalize px-4 py-4">
                          Twitter:
                        </th>
                      )}
                      {data?.data?.[0].urls?.facebook?.[0] && (
                        <th className="text-left text-gray-700 capitalize px-4 py-4">
                          Facebook:
                        </th>
                      )}
                      {data?.data?.[0].urls?.reddit?.[0] && (
                        <th className="text-left text-gray-700 capitalize px-4 py-4">
                          Reddit:
                        </th>
                      )}
                      {data?.data?.[0].urls?.technical_doc?.[0] && (
                        <th className="text-left text-gray-700 capitalize px-4 py-4">
                          Technical Documents:
                        </th>
                      )}
                      {data?.data?.[0].urls?.source_code?.[0] && (
                        <th className="text-left text-gray-700 capitalize px-4 py-4">
                          Source Code:
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white shadow-sm mb-6  flex flex-row flex-wrap cursor-pointer hover:bg-gray-100  border-l-2 border-r-2 hover:border-gray-600">
                      <td className="pl-4 pt-8  pb-2 text-left relative w-2/4 border-t border-l  border-gray-400 ">
                        <span className="font-bold text-xs text-gray-700 uppercase  absolute top-0 inset-x-0 p-1 bg-gray-300 pl-2">
                          Avaliable Amount:
                        </span>
                        {data?.amount}
                      </td>
                      <td className="pl-4 pt-8  pb-2 text-left text-gray-800 relative w-2/4 border-t border-l border-r   border-gray-400">
                        <span className="font-bold text-xs text-gray-700 uppercase  absolute top-0 inset-x-0 p-1 bg-gray-300 pl-2">
                          Name:
                        </span>
                        {data?.data?.[0].name}
                      </td>
                      <td className="pl-4  pt-8  pb-2  text-left text-gray-800 relative w-2/4 border-t border-l  border-gray-400">
                        <span className="font-bold text-xs text-gray-700 uppercase  absolute top-0 inset-x-0 p-1 bg-gray-300 pl-2">
                          Category
                        </span>
                        {data?.data?.[0].category}
                      </td>
                      <td className="pl-4  pt-8  pb-2  text-left text-gray-800 relative w-2/4 border-t border-l border-r   border-gray-400">
                        <span className="font-bold text-xs text-gray-700 uppercase  absolute top-0 inset-x-0 p-1 bg-gray-300 pl-2">
                          Symbol:
                        </span>
                        {data?.data?.[0].symbol}
                      </td>
                      <td className="pl-4  pt-8  pb-2   text-left text-gray-800 relative w-2/4 border-t border-l  border-gray-400">
                        <span className="font-bold text-xs text-gray-700 uppercase  absolute top-0 inset-x-0 p-1 bg-gray-300 pl-2">
                          Logo:{" "}
                        </span>
                        <img
                          src={data?.data?.[0].logo}
                          alt=""
                          height={30}
                          width={30}
                        />
                      </td>
                      {data?.data?.[0].urls?.website?.[0] && (
                        <td className="px-4 pt-8  pb-2 text-left text-gray-800 relative w-2/4 border   border-gray-400">
                          <span className="font-bold text-xs text-gray-700 uppercase  absolute top-0 inset-x-0 p-1 bg-gray-300 pl-2">
                            Website:
                          </span>
                          <a
                            href={data?.data?.[0].urls?.website?.[0]}
                            className="inline-block break-all"
                          >
                            {data?.data?.[0].urls?.website?.[0]}
                          </a>
                        </td>
                      )}
                      {data?.data?.[0].urls?.twitter?.[0] && (
                        <td className="pl-4  pt-8  pb-2   text-left text-gray-800 relative w-2/4 border-t border-l border-r   border-gray-400">
                          <span className="font-bold text-xs text-gray-700 uppercase  absolute top-0 inset-x-0 p-1 bg-gray-300 pl-2">
                            Twitter:
                          </span>
                          <a
                            href={data?.data?.[0].urls?.website?.[0]}
                            className="inline-block break-all"
                          >
                            {data?.data?.[0].urls?.twitter?.[0]}
                          </a>
                        </td>
                      )}
                      {data?.data?.[0].urls?.facebook?.[0] && (
                        <td className="pl-4  pt-8  pb-2   text-left text-gray-800 relative w-2/4 border-t border-l border-r   border-gray-400">
                          <span className="font-bold text-xs text-gray-700 uppercase  absolute top-0 inset-x-0 p-1 bg-gray-300 pl-2">
                            Facebook:
                          </span>
                          <a
                            href={data?.data?.[0].urls?.facebook?.[0]}
                            className="inline-block break-all"
                          >
                            {data?.data?.[0].urls?.facebook?.[0]}
                          </a>
                        </td>
                      )}
                      {data?.data?.[0].urls?.reddit?.[0] && (
                        <td className="pl-4  pt-8  pb-2   text-left text-gray-800 relative w-2/4 border-t border-l border-r   border-gray-400">
                          <span className="font-bold text-xs text-gray-700 uppercase  absolute top-0 inset-x-0 p-1 bg-gray-300 pl-2">
                            Reddit:
                          </span>
                          <a
                            href={data?.data?.[0].urls?.reddit?.[0]}
                            className="inline-block break-all"
                          >
                            {data?.data?.[0].urls?.reddit?.[0]}
                          </a>
                        </td>
                      )}
                      {data?.data?.[0].urls?.technical_doc?.[0] && (
                        <td className="pl-4  pt-8  pb-2   text-left text-gray-800 relative w-2/4 border-t border-l border-r   border-gray-400">
                          <span className="font-bold text-xs text-gray-700 uppercase  absolute top-0 inset-x-0 p-1 bg-gray-300 pl-2">
                            Technical Documents:
                          </span>
                          <a
                            href={data?.data?.[0].urls?.technical_doc?.[0]}
                            className="inline-block break-all"
                          >
                            {data?.data?.[0].urls?.technical_doc?.[0]}
                          </a>
                        </td>
                      )}
                      {data?.data?.[0].urls?.source_code?.[0] && (
                        <td className="pl-4  pt-8  pb-2   text-left text-gray-800 relative w-2/4 border-t border-l border-r   border-gray-400">
                          <span className="font-bold text-xs text-gray-700 uppercase  absolute top-0 inset-x-0 p-1 bg-gray-300 pl-2">
                            Source Code:
                          </span>
                          <a
                            href={data?.data?.[0].urls?.source_code?.[0]}
                            className="inline-block break-all"
                          >
                            {data?.data?.[0].urls?.source_code?.[0]}
                          </a>
                        </td>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      ));
