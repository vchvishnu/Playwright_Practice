
// EXCERCISE 
import{test,expect} from "@playwright/test"
test('dropdownbutton',async({page}) =>{

await page.goto("https://selenium.qabible.in/index.php");
const clicklink=await page.getByRole('link',{name:'INPUT FORM'});
await clicklink.click();

const radiobtnclk=await page.getByText('Radio Buttons Demo');
await radiobtnclk.click();

const male= await page.locator("//label[@for='inlineRadio1']");
await male.click();

const ctaclick = await page.locator('#button-one');
await ctaclick.click();

const msg = await page.locator('#message-one');
const successmsg=await msg.textContent();
await console.log(successmsg);

await expect(msg).toHaveText(successmsg);



})

