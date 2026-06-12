import {expect} from '@playwright/test'
import {test} from "../fixtures/loginSalesforceFixture.spec"

 const accountName = "Neeraj Setia";
 const companyName = "TestLeaf";

 
test("Create Account", async({loginSetUp, page})=>{
//Click App Launcher icon
await page.getByTitle("App Launcher").click();
//Click View All Applications link
await page.getByLabel("View All Applications").click();
//Enter Service in Searchox
await page.getByPlaceholder("Search apps or items...").fill("Service");
//Click Service tab
await page.locator("(//one-app-launcher-app-tile)[1]").nth(0).click();
//Click Accounts tab
await page.locator("[data-id='Account']").click();
await page.getByRole("button", {name : "New"}).click();
//Enter Account Name
await page.locator("[name='Name']").fill(accountName);
//Click Save button
await page.locator("//*[@name='SaveEdit']").click();

//Verify Account name in Toast message and title
const toastTxt = await page.locator("[data-aura-class='forceActionsText']").innerText();
expect(toastTxt).toContain(accountName);
});