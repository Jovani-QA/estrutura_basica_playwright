import { test, expect } from '@playwright/test';
import config from '../../playwright.config';
import { LoginPage } from '../../pages/login_page/LoginPage';

test.only('Realizar login válido', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await page.goto(config.use?.baseURL as string); 
  //await page.goto('/'); 
  await loginPage.login('standard', 'secret_sauce');
  await page.pause(); // Mantém o navegador aberto após o teste
});
