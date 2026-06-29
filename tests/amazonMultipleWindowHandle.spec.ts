import {test, expect} from "@playwright/test"

test("Amazon Multiple Window Handle", async ({page, context})=> {
    await page.goto("https://www.amazon.in/", {waitUntil : "load"});
    //Click Continue Shopping button
    await page.getByAltText("Continue shopping").click();
    //Search bags and click search button
    await page.getByPlaceholder("Search Amazon.in").fill("bags");
    await page.locator("#nav-search-submit-button").click();
    //Get Product title
    const productTitle = await page.locator("[role='listitem'] h2").first().innerText();
    console.log(productTitle);
    //Click first bag in the list that will open a new tab
    const [tabs] = await Promise.all([context.waitForEvent("page"), await page.locator("[role='listitem'] img").first().click()]);
    await page.waitForLoadState("load");
    //Total no of pages excluding the parent
    const allTabs = tabs.context().pages();
    console.log("No of popUp pages including the parent page : " + allTabs.length);
    let bagDetailsPageObj : any;

    //This work only if the product selected (clicked) remains same
    //Find all the opened pop-ups
    // for(const tab of allTabs) {
    //     let tabTitle = await tab.title();
    //     console.log("Title : " + tabTitle);
    //     if(tabTitle.includes("Storite Premium Laptop Backpack for Men & Women")) {
    //         bagDetailsPageObj = tab;
    //        break;
    //    }
    // }

    //Using this as we know we have to click first product in 2nd tab 
        for(let p=1; p<=allTabs.length; p++) {
            bagDetailsPageObj = allTabs[1];
           break;
       }
    //Get Price of bag from Prduct table
    const productPriceInDetails : string = await bagDetailsPageObj.locator("#corePriceDisplay_desktop_feature_div .a-price-whole").innerText();
    console.log(productPriceInDetails);
    console.log(typeof(productPriceInDetails));
    //Click Add to cart button
    await bagDetailsPageObj.locator("[title='Add to Shopping Cart']").click();
    await bagDetailsPageObj.waitForLoadState("domcontentloaded");
    //Get Cart subtotal price
    const subCartTotalValue : string = await bagDetailsPageObj.locator("#sw-subtotal .a-price-whole").innerText();
    const subCartTotalPrice = subCartTotalValue.split(/\r?\n/)[0];
    console.log(subCartTotalPrice);
    expect(productPriceInDetails).toContain(subCartTotalPrice);
})
