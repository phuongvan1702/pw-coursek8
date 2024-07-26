import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('verify title', async ({ page }) => {
  await page.goto('https://pw-blog.congcu.org/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Học automation test từ chưa biết gì/);
});

test('verify started link', async ({ page }) => {
  await page.goto('https://pw-blog.congcu.org/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Khóa học automation test cho người chưa biết gì' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Thông tin khoá học' })).toBeVisible();
});

test('test gitlab', async ({ page }) => {
  await page.goto('https://dantri.com.vn/');

  // Click the get started link.
  await page.getByRole('link', { name: 'TIN MỚI NHẤT' }).click();
});