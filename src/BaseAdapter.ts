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
  IConnected_AgeCategory,
  IConnected_Service,
  IConnected_PromoCode,
  IConnected_RoomType_AvailabilityResponse,
  IConnected_WebHookDefinition,
  IConnected_SubscriptionDefinition,
  IConnected_SubscriptionBody,
  IConnected_SUBSCRIPTION_EVENTS
} from './models';

import { IConnected_DateRange } from './shared.models'

export interface IBaseAdapter {
  name: string
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
  ): Promise<IConnected_ListOf<IConnected_RatePlan>>;

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
  getRatesByRatePlan(
    ratePlan: IConnected_RatePlan | IConnected_RatePlanItem
  ): Promise<IConnected_ListOf<IConnected_Rate>>;

  // Cancelation policies
  /**
   * Get Cancellation policy list
   * @param propertyId
   * @param params
   */
  getCancellationPolicies(
    propertyId: ID,
    params?: any
  ): Promise<IConnected_ListOf<IConnected_CancellationPolicy>>;

  /**
   * Get cancellation policy by id
   * @param cancellationPolicyId
   * @param params
   */
  getCancellationPolicyById(
    cancellationPolicyId: ID,
    params?: any
  ): Promise<IConnected_CancellationPolicy>;

  // Connected No show policy
  /**
   * Get No show policy list
   * @param propertyId
   * @param params
   */

  getNoShowPolicies(
    propertyId: ID,
    params?: any
  ): Promise<IConnected_ListOf<IConnected_NoShowPolicy>>;

  /**
   * Get no show policy by id
   * @param noShowPolicyId
   * @param params
   */
  getNoShowPolicyById(
    noShowPolicyId: ID,
    params?: any
  ): Promise<IConnected_NoShowPolicy>;

  // Age category

  /**
   * Get age category list
   * @param propertyId
   * @param params
   */
  getAgeCategories(
    propertyId: ID,
    params?: any
  ): Promise<IConnected_ListOf<IConnected_AgeCategory>>;

  /**
   * Get age category by id
   * @param ageCategoryId
   * @param params
   */
  getAgeCategoryById(
    ageCategoryId: ID,
    params?: any
  ): Promise<IConnected_AgeCategory>;

  // Services

  getServices(
    hotelId: ID,
    params?: any
  ): Promise<IConnected_ListOf<IConnected_Service>>;

  getServiceById(serviceId: ID, params?: any): Promise<IConnected_Service>;

  // Promo Codes
  /**
   * List promo codes
   * @param hotelId
   * @param params
   */
  getPromoCodes(
    hotelId: ID,
    params?: any
  ): Promise<IConnected_ListOf<IConnected_PromoCode>>;


  // Availability 
  getAvaialability(hotel_id: ID, dateRange: IConnected_DateRange): Promise<IConnected_RoomType_AvailabilityResponse>

  // Web hooks related methods (create, update, delete, list, webhooks)

  webhooksList(): Promise<IConnected_WebHookDefinition[]> | IConnected_WebHookDefinition[]
  webhooksGetById(id: ID): Promise<IConnected_WebHookDefinition> | IConnected_WebHookDefinition
  webhooksCreate(webhookDefinition: IConnected_WebHookDefinition): Promise<ID> | ID
  webhooksUpdate(id: ID, webhookDefinition: IConnected_WebHookDefinition): Promise<ID> | ID
  webhooksDelete(webHookId: ID): Promise<ID> | ID


  // ARI Subscriptions

  getARISubscriptions(): Promise<IConnected_SubscriptionDefinition[]>
  getARISubscriptionById(id: ID): Promise<IConnected_SubscriptionDefinition>
  createARISubscription(data: IConnected_SubscriptionBody): Promise<ID>
  updateARISubscription(id: ID, data: IConnected_SubscriptionBody): Promise<ID>
  deleteARISubscription(id: ID): Promise<ID>
  triggerARISubscriptionEvent(id: ID, event: IConnected_SUBSCRIPTION_EVENTS): Promise<ID>


  //TODO: Booking Apis


}
