import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByRole('heading', { name: 'My Bookshelf' })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Add a book$/ }).click();
  await page.getByRole('textbox', { name: 'Title' }).click();
  await page.getByRole('textbox', { name: 'Title' }).fill('E2E Test');
  await page.getByRole('textbox', { name: 'Author' }).click();
  await page.getByRole('textbox', { name: 'Author' }).fill('Author Test');
  await page.getByRole('checkbox', { name: 'Favorite' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('cell', { name: 'E2E Test' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Title' })).toBeVisible();
  await expect(page.locator('th').filter({ hasText: 'Author' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Favorite?' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Category' })).toBeVisible();
});

