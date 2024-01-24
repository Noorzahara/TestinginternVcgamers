// @ts-check
const { test, expect } = require('@playwright/test');

//Category: Positive
test('Menemukan produk', async ({ page }) => {
  test.setTimeout(500000);
  await page.goto('https://www.vcgamers.com');
  await page.getByPlaceholder('placholder').click();
  await page.getByPlaceholder('placholder').fill('diamond');
  await page.getByPlaceholder('placholder').press('Enter');
  await page.goto('https://www.vcgamers.com/marketplace/products?page=1&sorter=termurah&sortby=price&sorttype=asc&searchby=name&search=diamond');
  await page.getByRole('link', { name: 'Foto Top Up Game Farlight 84 dari Tartarus 146656 5 Diamonds Farlight 84' }).click();
  await page.goto('https://www.vcgamers.com/dagangan/farlight-84-farlight-84-diamonds-5-diamonds-672-tartarus/146656');
});

//Category: Negative
test('Tidak Menemukan produk', async ({ page }) => {
  test.setTimeout(500000);
  await page.goto('https://www.vcgamers.com');
  await page.getByPlaceholder('placholder').click();
  await page.getByPlaceholder('placholder').fill('sepatu');
  await page.getByPlaceholder('placholder').press('Enter');
  await page.goto('https://www.vcgamers.com/marketplace/products?page=1&sorter=termurah&sortby=price&sorttype=asc&searchby=name&search=sepatu');
  await page.getByText('Produk tidak ditemukan').click();await page.getByText('Produk tidak ditemukan').click();
});