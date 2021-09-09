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
