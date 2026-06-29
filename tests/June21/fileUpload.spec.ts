import {test, expect, Page} from "@playwright/test"
import path from 'path'

async function uploadCommongLogic(page:Page) {
//Click Upload button to upload the file
await page.locator("#file-submit").click();
await page.waitForLoadState("networkidle");

//Verify file uploaded reflecting or not
await page.waitForTimeout(1000);
const fileUploadedName = page.locator("#uploaded-files");
await expect(fileUploadedName).toBeVisible();
 //Verify file name being uploaded
await expect(fileUploadedName).toContainText(/4.*/);
}

/**File Upload Functionality using setInputFiles() */
test.only("File Upload Functionality using setInputFiles()", async({page})=> {
//Navigate to 'Internet Herokuapp' portal for file upload
await page.goto("https://the-internet.herokuapp.com/upload");
//File upload using 'setInputFiles()' method which takes path of the file at the specified location
await page.locator("#file-upload").setInputFiles(path.join(__dirname, "../../uploadFile/4.txt"));

//Click Upload button to upload the file
await uploadCommongLogic(page);
});



/**File Upload Functionality using fileChooser and waitForEvent() */
test("File Upload Functionality using fileChooser and waitForEvent()", async({page})=> {
//Navigate to 'Internet Herokuapp' portal for file upload
await page.goto("https://the-internet.herokuapp.com/upload");
await page.waitForLoadState("networkidle");
//File upload using 'fileChooser and waitForEvent()' method which takes path of the file at the specified location
const [uploadFile] = await Promise.all([page.waitForEvent("filechooser"), page.locator("#file-upload").click()])
await uploadFile.setFiles(path.join(__dirname, "../../uploadFile/4.txt"))
//Common Logic for upload Files
await uploadCommongLogic(page);
});

