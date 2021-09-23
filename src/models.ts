export * from './webhooks.model';
export * from './subscription.models';
import {
  ILocationAddress,
  IMultiLanguageObject,
  ISurchargeModel,
  IConnected_MonetaryValue,
  IConnected_DateRange,
  IConnected_Period
} from './shared.models';
export type ID = string | number;
export interface BasicObject {
  [key: string]: string | number | null;
}

export interface IConnected_ListOf<T> {
  count?: number;
  data: T[];
}

export interface IConnected_Account {
  id: ID;
  code: ID;
  name: string;
  description?: string;
  type?: string;
  company_name?: string;
  image_url?: string;
}

export interface IConnected_Language {
  code: string;
  default: boolean;
}
export interface IConnected_Hotel {
  id: ID;
  name: IMultiLanguageObject;
  description: IMultiLanguageObject;
  no_of_rooms?: number
  company_name?: string;
  timezone?: string; // Location timezone
  location?: ILocationAddress;
  logo?: string;
  type?: string;
  currency_code?: string;
  is_active?: boolean;
}

export interface IConnected_RoomType {
  id: ID;
  hotel_id?: ID;
  code?: ID;
  name: IMultiLanguageObject;
  description: IMultiLanguageObject;
  max_capacity: number;
  no_of_rooms: number;
  is_active: boolean;
  type?: ID;
  images?: string[];
}

export interface IConnected_Room {
  id: ID;
  code: ID;
}

// RATE PLANS

export interface IConnected_Policy {
  id: ID;
  code?: string;
  name: IMultiLanguageObject;
  description: IMultiLanguageObject;
}
export interface IConnected_EmbededCancelationPolicy
  extends IConnected_Policy {}

export interface IConnected_TimeSliceDefinition {
  id: string;
  name: string;
  description: string;
  check_in_time: string;
  check_out_time: string;
}

export interface IConnected_BookingRestrictionsModel {
  min_advance: IConnected_Period;
  max_advance: IConnected_Period;
  late_booking_until: string; // Time value
}

export interface IConnected_PricingRuleModel {
  baseRatePlan?: IConnected_RatePlan;
  type: string;
  value: number;
}

export interface IApaleoRatePlanAgeCategory {
  id: string;
  surcharges: ISurchargeModel[];
}

export interface IConnected_RatePlanService {
  service_id: string;
  gross_price: IConnected_MonetaryValue;
  pricing_mode?: string;
}

// List item
export interface IConnected_RatePlanItem {
  id: ID;
  code?: ID;
  name?: IMultiLanguageObject;
  description?: IMultiLanguageObject;
  is_bookable?: boolean;
  channel_codes: string[];
  rates_range?: IConnected_DateRange;
  minimum_guarantee_type: string[];
  promo_codes: string[];
}

export interface IConnected_RatePlan {
  id: ID;
  code?: ID;
  name: IMultiLanguageObject;
  description: IMultiLanguageObject;
  channel_codes: string[];
  minimum_guarantee_type: string[];
  price_calculation_mode?: string[];
  booking_periods?: IConnected_DateRange[];
  rates_range?: IConnected_DateRange;
  promo_codes?: string[];
  is_bookable?: boolean;
  is_subject_to_city_tax?: boolean;
  surcharges?: ISurchargeModel[];
  cancellation_policy: IConnected_EmbededCancelationPolicy;
  no_show_policy: IConnected_Policy;
  time_slice_definition: IConnected_TimeSliceDefinition;
  restrictions: IConnected_BookingRestrictionsModel;
  pricing_rule: IConnected_PricingRuleModel;
  age_categories: IApaleoRatePlanAgeCategory[];
  included_services: IConnected_RatePlanService[];
}

//

export interface IConnected_Rate {
  from: string;
  to: string;
  price: IConnected_MonetaryValue;
  calculated_prices: IConnected_CalculatedRate[];
  included_services_price?: IConnected_MonetaryValue;
  restrictions?: IConnected_RateRestriction;
}

export interface IConnected_RateRestriction {
  closed: boolean;
  closed_on_arrival: boolean;
  closed_on_departure: boolean;
  min_length_of_stay?: number;
  max_length_of_stay?: number;
}

export interface IConnected_CalculatedRate {
  adults: number;
  price: IConnected_MonetaryValue;
  included_services_price?: IConnected_MonetaryValue;
}

export interface IConnected_PromoCode {
  id?: ID;
  code?: string;
  related_rateplan_ids?: string[];
  name?: IMultiLanguageObject;
  description?: IMultiLanguageObject;
}

// Cancelation Policies

export interface IConnected_CancellationPolicy {
  id: ID;
  code?: ID;
  hotel_id: ID;
  name: IMultiLanguageObject;
  description: IMultiLanguageObject;
  period_from_reference: IConnected_Period;
  reference?: string;
  fee?: IConnected_FeeDetailsModel;
}

interface IConnected_FeeDetailsModel {
  vat_type?: string;
  fixed_value?: IConnected_MonetaryValue;
  percent_value?: IConnected_PercentValueModel;
}

interface IConnected_PercentValueModel {
  percent: number;
  limit?: number;
  include_service_ids?: string[];
}

// No show policy
export interface IConnected_NoShowPolicy {
  id: string;
  hotel_id: ID;
  code?: string;
  name: IMultiLanguageObject;
  description: IMultiLanguageObject;
  fee: IConnected_FeeDetailsModel;
}

// Age Category

export interface IConnected_AgeCategory {
  id: ID;
  code?: ID;
  hotel_id: ID;
  min_age: number;
  max_age: number;
  name: IMultiLanguageObject;
}

// Service
export interface IConnected_Service {
  id: ID;
  code: ID;
  name: IMultiLanguageObject;
  description: IMultiLanguageObject;
  default_gross_price: IConnected_MonetaryValue;
  pricing_unit?: string; // ["Person","Room"]
  availability_mode?: string; // [ Arrival, Departure, Daily ]
  channel_codes: string[]; // The channel codes the service is sold through
  service_type?: string; // Other, Accommodation, FoodAndBeverages
}

// Availability

export interface IConnected_RoomType_AvailabilityResponse {
  time_slices: IConnected_RoomType_AvailabilityTimeSlice[];
}

export interface IConnected_RoomType_AvailabilityTimeSlice {
  from: string;
  to: string;
  total: IConnected_AvailabilityValues;
  room_types: IConnected_AvailabilityRoomTypeValues[];
}

export interface IConnected_AvailabilityRoomTypeValues
  extends IConnected_AvailabilityValues {
  room_type: IConnected_EmbedAvailableRoomType;
}

// Roomtype alias
interface IConnected_EmbedAvailableRoomType {
  id: ID;
  code: ID;
  name?: IMultiLanguageObject;
  description?: IMultiLanguageObject;
}
export interface IConnected_AvailabilityValues {
  physical_count: number;
  house_count: number;
  sold_count?: number;
  occupancy?: number;
  sellable_count?: number;
  allowed_overbooking_count?: number;
  maintenance?: IConnected_MaintenanceValues;
  block?: IConnected_BlockValues;
}

export interface IConnected_MaintenanceValues {
  out_of_service: number;
  out_of_order?: number;
  out_of_inventory?: number;
}

export interface IConnected_BlockValues {
  definite: number;
  tentative: number;
  picked: number;
  remaining: number;
}
