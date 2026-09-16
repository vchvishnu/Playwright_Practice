import test from "@playwright/test";
test('Iframe',async({page})=>{


await page.goto("https://demoqa.com/frames");

const iframe=page.frameLocator("#frame1");
const iframetext=await iframe.locator("#sampleHeading").textContent();
console.log(iframetext);

})