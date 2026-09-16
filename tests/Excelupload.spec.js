import {test} from "@playwright/test"

test('Excelupload',async({page})=>{

await page.goto("https://demo.automationtesting.in/FileUpload.html");
const browserBtn = page.locator("#input-4");
await browserBtn.setInputFiles("C:/Users/DELL/Documents/Playwright/Utils/Book1.xlsx");
await page.pause();




})

test('Download',async({page})=>{

    await page.goto("https://demoqa.com/upload-download");
    const downloadpromise= page.waitForEvent("download");
    const downloadBtn= await page.locator("#downloadButton");
    await downloadBtn.click();
    const download = await downloadpromise;
    await download.saveAs("C:/Users/DELL/Documents/Playwright/Utils/Downloadtesting.jpg")





})

test.fixme() // marking there is some bug in the test 
test.slow() // making test slow 
test.describe // testgrouping 