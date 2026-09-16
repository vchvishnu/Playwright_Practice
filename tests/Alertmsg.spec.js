import {test,expect} from '@playwright/test'
test('alertmsg',async({page}) =>{

await page.goto("https://selenium.qabible.in/index.php");
await page.getByRole('link', { name: 'Alerts and Modals' }).click();
await page.locator("//a[@href='javascript-alert.php']").click();
// alert box 
page.on('dialog',async(dialog)=>{
    await page.waitForTimeout(5000);
    // await dialog.accept(); 
    await dialog.dismiss();
})


const alertButton =await page.locator('button.btn.btn-warning').click();
const alertmsg=await page.locator("#confirm-demo").textContent();
await console.log(alertmsg);
await expect(alertmsg).toContain('You pressed Cancel!');
})

test.only('alertmsg1',async({page}) =>{
    await page.goto("https://selenium.qabible.in/index.php");
await page.getByRole('link', { name: 'Alerts and Modals' }).click();
await page.locator("//a[@href='javascript-alert.php']").click();
const promptbox= await page.locator(".btn.btn-danger")
page.on('dialog',async(dialog)=>{
    await page.waitForTimeout(5000);
    console.log(dialog.message());
    await dialog.accept('welcome');
})

await promptbox.click();

})







