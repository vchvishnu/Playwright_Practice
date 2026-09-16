import{test,expect} from "@playwright/test"
test('dropdown',async({page}) =>{


await page.goto("https://selenium.qabible.in/index.php");
await page.getByRole('link',{name:'Input Form'}).click();
await page.getByText("Select Input").click();

const dropdown=await page.locator('#single-input-field');
await dropdown.selectOption("Green");

const colormessage=await page.locator('#message-one');
const x=await colormessage.textContent()
// checking the selected color is green message 
await expect(x).toContain('Green');
//Using another method to have text method 
await expect(colormessage).toHaveText('Selected Color : Green');
// OR
await expect(colormessage).toHaveText(x);



})
