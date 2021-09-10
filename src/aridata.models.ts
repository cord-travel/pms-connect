import { ID } from "./models";

interface IConnected_ARIDataRestrictions {
    closed: boolean
    closed_on_arrival: boolean
    closed_on_departure: boolean
}
export interface IConnected_ARIDataTimeSlice {

    rateplan_id: ID
    room_type_id: ID
    available: number
    restrictions: IConnected_ARIDataRestrictions

}

export interface IConnected_ARIDataPayload {

    account_id: ID
    hotel_id: ID
    time_slices: IConnected_ARIDataTimeSlice[]

}