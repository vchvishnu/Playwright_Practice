import { Locator, Page } from "@playwright/test";

export class Loginpage {
username:Locator
password:Locator
loginBtn:Locator
page:Page
constructor(page:Page){

    this.page=page;
 // add the common locators here 
   this.username =  page.locator("#user-name");
   this.password =  page.locator("#password");
   this.loginBtn =  page.locator("#login-button");

}

async goToPage(){
  await this.page.goto("https://www.saucedemo.com/");

}

async validateUser(username:string,password:string){
  await this.username.fill(username);
  await this.password.fill(password);
  await this.loginBtn.click();

}

// add the common methods or functions here 
  
   


}