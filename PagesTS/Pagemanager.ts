import { Page } from "@playwright/test";
import { Cart } from "../PagesTS/Cart";
import { Checkout } from "../PagesTS/Checkout";
import { Loginpage } from "../PagesTS/Loginpage";
import { Productpage } from "../PagesTS/Productpage";

export class Pagemanager {
    loginpage:Loginpage
    productpage:Productpage
    cartpage:Cart
    checkoutpage:Checkout
    constructor(page:Page) {
        this.loginpage = new Loginpage(page);
        this.productpage = new Productpage(page);
        this.cartpage = new Cart(page);
        this.checkoutpage = new Checkout(page);
    } // Removed extra brace here

    getLoginpage() // to get loginpageobject
    {
        return this.loginpage;
    }

    getProductpage()
    {
        return this.productpage;
    }

    getCartpage()
    {
        return this.cartpage;
    }

    getCheckoutpage()
    {
        return this.checkoutpage;
    }
} // Class now correctly closes here