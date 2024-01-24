// @ts-check
const { test, expect } = require('@playwright/test');

//Category: Positive
test('semua terisi valid', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByText('Buat akun', { exact: true }).click();
  await page.getByPlaceholder('Masukkan alamat email').click();
  await page.getByPlaceholder('Masukkan alamat email').fill('xyz@gmail.com');
  await page.getByPlaceholder('Password Min. 6 Karakter').click();
  await page.getByPlaceholder('Password Min. 6 Karakter').fill('123456');
  await page.getByPlaceholder('Ulangi Password').click();
  await page.getByPlaceholder('Ulangi Password').fill('123456');
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').click();
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').fill('81456789912');
  await page.locator('.min-w-\\[18px\\]').click();
  await page.getByRole('button', { name: 'Daftar' }).click();
  await page.goto('https://auth.vcgamers.com/login');
  });

//Category: Negative
  test('semua terisi valid, email sudah didaftarkan', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://auth.vcgamers.com/login');
    await page.getByText('Buat akun', { exact: true }).click();
    await page.getByPlaceholder('Masukkan alamat email').click();
    await page.getByPlaceholder('Masukkan alamat email').fill('abc@gmail.com');
    await page.getByPlaceholder('Password Min. 6 Karakter').click();
    await page.getByPlaceholder('Password Min. 6 Karakter').fill('123456');
    await page.getByPlaceholder('Ulangi Password').click();
    await page.getByPlaceholder('Ulangi Password').fill('123456');
    await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').click();
    await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').fill('9843245622');
    await page.locator('.min-w-\\[18px\\]').click();
    await page.getByRole('button', { name: 'Daftar' }).click();
    await page.locator('#login-page div').filter({ hasText: 'Email ini telah digunakan.' }).nth(4).click();
    });


test('semua terisi valid dan nomer telepon sudah didaftarkan sebelumnya', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByText('Buat akun', { exact: true }).click();
  await page.getByPlaceholder('Masukkan alamat email').click();
  await page.getByPlaceholder('Masukkan alamat email').fill('cvvt@gmail.com');
  await page.getByPlaceholder('Password Min. 6 Karakter').click();
  await page.getByPlaceholder('Password Min. 6 Karakter').fill('123456');
  await page.getByPlaceholder('Ulangi Password').click();
  await page.getByPlaceholder('Ulangi Password').fill('123456');
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').click();
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').fill('81456789912');
  await page.locator('.min-w-\\[18px\\]').click();
  await page.getByRole('button', { name: 'Daftar' }).click();
  await page.getByText('No. Ponsel / Whatsapp telah digunakan. Silakan gunakan nomor lain').click();
});

test('semua terisi dan pasword tidak sama dengan password diulang', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByText('Buat akun', { exact: true }).click();
  await page.getByPlaceholder('Masukkan alamat email').click();
  await page.getByPlaceholder('Masukkan alamat email').fill('qaproject23@gmail.com');
  await page.getByPlaceholder('Password Min. 6 Karakter').click();
  await page.getByPlaceholder('Password Min. 6 Karakter').fill('123');
  await page.getByPlaceholder('Ulangi Password').click();
  await page.getByPlaceholder('Ulangi Password').fill('3215');
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').click();
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').fill('833378912');
  await page.locator('.min-w-\\[18px\\]').click();
});


test('semua terisi, email invalid, dan password kurang dari 6 karakter ', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByText('Buat akun', { exact: true }).click();
  await page.getByPlaceholder('Masukkan alamat email').click();
  await page.getByPlaceholder('Masukkan alamat email').fill('qqqqqqqq2345@gmail.com');
  await page.getByPlaceholder('Password Min. 6 Karakter').click();
  await page.getByPlaceholder('Password Min. 6 Karakter').fill('123456');
  await page.getByPlaceholder('Ulangi Password').click();
  await page.getByPlaceholder('Ulangi Password').fill('123456');
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').click();
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').fill('92344451345');
  await page.locator('.min-w-\\[18px\\]').click();
});


test('semua terisi valid dan nomer telepon invalid ', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByText('Buat akun', { exact: true }).click();
  await page.getByPlaceholder('Masukkan alamat email').click();
  await page.getByPlaceholder('Masukkan alamat email').fill('qaproject@gmail.com');
  await page.getByPlaceholder('Password Min. 6 Karakter').click();
  await page.getByPlaceholder('Password Min. 6 Karakter').fill('123456');
  await page.getByPlaceholder('Ulangi Password').click();
  await page.getByPlaceholder('Ulangi Password').fill('123456');
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').fill('983123');
  await page.locator('.min-w-\\[18px\\]').click();
  await page.getByRole('button', { name: 'Daftar' }).click();
  await page.getByText('Masukkan No. Ponsel /').click();
  });
  
