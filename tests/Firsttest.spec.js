import test from "@playwright/test";

test('demo test',async({browser})=>{

const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https:gemini.google.com")

})

test('demo2',async({page})=>{
    await page.goto("https://www.google.com")
    


})