import {
    ID,
    IConnected_ListOf,
    IConnected_Account,
    IConnected_Hotel,
    IConnected_RoomType,
    IConnected_RatePlan,
    IConnected_RatePlanItem,
    IConnected_Rate,
    IConnected_CancellationPolicy,
    IConnected_NoShowPolicy,
    IConnected_PromoCode
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



    // Cancelation policies

    getCancellationPolicies(propertyId: ID, params: any): Promise<IConnected_ListOf<IConnected_CancellationPolicy>>
    getCancellationPolicyById(cancellationPolicyId: ID, params: any): Promise<IConnected_CancellationPolicy>

    // Connected No show policy

    getNoShowPolicies(propertyId: ID, params: any): Promise<IConnected_ListOf<IConnected_NoShowPolicy>>
    getNoShowPolicyById(noShowPolicyId: ID): Promise<IConnected_NoShowPolicy>
    // Promo Codes
    getPromoCodes(hotelId: ID, params?: any): Promise<IConnected_ListOf<IConnected_PromoCode>>


}
