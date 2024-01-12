/* eslint-disable @typescript-eslint/no-explicit-any */

export type SymbolType = "BTC" | "XMR" | "ETH" | "ZEC" | "USDT"

export const symbolsArray = ["BTC", "XMR", "ETH", "ZEC", "USDT"]

export type RegisteredCryptoData = DataWithAmount[]

export interface DataWithAmount {
  data: Data[]
  amount: number
}


export interface CryptocurrencyInfoVars {
        id?: string;
        slug?: string;
        // symbol?: SymbolType;
        address?: string;
        skip_invalid?: boolean;
        aux?: string;
      
}

export interface CryptocurrencyInfoData {
    status: Status
    data: Data[]
  }
  
  export interface Status {
    timestamp: string
    error_code: number
    error_message: any
    elapsed: number
    credit_count: number
    notice: any
  }
  
  export interface Data {
    id: number
    name: string
    symbol: string
    category: string
    description: string
    slug: string
    logo: string
    subreddit: string
    notice: string
    tags: string[]
    "tag-names": string[]
    "tag-groups": string[]
    urls: Urls
    platform: any
    date_added: string
    twitter_username: string
    is_hidden: number
    date_launched: string
    contract_address: any[]
    self_reported_circulating_supply: any
    self_reported_tags: any
    self_reported_market_cap: any
    infinite_supply: boolean
  }
  
  export interface Urls {
    website: string[]
    twitter: any[]
    message_board: string[]
    chat: any[]
    facebook: any[]
    explorer: string[]
    reddit: string[]
    technical_doc: string[]
    source_code: string[]
    announcement: any[]
  }
  