test('semua terisi valid dan email tidak terisi ', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByText('Buat akun', { exact: true }).click();
  await page.getByPlaceholder('Password Min. 6 Karakter').click();
  await page.getByPlaceholder('Password Min. 6 Karakter').fill('123456');
  await page.getByPlaceholder('Ulangi Password').click();
  await page.getByPlaceholder('Ulangi Password').fill('123456');
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').click();
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').fill('823456789812');
  await page.locator('.min-w-\\[18px\\]').click();
  });

test('semua terisi valid dan password tidak terisi ', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByText('Buat akun', { exact: true }).click();
  await page.getByPlaceholder('Masukkan alamat email').click();
  await page.getByPlaceholder('Masukkan alamat email').fill('qaproject23@gmail.com');
  await page.getByPlaceholder('Password Min. 6 Karakter').click();
  await page.getByPlaceholder('Password Min. 6 Karakter').fill('');
  await page.getByPlaceholder('Ulangi Password').click();
  await page.getByPlaceholder('Ulangi Password').fill('123456');
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').click();
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').fill('82331876890');
  await page.locator('#login-page div').filter({ hasText: 'Masuk ke Akunmu Lupa Password' }).nth(2).click();
  await page.locator('.min-w-\\[18px\\]').click();
  });
  
test('semua terisi valid dan ulangi password tidak terisi', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByText('Belum memiliki akun? Buat akun', { exact: true }).click();
  await page.getByText('Buat akun', { exact: true }).click();
  await page.getByPlaceholder('Masukkan alamat email').click();
  await page.getByPlaceholder('Masukkan alamat email').fill('qaproject23@gmail.com');
  await page.getByPlaceholder('Password Min. 6 Karakter').click();
  await page.getByPlaceholder('Password Min. 6 Karakter').fill('123456');
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').click();
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').fill('82333209567');
  await page.locator('.min-w-\\[18px\\]').click();
  });

test('semua terisi valid dan no telepon tidak terisi', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByText('Buat akun', { exact: true }).click();
  await page.getByPlaceholder('Masukkan alamat email').click();
  await page.getByPlaceholder('Masukkan alamat email').fill('qaproject23@gmail.com');
  await page.getByPlaceholder('Password Min. 6 Karakter').click();
  await page.getByPlaceholder('Password Min. 6 Karakter').fill('123456');
  await page.getByPlaceholder('Ulangi Password').click();
  await page.getByPlaceholder('Ulangi Password').fill('123456');
  await page.locator('.min-w-\\[18px\\]').click();
  });

test('semua terisi valid dan tidak checklist checkbox persetujuan', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByText('Buat akun', { exact: true }).click();
  await page.getByPlaceholder('Masukkan alamat email').click();
  await page.getByPlaceholder('Masukkan alamat email').fill('qaproject23@gmail.com');
  await page.getByPlaceholder('Password Min. 6 Karakter').click();
  await page.getByPlaceholder('Password Min. 6 Karakter').fill('123456');
  await page.getByPlaceholder('Ulangi Password').click();
  await page.getByPlaceholder('Ulangi Password').fill('123456');
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').click();
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').fill('983456723310');
  });

test('semua kosong dan hanya terisi email invalid', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByText('Buat akun', { exact: true }).click();
  await page.getByPlaceholder('Masukkan alamat email').click();
  await page.getByPlaceholder('Masukkan alamat email').fill('rani');
  await page.locator('.min-w-\\[18px\\]').click();
  });

test('semua kosong dan hanya terisi email valid menggunakan @gmail.com', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByText('Buat akun', { exact: true }).click();
  await page.getByPlaceholder('Masukkan alamat email').click();
  await page.getByPlaceholder('Masukkan alamat email').fill('desi@gmail.com');
  await page.locator('.min-w-\\[18px\\]').click();
  });
  
test('semua kosong dan hanya terisi password', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByText('Buat akun', { exact: true }).click();
  await page.getByPlaceholder('Password Min. 6 Karakter').click();
  await page.getByPlaceholder('Password Min. 6 Karakter').fill('123456');
  await page.locator('.min-w-\\[18px\\]').click();
  });

test('semua kosong dan hanya terisi ulangi password', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByText('Buat akun', { exact: true }).click();
  await page.getByPlaceholder('Ulangi Password').click();
  await page.getByPlaceholder('Ulangi Password').fill('123456');
  await page.locator('.min-w-\\[18px\\]').click();
  });

test('semua kosong dan hanya terisi ulangi password tidak sama dengan password', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByText('Buat akun', { exact: true }).click();
  await page.getByPlaceholder('Password Min. 6 Karakter').click();
  await page.getByPlaceholder('Password Min. 6 Karakter').fill('123456');
  await page.getByPlaceholder('Ulangi Password').click();
  await page.getByPlaceholder('Ulangi Password').fill('3214566');
  await page.locator('.min-w-\\[18px\\]').click();
  });

test('semua kosong dan hanya terisi no.telepon', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://auth.vcgamers.com/login');
  await page.getByText('Buat akun', { exact: true }).click();
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').click();
  await page.getByPlaceholder('Masukkan No. Ponsel/Whatsapp').fill('9875421222456');
  await page.locator('.min-w-\\[18px\\]').click();
  });

  

