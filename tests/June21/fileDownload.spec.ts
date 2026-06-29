import {test, expect, Page} from "@playwright/test"
import path from 'path'
import fs from 'fs'

test("File download", async({page})=> {
//Navigate to 'Internet Herokuapp' portal for file upload
await page.goto("https://the-internet.herokuapp.com/download");

const [downloadFile] = await Promise.all([page.waitForEvent("download"), page.locator("//a[text()='examplefile.json']").click()]);
const fileName = downloadFile.suggestedFilename();
const filePath = path.join(__dirname, "../../downloadFile/", fileName);
await downloadFile.saveAs(filePath);
expect(fs.existsSync(filePath)).toBeTruthy();
});
