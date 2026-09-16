import {test,expect} from '@playwright/test'
test.only('alertmsg4',async({page}) =>{
    await page.goto("https://selenium.qabible.in/javascript-alert.php");
const promptbox= await page.locator(".btn.btn-danger");

page.on('dialog',async(dialog)=>{
    await page.waitForTimeout(5000);
    expect(dialog.type()).toBe('prompt');
    await dialog.accept('welcome');
})

await promptbox.click();
const alertsuccesstext= await page.locator('#prompt-demo');
const alertsuccesstextcontent= await alertsuccesstext.textContent();
console.log(alertsuccesstextcontent);
expect(alertsuccesstext).toHaveText("You have entered 'welcome' !");

})