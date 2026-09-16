import{test,expect} from "@playwright/test"
test('alert',async({page}) =>{

await page.goto("https://selenium.qabible.in/index.php");

await page.getByText("Alerts and Modals").click();
await page.locator('//a[@href="bootstrap-modal.php"]').click();
await page.locator("//button[@data-target='#exampleModalCenter']").click();
//await page.pause();

const modal= await page.locator("//div[@id='exampleModalCenter']//div[@class='modal-content']");
const savecta=await modal.getByRole('button',{name:"Save changes"});
await savecta.click();
const closecta=await modal.getByRole('button',{name:"Close"});
closecta.click();





})