import { test as base } from '@playwright/test';
import { RequestHandler } from './request-handler';
import { APILogger } from './logger';

export type TestOpions = {
  api: RequestHandler;
};

export const test = base.extend<TestOpions>({
  api: async ({ request }, use) => {
    const baseUrl = 'http://localhost:9090/api';
    const logger = new APILogger();
    const requestHandler = new RequestHandler(request, baseUrl, logger);
    await use(requestHandler);
  },
});
