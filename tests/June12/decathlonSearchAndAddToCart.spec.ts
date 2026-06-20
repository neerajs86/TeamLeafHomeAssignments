import {test, expect, Locator} from '@playwright/test'

test("Decalthlon Search And Add to Cart", async({page}) => {
await page.goto("https://www.decathlon.in/");

//Verify Title of home page
const homeTitle = await page.title();
expect(homeTitle).toBe("Buy Sporting Goods, Sportswear and Equipments | Download App");

//Click Search field and verify if it is enabled
const searchField = page.getByPlaceholder("Search for 60+ sports and 6,000+ products");
await searchField.click();
expect(await searchField.isEnabled());
//Enter 'shoes' in the search field
await searchField.fill("shoes");
await page.keyboard.press("Enter");
await page.waitForURL('https://www.decathlon.in/search?query=shoes');

//Verify the Shoes page title
const searchShoesTitle = await page.title();
console.log(searchShoesTitle);
expect(searchShoesTitle).toBe("Search | shoes");

//Click Gender section
await page.locator("[aria-controls='gender_id_en']").click();
//Select Men
await page.locator("[data-test-id='filter-checkbox-gender_id_en-MEN']").check();

//Click Sport
await page.locator("[aria-controls='sport_pratice_en']").click();
//Select Running
await page.locator("[data-test-id='filter-checkbox-sport_pratice_en-Running']").check();

//Click Size
await page.locator("[aria-controls='indian_size']").click();
//Select 'UK 10.5' checkbox
await page.locator("[data-test-id='filter-checkbox-indian_size-UK 10.5 - EU 45']").check();

//Select Price Sort down arrow icon (right side)
await page.locator("//*[name()='svg' and @data-test-id='sort-bar-desktop:chevron-down-icon']").click();
//Click 'Price (high → low)'
await page.locator("[data-test-id='sort-option-dsi_pim_migration_price_desc']").click();
await page.getByTestId

//Added small delay for displaying items post Price filter applicable
await page.waitForTimeout(1000);

//Click first product
await page.locator("[data-test-id='product-card-link']").nth(1).click();

//Select Shoe Size
//Wait for Shoe size grid to be visible
await expect(page.locator("[data-test-id='pdp-size-selector-desktop:grid']")).toBeVisible();
await page.locator("[aria-label='Select size UK 10.5 - EU 45']").click();

//Click Add to Cart button
await page.locator("[data-test-id='pdp:add-to-cart-button']").click();

//Wait for Cart count/badge to be visible
await expect(page.locator("[data-test-id='header-desktop:cart-count-badge']")).toBeVisible();

//Click Cart option
await page.locator("[aria-label='Cart']").click();

//Fetch total cart value
const totalCartValue = await page.locator("[data-test-id='cart:cart-checkout-total-cart-value'] p").innerText();
console.log(`Total cart value is ${totalCartValue}`);
});