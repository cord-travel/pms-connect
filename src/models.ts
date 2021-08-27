export type ID = string | number
export interface BasicObject {
    [key: string]: string | number | null
}

export interface ILocationAddress {
    address: string
    postal_code?: string
    city?: string
    country_code: string
}
export interface IMultiLanguageObject {
    en: string  // English
    de?: string // german
    es?: string // Spanish
    nl?: string // Dutch
    fr?: string // French
}
export interface IConnected_ListOf<T> {
    count?: number
    data: T[]

}

export interface IConnected_Account {
    id: ID
    code: ID
    name: string
    description?: string
    type?: string
    company_name?: string
    image_url?: string


}
export interface IConnected_Hotel {

    id: ID
    name: IMultiLanguageObject
    description: IMultiLanguageObject
    company_name?: string
    timezone?: string  // Location timezone
    location?: ILocationAddress
    logo?: string
    type?: string
    currency_code?: string
    is_active?: boolean

}

export interface IConnected_RoomType {
    id: ID
    hotel_id?: ID
    code?: ID
    name: IMultiLanguageObject
    description: IMultiLanguageObject
    max_capacity: number
    no_of_rooms: number,
    is_active: boolean,
    type?: ID
    images?: string[]

}

export interface IConnected_Room {
}

export interface IConnected_RatePlan {

}

export interface IConnected_Rate {

}

