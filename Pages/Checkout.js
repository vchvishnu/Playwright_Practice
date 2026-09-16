import { expect } from "@playwright/test";
export class Checkout{


    constructor(page){

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

    async fillcheckoutdetails(fname,lastname,zipcode){
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
