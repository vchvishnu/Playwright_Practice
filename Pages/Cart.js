import { expect } from '@playwright/test';
export class Cart{


    constructor(page){

        this.page=page;
        this.cartproduct = page.locator(".inventory_item_name");
        
       
    }

    async checkcartproduct(myproduct){
     await expect(this.cartproduct).toHaveText(myproduct);

    }
}