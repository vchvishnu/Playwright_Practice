import { Locator, Page } from "@playwright/test";

export class Productpage{
    page:Page
    itemlocator:Locator
    carticon:Locator
    inventoryitem:Locator
    
    constructor(page:Page){
    
        this.page=page;
        this.itemlocator=page.locator(".inventory_item_name ");
        this.carticon=page.locator(".shopping_cart_link");
        this.inventoryitem=page.locator(".inventory_item")
       
       
        
    }


async searchproduct(myproduct:any){
     const product=await this.itemlocator.allTextContents();
     const productcount=await this.itemlocator.count();

     for(let i=0; i<productcount;i++){
     
        const title = await this.itemlocator.nth(i).textContent();
     
         if(title?.trim() ===myproduct){
     
        await this.inventoryitem.nth(i).locator(".btn.btn_primary.btn_small.btn_inventory").click();
         break;
         }
         
         }

        }
        async gotocart(){
         await this.carticon.click();

        }
    }