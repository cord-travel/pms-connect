export interface ILocationAddress {
  address_line_1: string;
  address_line_2?: string;
  postal_code?: string;
  city?: string;
  country_code: string;
}

export enum AMOUNT_VALUE_TYPE {
  Absolute = 'Absolute',
  Percent = 'Percent'
}

export interface IMultiLanguageObject {
  en: string; // English
  de?: string; // german
  es?: string; // Spanish
  nl?: string; // Dutch
  fr?: string; // French
}

// Surcharge model

export interface ISurchargeModel {
  adults: number; //The total numbers of adults
  type: AMOUNT_VALUE_TYPE; // ENUM: Absolute, Percent
  value: number;
}

export interface IConnected_MonetaryValue {
  amount: number;
  currency: string;
}

export interface IConnected_DateRange {
  from: string; // ISO Date String
  to: string; // ISO Date String
}

export interface IConnected_Period {
  hours: number;
  days: number;
  months: number;
}
