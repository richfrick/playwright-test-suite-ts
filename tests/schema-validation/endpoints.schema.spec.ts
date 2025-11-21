import { expect } from '../../utils/custom-expect';
import { test } from '../../utils/fixtures';

test('Api Endpoints', async ({ api }) => {
  const response = await api.path('/api').get(200);
  await expect(response).shouldMatchSchema('api', 'GET_api');
});
