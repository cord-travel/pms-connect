export interface ILocationAddress {
  address: string;
  postal_code?: string;
  city?: string;
  country_code: string;
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
  type?: string; // ENUM: Absolute, Percent
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
