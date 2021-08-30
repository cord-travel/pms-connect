export type ID = string | number
export interface BasicObject {
    [key: string]: string | number | null
}

export interface ILocationAddress {
    address: string
    postal_code?: string
    city?: string
    country_code: string
}
export interface IMultiLanguageObject {
    en: string  // English
    de?: string // german
    es?: string // Spanish
    nl?: string // Dutch
    fr?: string // French
}

export interface IDateRange {
    from: string | Date
    to: string | Date
}

// Surcharge model

export interface ISurchargeModel {
    adults: number; //The total numbers of adults
    type?: string[] // ENUM: Absolute, Percent
    value: number
}
export interface IConnected_ListOf<T> {
    count?: number
    data: T[]

}

export interface IConnected_Account {
    id: ID
    code: ID
    name: string
    description?: string
    type?: string
    company_name?: string
    image_url?: string


}
export interface IConnected_Hotel {

    id: ID
    name: IMultiLanguageObject
    description: IMultiLanguageObject
    company_name?: string
    timezone?: string  // Location timezone
    location?: ILocationAddress
    logo?: string
    type?: string
    currency_code?: string
    is_active?: boolean

}

export interface IConnected_RoomType {
    id: ID
    hotel_id?: ID
    code?: ID
    name: IMultiLanguageObject
    description: IMultiLanguageObject
    max_capacity: number
    no_of_rooms: number,
    is_active: boolean,
    type?: ID
    images?: string[]

}


export interface IConnected_Room {
    id: ID
    code: ID

}




// RATE PLANS

export interface IConnected_MonetaryValue {
    amount: number
    currency: string

}

export interface IConnected_DateRange {
    from: string
    to: string
}

export interface IConnected_Period {
    hours: number
    days: number
    months: number
}

export interface IConnected_Policy {
    id: ID
    code?: string
    name: IMultiLanguageObject
    description: IMultiLanguageObject
}
export interface IConnected_CancelationPolicy extends IConnected_Policy {

    period_prior_to_arrival: IConnected_DateRange
}

export interface IConnected_TimeSliceDefinition {
    id: string
    name: string
    description: string
    checkInTime: string
    checkOutTime: string
}

export interface IConnected_BookingRestrictionsModel {
    minAdvance: IConnected_Period
    maxAdvance: IConnected_Period
    lateBookingUntil: string // Time value

}

export interface IConnected_PricingRuleModel {

    baseRatePlan?: IConnected_RatePlan
    type: string[]
    value: number
}


export interface IApaleoRatePlanAgeCategory {

    id: string
    surcharges: ISurchargeModel

}

export interface IConnected_RatePlanService {
    serviceId: string
    gross_price: IConnected_MonetaryValue
    pricing_mode?: string

}


// List item
export interface IConnected_RatePlanItem {

    id: ID
    code?: ID
    name?: IMultiLanguageObject
    description?: IMultiLanguageObject
    is_bookable?: boolean
    channel_codes: string[]
    rates_range?: IDateRange
}

export interface IConnected_RatePlan {

    id: ID
    code?: ID
    name: IMultiLanguageObject
    description: IMultiLanguageObject
    channel_codes: string[]
    minimum_guarantee_type: string[]
    price_calculation_mode?: string[]
    booking_periods?: IDateRange[]
    rates_range?: IDateRange
    promo_codes?: string[]
    is_bookable?: boolean
    is_subject_to_city_tax?: boolean
    surcharges?: ISurchargeModel[]
    cancellation_policy: IConnected_CancelationPolicy
    no_show_policy: IConnected_Policy
    time_slice_definition: IConnected_TimeSliceDefinition
    restrictions: IConnected_BookingRestrictionsModel
    pricing_rule: IConnected_PricingRuleModel
    age_categories: IApaleoRatePlanAgeCategory[]
    included_services: IConnected_RatePlanService[]

}

//

export interface IConnected_Rate {

    id: ID


}

