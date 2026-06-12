import {expect} from '@playwright/test'
import {test} from "../fixtures/loginSalesforceFixture.spec"

 const lastName = "Setia2";

test("Create Individuals", async({loginSetUp, page})=>{
//Click App Launcher icon
await page.getByTitle("App Launcher").click();
//Click View All Applications link
await page.getByLabel("View All Applications").click();
//Click Individuals link
await page.locator("//p[text()='Individuals']").click();
//Click New button
await page.locator("li[data-target-selection-name='sfdc:StandardButton.Individual.New'] a").click();
//Enter Last Name
await page.getByPlaceholder("Last Name").fill(lastName);
//Click Save button
await page.getByTitle("Save").last().click();

//Verify Last name in Toast message and title
const toastTxt = await page.locator("[data-aura-class='forceActionsText']").innerText();
expect(toastTxt).toContain(lastName);
const titleTxt = await page.locator("//div[text()='Individual']/following-sibling::*/span").innerText();
expect(titleTxt).toContain(lastName);
});