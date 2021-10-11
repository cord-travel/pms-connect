import { ID } from './models';

interface IConnected_ARIDataRestrictions {
  min_advance_booking_period?: string;
  max_advance_booking_period?: string;
  closed: boolean;
  closed_on_arrival: boolean;
  closed_on_departure: boolean;
  min_length_of_stay: number;
  max_length_of_stay: number;
}
export interface IConnected_ARIDataTimeSlice {
  rateplan_id: ID;
  room_type_id: ID;
  available: number;
  prices: IConnected_TimeSlicePrice[];
  restrictions: IConnected_ARIDataRestrictions;
  from: string;
  to: string;
}

export interface IConnected_ARIDataPayload {
  account_id: ID;
  hotel_id: ID;
  time_slices: IConnected_ARIDataTimeSlice[];
}

export interface IConnected_TimeSlicePrice {
  adults: number;
  price: IConnected_RatePlanPrice;
}
export interface IConnected_RatePlanPrice {
  gross_amount: number;
  before_tax: number;
  after_tax: number;
  taxes?: IConnected_PriceTax;
  currency?: string;
}
export interface IConnected_PriceTax {
  vat: number;
  city_tax?: number;
}
