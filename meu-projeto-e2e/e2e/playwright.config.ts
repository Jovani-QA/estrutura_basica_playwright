import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e/specs', // 👈 isso diz ao Playwright onde procurar os testes
  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['html', { outputFolder: 'reports' }]],
});
