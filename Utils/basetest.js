import { test } from "@playwright/test";

exports.locatorCustom = test.extend({
  
commonLocator: async ({page}, use) =>{

   const locators ={
      loginButton: page.locator("#login-button"),
      usernameField: page.locator("#user-name"),
      passwordField: page.locator("#password"),
   
  }
  await use(locators);
  },

  loginfunction: async({page, commonLocator}, use) => {


    const loginaction = async (uname,pwd) =>{

 await page.goto("https://www.saucedemo.com/");

 await commonLocator.usernameField.fill(uname);
 await commonLocator.passwordField.fill(pwd);
 await commonLocator.loginButton.click();


    }
    await use(loginaction);
  }





});



