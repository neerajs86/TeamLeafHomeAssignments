import {test, expect, Locator} from '@playwright/test'

 const authFile = "config/auth.json";
 const lastName = "Setia2 [Edit]";

test("Edit Individuals", async({browser})=>{
const context = await browser.newContext({storageState : authFile});
const page = await context.newPage();
await page.goto("https://orgfarm-636e9c6675-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome");
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