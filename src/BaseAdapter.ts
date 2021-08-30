import {
    ID,
    IConnected_ListOf,
    IConnected_Account,
    IConnected_Hotel,
    IConnected_RoomType,
    IConnected_RatePlan,
    IConnected_RatePlanItem,
    IConnected_Rate,
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

    getRoomTypeById(roomTypeId: ID): Promise<IConnected_RoomType>

    // RatePlans 

    /**
     * List all rateplans 
     * @param hotelId 
     * @param params 
     */
    getRatePlansByHotelId(hotelId: ID, params?: any): Promise<IConnected_ListOf<IConnected_RatePlanItem>>
    getRatePlanById(ratePlanId: ID, params?: any): Promise<IConnected_RatePlan>

    getRatesByRatePlanId(ratePlanId: ID): Promise<IConnected_ListOf<IConnected_Rate>>

    // getRatePlanDetails()


    // Room
    getRooms(hotelId?: ID, params?: any): Promise<IConnected_ListOf<IConnected_Room>>

    getRoomById(roomId: ID, params?: any): Promise<IConnected_Room>



}
