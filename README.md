# pms-connect :hotel:

A common interface for handling pms data at @cord-travel

## Available Adapters :nut_and_bolt:

| Repository                                                                           | PMS       | API Driver | Web Hooks              | ARI Subscription       | Booking |
| ------------------------------------------------------------------------------------ | --------- | ---------- | ---------------------- | ---------------------- | ------- |
| [@cord-travel/pms-connect-apaleo](https://github.com/cord-travel/pms-connect-apaleo) | Apaleo 🦁 | Rest       | :white_check_mark: Yes | :white_check_mark: Yes | [WIP]   |

## Create New Adapters :honey_pot:

Create your own pms connect adapters by implement the `IBaseAdapter` interface

Example :hatching_chick: :

```typescript
import {
  IBaseAdapter,
  RestRequestDriver,
  Models
} from '@cord-travel/pms-connect';

class MyAdapter extends RestRequestDriver implements IBaseAdapter {
  // Implement all available methods here...
  // ...
}
```

## API Reference :books: [WIP]

### `IBaseAdapter` Interface methods

This methods are implemented in adapters. all methods return Promise<Model>

#### Account

| Method     | Drescription                   | Params | Return |
| ---------- | ------------------------------ | ------ | ------ |
| getAccount | Get Authorized account details | None   |        |

#### Hotel

| Method       | Description                      | Params | Return                              |
| ------------ | -------------------------------- | ------ | ----------------------------------- |
| getHotels    | List hotels                      | None   | IConnected_ListOf<IConnected_Hotel> |
| getHotelById | Get a single hotel details by id | ID<ID> | IConnected_Hotel                    |

#### RoomType

| Method          | Description      | Params         | Return                                 |
| --------------- | ---------------- | -------------- | -------------------------------------- |
| getRoomsTypes   | List room types  | HotelId<ID>    | IConnected_ListOf<IConnected_RoomType> |
| getRoomTypeById | Room type detail | RoomTypeId<ID> | IConnected_RoomType                    |

#### RatePlan

| Method                | Description                | Params      | Return                                 |
| --------------------- | -------------------------- | ----------- | -------------------------------------- |
| getRatePlansByHotelId | Get rateplan list by hotel | hotelId<ID> | IConnected_ListOf<IConnected_RatePlan> |
| getRatePlanById       | Get rateplan details       | id<ID>      | IConnected_RatePlan                    |

#### Rate

| Method             | Description | Params                                                     | Return                             |
| ------------------ | ----------- | ---------------------------------------------------------- | ---------------------------------- |
| getRatesByRatePlan | Get rates   | rateplan<IConnected_RatePlan> or <IConnected_RatePlanItem> | IConnected_ListOf<IConnected_Rate> |

#### Policies

| Method                    | Description                       | Params      | Return                                           |
| ------------------------- | --------------------------------- | ----------- | ------------------------------------------------ |
| getCancellationPolicies   | Get list of cancellation policies | hotelId<ID> | IConnected_ListOf<IConnected_CancellationPolicy> |
| getCancellationPolicyById | Cancellation policy               | id<ID>      | IConnected_CancellationPolicy                    |
| getNoShowPolicies         | List of no show policies          | hotelId<ID> | IConnected_ListOf<IConnected_NoShowPolicy>       |
| getNoShowPolicyById       | No show policy                    | id<ID>      | IConnected_NoShowPolicy                          |

#### Categories

| Method             | Description                | Params      | Return                                    |
| ------------------ | -------------------------- | ----------- | ----------------------------------------- |
| getAgeCategories   | Get list of age categories | hotelId<ID> | IConnected_ListOf<IConnected_AgeCategory> |
| getAgeCategoryById | Get age catgory by id      | id<ID>      | IConnected_AgeCategory                    |

#### Services

| Method         | Description          | Params      | Return                                |
| -------------- | -------------------- | ----------- | ------------------------------------- |
| getServices    | Get list of services | hotelId<ID> | IConnected_ListOf<IConnected_Service> |
| getServiceById | Get service by id    | id<ID>      | IConnected_Service                    |

#### Promo codes

| Method        | Description             | Params | Return                                  |
| ------------- | ----------------------- | ------ | --------------------------------------- |
| getPromoCodes | Get list of promo codes | none   | IConnected_ListOf<IConnected_PromoCode> |

#### Webhook Subscriptions

| Method          | Description                    | Params                              | Return                         |
| --------------- | ------------------------------ | ----------------------------------- | ------------------------------ |
| webhooksList    | List webhook subscriptions     | none                                | IConnected_WebHookDefinition[] |
| webhooksGetById | Get webhook subscription by id | id<ID>                              | IConnected_WebHookDefinition   |
| webhooksCreate  | Create webhook subscription    | body <IConnected_WebHookDefinition> | id<string>                     |
| webhooksUpdate  | Update webhook subscription    | body <IConnected_WebHookDefinition> | id<string>                     |
| webhooksDelete  | Delete webhook subscription    | id<ID>                              | id<string>                     |

#### ARI Data subscription

| Method                      | Description                 | Params                            | Return                              |
| --------------------------- | --------------------------- | --------------------------------- | ----------------------------------- |
| getARISubscriptions         | List ari subscriptions      | none                              | IConnected_SubscriptionDefinition[] |
| getARISubscriptionById      | Get subscription details    | id<ID>                            | IConnected_SubscriptionDefinition   |
| createARISubscription       | Create new ari subscription | data<IConnected_SubscriptionBody> | id<string>                          |
| updateARISubscription       | Update ari subscription     | data<IConnected_SubscriptionBody> | id<string>                          |
| deleteARISubscription       | Delete ari subscription     | id<ID>                            | id<string>                          |
| triggerARISubscriptionEvent | Trigger ari events          | id<id>, event<string>             | id<string>                          |
