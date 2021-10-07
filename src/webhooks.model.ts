import { ID } from './models';

export interface IConnected_WebHookDefinition {
  id?: string;
  end_point_url: string;
  topics?: string[]; // Reservation, Folio, Invoice, RatePlan, Group, Block, Unit, NightAudit, Fiscalization, Booking, Company, UnitGroup, Maintenance, Account, Property
  hotel_ids: string[];
}

export interface IConnected_WebHook_CreateResponse {
  id: string;
}

export enum ICONNECTED_WEBHOOK_ENTITY {
  account = 'account',
  hotel = 'hotel',
  reservation = 'reservation',
  booking = 'booking',
  'room-type' = 'room-type',
  folio = 'folio',
  invoice = 'invoice',
  'rate-plan' = 'rate-plan',
  'maintenance' = 'Maintenance',
  'system' = 'system'
}

export enum ICONNECTED_WEBHOOK_EVENT_TYPE {
  healthcheck = 'healthcheck',
  'set-to-live' = 'set-to-live',
  suspended = 'suspended',
  created = 'created',
  changed = 'changed',
  deleted = 'deleted',
  amended = 'amended',
  'checked-in' = 'checked-in',
  'checked-out' = 'checked-out',
  'set-to-no-show' = 'set-to-no-show',
  'unit-assigned' = 'unit-assigned',
  'unit-unassigned' = 'unit-unassigned',
  canceled = 'canceled',
  confirmed = 'confirmed',
  released = 'released',
  washed = 'washed',
  closed = 'closed',
  'balance-changed' = 'balance-changed',
  reopened = 'reopened',
  'charges-changed' = 'charges-changed',
  'charge-posted' = 'charge-posted',
  'debitor-changed' = 'debitor-changed',
  'transitory-charge-posted' = 'transitory-charge-posted',
  'allowance-posted' = 'allowance-posted',
  'payment-posted' = 'payment-posted',
  'refund-posted' = 'refund-posted',
  'charge-moved-from-folio' = 'charge-moved-from-folio',
  'transitory-charge-moved-from-folio' = 'transitory-charge-moved-from-folio',
  'payment-moved-from-folio' = 'payment-moved-from-folio',
  'refund-moved-from-folio' = 'refund-moved-from-folio',
  'charge-moved-to-folio' = 'charge-moved-to-folio',
  'transitory-charge-moved-to-folio' = 'transitory-charge-moved-to-folio',
  'payment-moved-to-folio' = 'payment-moved-to-folio',
  'refund-moved-to-folio' = 'refund-moved-to-folio',
  'succeeded' = 'succeeded'
}

export interface IConnected_Webhook_Payload {
  entity: ICONNECTED_WEBHOOK_ENTITY;
  type: ICONNECTED_WEBHOOK_EVENT_TYPE;
  entity_id: string;
  hotel_id: string;
  account_id: string;
  timestamp: number;
}
