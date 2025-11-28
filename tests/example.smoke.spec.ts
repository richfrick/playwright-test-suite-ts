import { expect } from '@playwright/test';
import { test } from '../utils/fixtures';

test('Health check endpoint', async ({ api }) => {
  const response = await api.path('/api/healthz').get(200);

  expect(response.msg).toEqual('all good');
});
