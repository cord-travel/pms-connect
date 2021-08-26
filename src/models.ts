export type ID = string | number
export interface IConnected_Account {

    name: string
    description?: string

}
export interface IConnected_Hotel {

    id: ID
    name: string
    description: string
    companyName?: string
}

export interface IConnected_RoomType {
    id: ID
    hotel_id: ID
    name: string
    description: string
    maxCapacity: number
    no_of_rooms?: number
}

export interface IConnected_Room {
}

export interface IConnected_RatePlan {

}

export interface IConnected_Rate {
    
}

