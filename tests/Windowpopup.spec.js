import {test,expect} from '@playwright/test'
test('windowpopup',async({page}) =>{

    await page.goto("https://selenium.qabible.in/window-popup.php");
    console.log(await page.title());


  const [newPage] = await Promise.all([

   page.waitForEvent('popup'), // wait for new page
page.getByRole('link', { name: 'Like us On Facebook' }).click() //click button for ne wpage
   ])
   await newPage.waitForLoadState();
   console.log(await newPage.title());
   await newPage.getByLabel('Email address or phone number').fill("vchvishnu");
   await newPage.close();
   
})