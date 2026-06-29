import {test, expect} from"@playwright/test"


test.use({storageState : "data/sf-storage.json"})

//Valid session using storageState using 'test.use()'
test("Login Salesforce Home page by Skipping Login feature", async ({page})=> {
await page.goto("https://testleaf.lightning.force.com/lightning/page/home");
test.slow();
//Verify title, url and heading
const title = await page.title();
expect(title).toBe("Home | Salesforce");
const url = page.url();
expect(url).toBe("https://testleaf.lightning.force.com/lightning/page/home");
await expect(page.locator("[class~='sellerHomeTitle']")).toBeVisible();
});


//Invalid session using storageState inside context
test.fail("Invalid Session", async({browser})=>{
const context = await browser.newContext({storageState : "data/sf-storag.json"});
const page = await context.newPage();
await page.goto("https://testleaf.lightning.force.com/lightning/page/hom");
})