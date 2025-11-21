import { expect } from '../../utils/custom-expect';
import { test } from '../../utils/fixtures';

test('health endpoint', async ({ api }) => {
  const response = await api.path('/api/healthz').get(200);

  await expect(response).shouldMatchSchema('healthz', 'GET_healthz');
});
