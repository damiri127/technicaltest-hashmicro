# Automation Testing - Playwright

Repository ini berisikan mengenai hasil automation testing untuk studi kasus e-commerce, dengan login dan menambahkan produk ke keranjang
Dalam Projek ini Terdapat Test Case dengan ketentuan sebagai berikut:
1. Login ke homepage
2. Klik tambahkan ke keranjang pada suatu barang
3. Klik keranjang
4. Memastikan produk masuk ke keranjang
Dibawah ini dijelaskan mengenai tata cara penggunaannya. trims :)

## Installation
1. Clone Project
```bash
git clone https://github.com/damiri127/technicaltest-hashmicro
```
2. Insert & Open Project
```bash
cd technicaltest-hashmicro
code .
```
3. Update Dependecies
```bash
npm install
```
4. Install Playwright Browsers
```bash
npx playwright install
```


## Running Test
1. Running All Test
```bash
npx playwright test
```
2. Running Specific Test
```bash
npx playwright test <test file name>
```
3. Running Test With UI
```bash
npx playwright test --ui
```
4. Running Test With Report (HTML)
```bash
npx playwright show-report
```

## Notes
- Test sudah menggunakan semantic locators seperti getByRole, getByPlaceHolder supaya lebih stabil
