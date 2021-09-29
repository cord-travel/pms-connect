import { ID } from './models';

interface IConnected_SubscriptionDefinitionBase {
  hotel_id: ID;
  channel_code: string;
  endpoint_url: string;
  rate_plan_ids: string[];
  number_of_days?: number;
  enabled?: boolean;
}

export interface IConnected_SubscriptionDefinition
  extends IConnected_SubscriptionDefinitionBase {
  id: ID;
}

export interface IConnected_SubscriptionBody
  extends IConnected_SubscriptionDefinitionBase {}

export enum IConnected_SUBSCRIPTION_EVENTS {
  sync = 'sync',
  disable = 'disable',
  enable = 'enable'
}
