import { expect, Locator, Page } from "@playwright/test";
export class Checkout{

checkoutbtn:Locator
firstname:Locator
lastname:Locator
zipcode:Locator
continuebtn:Locator
finishbtn:Locator
orderconfirmation:Locator
page:Page

    constructor(page:Page){

         this.page=page;
         this.checkoutbtn = page.locator("#checkout");
         this.firstname = page.locator("#first-name");
         this.lastname = page.locator("#last-name");
         this.zipcode = page.locator("#postal-code");
         this.continuebtn = page.locator("#continue");
         this.finishbtn = page.locator("#finish");
         this.orderconfirmation = page.locator(".complete-header");

    }

    async checkoutcta(){

          await this.checkoutbtn.click();
    }

    async fillcheckoutdetails(fname:string,lastname:string,zipcode:string){
         await this.firstname.fill(fname);
         await this.lastname.fill(lastname);
         await this.zipcode.fill(zipcode);
         await this.continuebtn.click();
         await this.finishbtn.click();

    }

    async validateocpage(){

        await expect(this.orderconfirmation).toHaveText("Thank you for your order!");
    }











    }
