import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/wiki_login'

test('login_logout_test', async ({ page }) => {

  const Login = new LoginPage(page)

  await Login.gotoLoginPage()
  await Login.login('Antaltesztelo', 'Tesztelo01')
  await Login.logout()
  await page.close()
  
});
