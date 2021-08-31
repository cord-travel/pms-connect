import {
    ID,
    IConnected_ListOf,
    IConnected_Account,
    IConnected_Hotel,
    IConnected_RoomType,
    IConnected_RatePlan,
    IConnected_RatePlanItem,
    IConnected_Rate,
    IConnected_Room
} from './models';

export interface IBaseAdapter {
    getAuthorizeUrl?(params?: any): string;

    /**
     * Get current authorized account details
     * @param params 
     */
    getAccount?(params?: any): Promise<IConnected_Account>;

    /**
     * Get list of hotels
     * @param params 
     */
    getHotels(params?: any): Promise<IConnected_ListOf<IConnected_Hotel>>;


    /**
     * Get hotel details by id
     * @param id 
     * @param params 
     */

    getHotelById(id: ID, params?: any): Promise<IConnected_Hotel>;


    /**
     * Get list of room types
     * @param hotelId 
     * @param params 
     */
    getRoomsTypes(
        hotelId?: ID,
        params?: any
    ): Promise<IConnected_ListOf<IConnected_RoomType>>;


    /**
     * Get Roomtype details by id
     * @param roomTypeId 
     * @param params 
     */
    getRoomTypeById(roomTypeId: ID, params?: any): Promise<IConnected_RoomType>;

    // RatePlans

    /**
     * List all RatePlans by hotel id
     * @param hotelId
     * @param params
     */
    getRatePlansByHotelId(
        hotelId: ID,
        params?: any
    ): Promise<IConnected_ListOf<IConnected_RatePlanItem>>;


    /**
     * Get single RatePlan by id
     * @param ratePlanId 
     * @param params 
     */
    getRatePlanById(ratePlanId: ID, params?: any): Promise<IConnected_RatePlan>;



    /**
     * Get list of rates by rateplan
     * @param ratePlan 
     */
    getRatesByRatePlan(ratePlan: IConnected_RatePlan | IConnected_RatePlanItem): Promise<IConnected_ListOf<IConnected_Rate>>

    // Room
    getRooms(
        hotelId?: ID,
        params?: any
    ): Promise<IConnected_ListOf<IConnected_Room>>;

    getRoomById(roomId: ID, params?: any): Promise<IConnected_Room>;
}
