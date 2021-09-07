import { ID } from "./models";

export interface IConnected_WebHookDefinition {
    id?: string
    end_point_url: string
    topics?: string[] // Reservation, Folio, Invoice, RatePlan, Group, Block, Unit, NightAudit, Fiscalization, Booking, Company, UnitGroup, Maintenance, Account, Property 
    hotel_ids: string[]
}

export interface IConnected_WebHook_CreateResponse {
    id: string
}