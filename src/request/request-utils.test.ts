import { toQueryString } from './request-utils';

test('Convert object to query string', () => {
  let qs = toQueryString({ page: 1, format: 'json' });

  expect(qs).toBe('page=1&format=json');
});
