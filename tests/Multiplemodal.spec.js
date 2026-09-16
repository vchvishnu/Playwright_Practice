import {test,expect} from "@playwright/test";
test('multiple',async({page}) =>{

await page.goto("https://selenium.qabible.in/index.php");
await page.getByText("Alerts and Modals").click();
const Bootstrapmodal=await page.getByRole('link',{name:'Bootstrap Modal'});
await Bootstrapmodal.click();

const modal1=await page.locator("//button[@data-target='#exampleModalCenter1']");
await modal1.click();

const modal2=await page.locator("//div[@class='modal-dialog modal-dialog-centered modal-lg']//div[@class='modal-content']");
await modal2.locator("//button[@data-target='#exampleModalCenter2']").click();

const modal3=await page.locator("//div[@id='exampleModalCenter2']//div[@class='modal-content']");
const cancelcta=await modal3.locator('div.modal-footer').locator('button').nth(0);
//const savecta=await modal3.locator("//div[@id='exampleModalCenter2']//button[@type='button'][normalize-space()='Save changes']");
await cancelcta.click();






})