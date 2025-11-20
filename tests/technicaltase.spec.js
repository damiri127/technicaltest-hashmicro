import {test, expect} from '@playwright/test';

test.describe('Technical Test Hashmicro', () => {
    // Login ke homepage
    test('Verify add product to cart', async({page})=> {
        await page.goto("https://saucedemo.com");
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.getByRole('button', {name: 'Login'}).click();

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        // add to cart
        await page.click('button[id=add-to-cart-sauce-labs-backpack]');

        // badge pada icon keranjang
        const cartBadge = page.locator('.shopping_cart_badge');
        await expect(cartBadge).toHaveText('1');

        // klik keranjang
        await page.click('.shopping_cart_link');
        await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

        // memastikan produk ada dikeranjang
        const item = page.locator('.cart_item');
        await expect(item).toHaveCount(1);
    });
});