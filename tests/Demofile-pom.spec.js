import { test } from '@playwright/test';
import { Pagemanager } from '../Pages/Pagemanager';
import inputData from"../Utils/inputData.json";
// this is for simple one date , for multiple data we use arrya 
// const inputobject=JSON.parse(JSON.stringify(inputData)) // changed to normal string and then changed to normal JS oject
let currentDate= new Date().toLocaleDateString();
for (let inputobject of inputData){
// test('demoproject ${inputobject.myproduct}', async ({ page }) => {
// test('demoproject' +inputobject.myproduct, async ({ page }) => {
test('demoproject'+ inputobject.myproduct+","+ currentDate, async ({ page }) => {
    
    

    // 1. Login
    let pomobject=new Pagemanager(page);
    let loginpage= pomobject.getLoginpage();
    await loginpage.goToPage();
    await loginpage.validateUser(inputobject.username,inputobject.password);

    // 2. Select Product & Go to Cart
    
    let productpage=pomobject.getProductpage();
    await productpage.searchproduct(inputobject.myproduct);
    await productpage.gotocart();

    // 3. Verify Item in Cart
   let cartpage=pomobject.getCartpage();
    await cartpage.checkcartproduct(inputobject.myproduct);

    // 4. Checkout & Validate Order
    let checkoutpage=pomobject.getCheckoutpage();
    await checkoutpage.checkoutcta();
    await checkoutpage.fillcheckoutdetails(inputobject.fname, inputobject.lastname, inputobject.zipcode);
    await checkoutpage.validateocpage();
})}