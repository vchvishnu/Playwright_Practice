import { Cart } from "./Cart";
import { Checkout } from "./Checkout";
import { Loginpage } from "./Loginpage";
import { Productpage } from "./Productpage";

export class Pagemanager {

    constructor(page) {
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