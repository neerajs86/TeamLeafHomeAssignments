import {test, expect, Locator} from '@playwright/test'

test("PVR Ticket Booking", async({page}) => {
await page.goto("https://www.pvrcinemas.com/");
page.on('dialog', async(alert) => {
console.log(alert.type());
alert.dismiss();
});

//Select City
await page.getByPlaceholder("Search for city").fill("Gurugram");
await page.locator("#city_list li").click();

//Click Cinema
await page.locator(".cinemas-inactive").click();

//Select Cinema and option
await page.locator("#cinema").click();
await page.locator("//*[@data-pc-section='panel']//li//span[text()='PVR City Centre Gurugram']").click();
await page.waitForTimeout(1000);

//Select Date
//Below condition is used if Date pop-up doesn't open by its own and can be ignored as well
if(!await page.locator("[data-pc-section='panel']").isVisible()) {
await page.locator("#date").click();
}
await page.locator("[data-pc-section='panel'] ul li").last().click();
await page.waitForTimeout(1000);

//Select Movie
//Below condition is used if Movie pop-up doesn't open by its own and can be ignored as well
if(!await page.locator("[data-pc-section='panel']").isVisible()) {
await page.locator("#movie").click();
}
await page.locator("//*[@data-pc-section='panel']//li//span[text()='BHARAT BHHAGYA VIDDHAATA']").click();
await page.waitForTimeout(1000);

//Select Time
//Below condition is used if Time pop-up doesn't open by its own and can be ignored as well
if(!await page.locator("[data-pc-section='panel']").isVisible()) {
await page.locator("#time").click();
}
await page.locator("[data-pc-section='panel'] ul li").first().click();

//Click Book
await page.getByLabel("Submit").click();

//Click Accept button in Terms & Conditions pop-up
await page.getByRole("button", {name : "Accept"}).click();

//Select seat number
await page.locator("[id='QR.PRIME ROWS|F:12']").click();

//Verify seat number
const seatNumber = await page.locator(".seat-number p").innerText();
console.log(`Seat number : ${seatNumber}`);
expect(seatNumber).toContain("12");

//Verify Total Ticket Price
const totalTicketPrice = await page.locator("//h6[text()='Total Ticket Price']/following::div[@class='ticket-price']/p").innerText();
console.log(`Total Ticket Price : ${totalTicketPrice}`);
expect(totalTicketPrice).toContain("420.00");

//Verify Page title
const title = await page.title();
console.log("Page title : " +  title)
expect(title).toContain("PVR Cinemas");

//Click Proceed button
await page.getByRole("button", {name : "Proceed"}).click();
});