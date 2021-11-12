import { IConnected_MonetaryValue } from './shared.models'
import { ID, ILocationAddress } from './models'

export interface IConnected_CreateBookPayload {
    booker: IConnected_Booker
    comment?: string
    channel_code: string
    source?: string
    reservations: IConnected_ReservationCreateBody[]
    payment_account?: IConnected_PaymentAccount
    credit_card?: IAConnected_CreditCard
    transaction_reference?: string

}
export interface IConnected_Booker {
    title: string
    first_name: string
    last_name: string
    middle_name?: string
    email?: string
    phone?: string
    country_code: string
    birth_date?: string
}

export interface IConnected_ReservationCreateBody {
    arrival: string;// ISO date
    departure: string
    adults: number
    external_id: string
    time_slices: IConnected_ReservationTimeSlice[]
    services?: IConnected_ReservationService[]
    primary_guest?: IConnected_Guest
    additional_guests?: IConnected_Guest[]
    travel_purpose?: string
    pricing_type?: string
    pre_payment_amount?: IConnected_MonetaryValue
    children_ages?: number[]

}

export interface IConnected_ReservationTimeSlice {
    rate_plan_id: ID
    total_amount: IConnected_MonetaryValue
}

export interface IConnected_ReservationService {
    service_id: ID
    count: number
    amount: IConnected_MonetaryValue
    dates: IConnected_ReservationServiceDate[]
}

export interface IConnected_ReservationServiceDate {
    date: string
    amount: IConnected_MonetaryValue
    count: number
}


export interface IConnected_BookingResponse {
    id: ID
    reservations: ID[]
}

export interface IConnected_Guest {

    title?: string
    first_name: string
    middle_name?: string
    last_name: string
    email?: string
    phone?: string
    address?: ILocationAddress
    country_code?: string
    identification_number?: number
    identification_type?: string
    company?: IConnected_PersonCompany


}


export interface IConnected_PersonCompany {
    name: string
    tax_id: string
}

export interface IConnected_PaymentAccount {
    account_number: string // masked credit card number or last 4 digits
    account_holder: string // card holder
    expiry_month: string // The credit card's expiration month
    expiry_year: string
    payment_method: string
    payer_email: string
    payer_reference: string
    is_virtual: boolean
    inactive_reason?: string
}
export interface IAConnected_CreditCard {
    card_number: string
    card_holder: string
    cvc?: string
    expiry_month: string
    expiry_year: string
    card_type: string
    payer_email?: string
    is_virtual?: string
    activation_time?: string
}