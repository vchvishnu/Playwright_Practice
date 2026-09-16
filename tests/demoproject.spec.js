import{customtest} from "../Utils/Customdata.js"
import {test,expect} from '@playwright/test'
import{mytest} from "../Utils/Samplecustom.js"
test.skip('demoproject',async({page}) =>{

    await page.goto("https://www.saucedemo.com/");
    
   const username =  page.locator("#user-name");
   const password =  page.locator("#password");
   const loginbn =  page.locator("#login-button");

   await username.fill("standard_user");
   await password.fill("secret_sauce");
   await loginbn.click();
   //await page.pause();

   const producttitle = await page.locator(".inventory_item_name ").allTextContents();
   console.log(producttitle);

   const productcount = await page.locator(".inventory_item_name ").count();
   console.log(productcount);

   const myproduct = "Sauce Labs Onesie";

   for(let i=0; i<productcount;i++){

   const title = await page.locator('.inventory_item_name').nth(i).textContent();

    if(title?.trim() ===myproduct){

   await page.locator(".inventory_item").nth(i).locator(".btn.btn_primary.btn_small.btn_inventory").click();
    break;
    }
    
    }
const carticon =await page.locator(".shopping_cart_link");

await carticon.click();

const cartproduct = await page.locator(".inventory_item_name").textContent();

expect(cartproduct).toBe(myproduct)

const checkoutbtn = await page.locator("#checkout")
await checkoutbtn.click();

const firstname = await page.locator("#first-name");
await firstname.fill("Vishnu");
const lastname = await page.locator("#last-name");
await lastname.fill("KP");
const zipcode = await page.locator("#postal-code");
await zipcode.fill("673032");

await page.locator("#continue").click();
await page.locator("#finish").click();

const orderconfirmation = await page.locator(".complete-header");

expect(orderconfirmation).toHaveText("Thank you for your order!");



    }

   
)

mytest.skip("my test", async({page,userDetail}) =>{

    for (const user of userDetail) {

 await page.goto("https://www.saucedemo.com/");

  
    
   const username =  page.locator("#user-name");
   const password =  page.locator("#password");
   const loginbn =  page.locator("#login-button");
   await username.fill(user.username);
   await password.fill(user.password);
   await loginbn.click();
    }

})

locatorCustom('basetest',async({page, commonLocator, loginfunction}) => {

await loginfunction("standard_user", "secret_sauce");

})