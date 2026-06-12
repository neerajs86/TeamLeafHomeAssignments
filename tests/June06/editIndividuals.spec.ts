import {expect, Locator} from '@playwright/test'
import {test} from "../fixtures/loginSalesforceFixture.spec"

 const authFile = "config/auth.json";
 const lastName = "Setia2 [Edit]";

test("Edit Individuals", async({loginSetUp, page})=>{
//Click App Launcher icon
await page.getByTitle("App Launcher").click();
//Click View All Applications link
await page.getByLabel("View All Applications").click();
//Click Individuals link
await page.locator("//p[text()='Individuals']").click();
//Click drop-down arrow icon
await page.locator("[data-cell-type='lstListViewRowLevelAction']").nth(0).click();
//Click Edit button
await page.locator("[title='Edit']").first().click();
//Enter Last Name
await page.getByPlaceholder("Last Name").fill(lastName);
//Click Saluation dropdown and select an option
await page.locator(".salutation").click();
const options : Locator[] =  await page.locator("ul li a").all();
for(const option of options) {
    const optTxt = await option.innerText();
    if(optTxt.includes("Mr.")){
       await option.click();
       break;
    }
}
//Click Save button
await page.getByTitle("Save").last().click();

//Verify Last name in Toast message and title
const toastTxt = await page.locator("[data-aura-class='forceActionsText']").innerText();
expect(toastTxt).toContain(lastName);
const titleTxt = await page.locator("[data-cell-type='lstOutputLookup'] span").first().innerText();
expect(titleTxt).toContain(lastName);
});