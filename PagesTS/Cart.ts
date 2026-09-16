import { expect, Locator, Page } from '@playwright/test';
export class Cart{

page:Page
cartproduct:Locator
    constructor(page:Page){

        this.page=page;
        this.cartproduct = page.locator(".inventory_item_name");
        
       
    }

    async checkcartproduct(myproduct:string){
     await expect(this.cartproduct).toHaveText(myproduct);

    }
}