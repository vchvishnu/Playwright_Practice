export class Loginpage {

constructor(page){
    this.page=page;
 // add the common locators here 
   this.username =  page.locator("#user-name");
   this.password =  page.locator("#password");
   this.loginBtn =  page.locator("#login-button");

}

async goToPage(){
  await this.page.goto("https://www.saucedemo.com/");

}

async validateUser(){
  await this.username.fill(username);
  await this.password.fill(password);
  await this.loginBtn.click();

}

// add the common methods or functions here 
  
   


}