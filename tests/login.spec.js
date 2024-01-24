// @ts-check
import { test, expect } from '@playwright/test';

//Category: Positive
test('Semua terisi valid', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByPlaceholder('Email', { exact: true }).click();
  await page.getByPlaceholder('Email', { exact: true }).fill('izra.aliya28@gmail.com');
  await page.getByPlaceholder('Password', { exact: true }).click();
  await page.getByPlaceholder('Password', { exact: true }).fill('123456');
  await page.getByRole('button', { name: 'Masuk' }).click();
});

//Category: Negative
test('Semua field tidak terisi', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login'); // Set timeout to 60 seconds
  await page.getByPlaceholder('Email', { exact: true }).click();
  await page.getByRole('button', { name: 'Masuk' }).click();
  await page.getByText('Email atau password tidak boleh kosong').click();
});

test('email invalid dan password kosong', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByPlaceholder('Email', { exact: true }).click();
  await page.getByPlaceholder('Email', { exact: true }).fill('asdds@gmail.com');
});

test('email invalid dan password invalid', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByPlaceholder('Password', { exact: true }).click();
  await page.getByPlaceholder('Password', { exact: true }).fill('123');
});

test('email invalid dan password valid', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByPlaceholder('Email', { exact: true }).click();
  await page.getByPlaceholder('Email', { exact: true }).fill('raji@gmail.com');
  await page.getByPlaceholder('Password', { exact: true }).click();
  await page.getByPlaceholder('Password', { exact: true }).fill('123456');
  await page.getByRole('button', { name: 'Masuk' }).click();
  await page.getByText('Email atau password anda salah').click();
  });

test('email valid dan password invalid', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByPlaceholder('Email', { exact: true }).click();
  await page.getByPlaceholder('Email', { exact: true }).fill('izra.aliya28@gmail.com');
  await page.getByPlaceholder('Password', { exact: true }).click();
  await page.getByPlaceholder('Password', { exact: true }).fill('131ab');
  await page.getByRole('button', { name: 'Masuk' }).click();
  await page.locator('div').filter({ hasText: /^Password anda salah\.$/ }).click();
});

test('email valid dan password kosong', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByPlaceholder('Email', { exact: true }).click();
  await page.getByPlaceholder('Email', { exact: true }).fill('izra.aliya28@gmail.com');
});









