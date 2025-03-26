import { test, expect } from '@playwright/test';

test('Verifica título da página', async ({ page }) => {
  await page.goto('https://www.cypress.io/');
 // await expect(page).toHaveTitle(/Example Domain/);
});
