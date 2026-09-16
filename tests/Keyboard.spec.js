import test from "@playwright/test";
test('Keyboardactions',async({page})=>{


await page.goto("https://selenium.qabible.in/simple-form-demo.php");
const entermessagefield= await page.locator("#single-input-field");
await entermessagefield.focus();
await page.keyboard.type("vchvishnu");   // type 

await page.keyboard.press("Control+A");
await page.keyboard.press("Control+C");

const newfield=await page.locator("#value-a");
await newfield.focus();
await page.keyboard.press("Control+V");
//await page.pause();

await page.locator("#button-two").click({button:("right")});
await page.waitForTimeout(3000);

await page.locator("#button-two").dblclick();

await page.locator("#button-two").click({clickCount:3});



})