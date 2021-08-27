import {
    ID,
    IConnected_ListOf,
    IConnected_Account,
    IConnected_Hotel,
    IConnected_RoomType,
    IConnected_Room,
} from './models'


export interface IBaseAdapter {

    getAuthorizeUrl?(params?: any): string


    // Get current authorized account details
    getAccount?(params?: any): Promise<IConnected_Account>

    // hotel data
    getHotels(params?: any): Promise<IConnected_ListOf<IConnected_Hotel>>

    getHotelById(id: ID, params?: any): Promise<IConnected_Hotel>

    // Roomtype 
    getRoomsTypes(hotelId?: ID, params?: any): Promise<IConnected_ListOf<IConnected_RoomType>>

    getToomTypeById(roomTypeId: ID): Promise<IConnected_RoomType>

    // Room
    getRooms(hotelId?: ID, params?: any): Promise<IConnected_ListOf<IConnected_Room>>

    getRoomById(roomId: ID, params?: any): Promise<IConnected_Room>



}
