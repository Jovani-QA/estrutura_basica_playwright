import { test, expect } from '@playwright/test';
import config from '../config';
import { LoginPage } from '../page/LoginPage';

test.only('Testes', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await page.goto(config.use?.baseURL as string); // Usa a baseURL do config.ts
  await loginPage.login('standard', 'secret_sauce');

  await page.pause(); // Mantém o navegador aberto após o teste
});
