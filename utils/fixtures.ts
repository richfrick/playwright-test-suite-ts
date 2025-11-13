import { test as base } from '@playwright/test';
import { RequestHandler } from './request-handler';
import { APILogger } from './logger';
import { config } from '../api-test.config';

export type TestOpions = {
  api: RequestHandler;
  config: typeof config;
};

export const test = base.extend<TestOpions>({
  api: async ({ request }, use) => {
    const logger = new APILogger();
    const requestHandler = new RequestHandler(request, config.appUrl, logger);
    await use(requestHandler);
  },
  config: async ({}, use) => {
    await use(config);
  },
});
