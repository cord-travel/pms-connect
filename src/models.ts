import {
  ILocationAddress,
  IMultiLanguageObject,
  ISurchargeModel,
  IConnected_MonetaryValue,
  IConnected_DateRange,
  IConnected_Period
} from './shared.models'
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
export interface IConnected_Hotel {
  id: ID;
  name: IMultiLanguageObject;
  description: IMultiLanguageObject;
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
export interface IConnected_CancelationPolicy extends IConnected_Policy {
  period_prior_to_arrival: IConnected_Period;
}

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
  cancellation_policy: IConnected_CancelationPolicy;
  no_show_policy: IConnected_Policy;
  time_slice_definition: IConnected_TimeSliceDefinition;
  restrictions: IConnected_BookingRestrictionsModel;
  pricing_rule: IConnected_PricingRuleModel;
  age_categories: IApaleoRatePlanAgeCategory[];
  included_services: IConnected_RatePlanService[];
}

//


export interface IConnected_Rate {
  from: string
  to: string
  price?: IConnected_MonetaryValue
  included_services_price?: IConnected_MonetaryValue
  restrictions?: IConnected_RateRestriction
  calculated_prices?: IConnected_CalculatedRate[]
}

export interface IConnected_RateRestriction {
  closed: boolean
  closed_on_arrival: boolean
  closed_on_departure: boolean
  min_length_of_stay?: number
  max_length_of_stay?: number
}

export interface IConnected_CalculatedRate {
  adults: number
  price: IConnected_MonetaryValue
  included_services_price?: IConnected_MonetaryValue
}


export interface IConnected_PromoCode {
  id?: ID
  code: string
  related_rateplan_ids?: string[]
  name?: IMultiLanguageObject
  description?: IMultiLanguageObject
}
