import {expect} from '@playwright/test'
import {test} from "../fixtures/loginSalesforceFixture.spec"

 const lastName = "Setia2";
 function aa() {
    
 }

test("Create Individuals", async({loginSetUp, page})=>{
//Click App Launcher icon
await page.getByTitle("App Launcher").click();
//Click View All Applications link
await page.getByLabel("View All Applications").click();
    await page.waitForTimeout(2000);
//Click Individuals link
const spinnerL = page.locator("[class='slds-spinner_container']");
console.log("Open : " + await spinnerL.isVisible());
await page.waitForTimeout(10000);
if(await spinnerL.isVisible()) {
//await spinnerL.evaluate((element) => {element.style.visibility = 'hidden'});
console.log("Close : " + await spinnerL.isVisible());
await page.locator("[data-label='Individuals']").click();
}
//Click New button
await page.locator("a[title='New']").click();
//Enter Last Name
await page.getByPlaceholder("Last Name").fill(lastName);
//Click Save button
await page.locator("Save").last().click();

//Verify Last name in Toast message and title
const toastTxt = await page.locator("[data-aura-class='forceActionsText']").innerText();
expect(toastTxt).toContain(lastName);
const titleTxt = await page.locator("//div[text()='Individual']/following-sibling::*/span").innerText();
expect(titleTxt).toContain(lastName);
});