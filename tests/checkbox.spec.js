import{test,expect} from "@playwright/test"
test('checkboxtest',async({page}) =>{

await page.goto("https://selenium.qabible.in/index.php");
const inputform= await page.getByRole('link', { name: 'Input Form' })
await inputform.click()

const checkboxdemo=await page.getByRole('link', { name: 'Checkbox Demo' });
await checkboxdemo.click();

const checkbox=await page.locator('.form-check-input');
await checkbox.click();
// checkbox checked 
const checkboxvisible=await checkbox.isChecked();
console.log(checkboxvisible)

//await checkbox.uncheck()
//assertion to check if checkbox enabled 
await expect(checkbox).toBeChecked()



})