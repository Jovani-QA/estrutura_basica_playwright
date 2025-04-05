import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  // Selectors como propriedades privadas e readonly
  private readonly USERNAME_INPUT = '[data-test="username"]';
  private readonly PASSWORD_INPUT = '[data-test="password"]';
  private readonly LOGIN_BUTTON = '[data-test="login-button"]';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.locator(this.USERNAME_INPUT).fill(username);
    await this.page.locator(this.PASSWORD_INPUT).fill(password);
    await this.page.locator(this.LOGIN_BUTTON).click();
  }
}
