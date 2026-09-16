import {test,expect} from "@playwright/test"

test('demotest2',async({page})=>{

await page.goto("https://selenium.qabible.in/form-submit.php")

const fname=await page.locator('#validationCustom01') //id
await fname.fill("Vishnu")

// for id use #
//forc= class use .
// strict moe=de violation
const lname=page.locator('.form-control').nth(1)
await lname.fill("KP")


const uname=page.locator('input[placeholder="Username"]')
await uname.fill("vchvishnu")

// Xpath
const city=page.locator('//input[@id="validationCustom03"]')
await city.fill("Bengaluru")


//getby

const state=page.getByPlaceholder('State')
await state.fill("Karnataka")


const zipcode=page.locator('#validationCustom05')
await zipcode.fill("673032")

const checkbox=await page.locator('#invalidCheck')
await checkbox.click()
//getbyrole
const button=await page.getByRole("button",{name:"Submit form"})
await button.click()
// get the success text message 
const successmsg=page.locator('#message-one')
await expect(successmsg).toBeVisible()
// to get text we use text content 
const successmsgtext=await successmsg.textContent()
console.log(successmsgtext)
//check if the substring contain successfully text
await expect(successmsgtext).toContain('successfully!')

const booleanvalue=await successmsg.isVisible()
console.log(booleanvalue)
await expect(booleanvalue).toBeTruthy()
})