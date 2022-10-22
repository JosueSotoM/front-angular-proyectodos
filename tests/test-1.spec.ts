import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://umg.edu.gt/');

  await page.getByText('“Me agrada, Dios mío, hacer tu voluntad; tu ley la llevo dentro de mí».” Salmos').click();

  await page.getByRole('link', { name: 'Pagar la Universidad' }).click();
  await expect(page).toHaveURL('https://umg.edu.gt/');

  await page.locator('label > img').click();

  await page.locator('li > img').first().click();

  await page.getByRole('heading', { name: 'Facultades' }).click();

});