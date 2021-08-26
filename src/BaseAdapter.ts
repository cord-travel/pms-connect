import { IConnected_Account,  IConnected_Hotel, IConnected_Room } from './models'

type IdentificationCode = string |  number 

export interface IBaseAdapter {

    getAuthorizeUrl?(params?: any): string

   
    // Get current authorized account details
    getAccount?(params?:any): Promise<IConnected_Account>

    // hotel data
    getHotels(params?:any): Promise<IConnected_Hotel[]>

    getHotelById(id: IdentificationCode, params?:any): Promise<IConnected_Hotel>

    // room data
    getRoomsTypes(hotelId?: IdentificationCode, params?: any): Promise<IConnected_Room>

    getRooms(hotelId?: IdentificationCode, params?: any): Promise<IConnected_Room>

    getRoomById(roomId: IdentificationCode, params?: any): Promise<IConnected_Room>
    
    

}
