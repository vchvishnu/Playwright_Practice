import {test,expect} from '@playwright/test'
test('dragndrop',async({page}) =>{

    await page.goto("https://selenium.qabible.in/drag-drop.php");
    //const source= await page.getByText('Draggable n°3');
    const allspan=await page.locator("todrag span [draggable='true']").all();
    const target=await page.locator('#mydropzone');
    //await source.dragTo(target);
   // await page.pause();
const count = await allspan.count();
    for(let i=0;i<allspan.count;i++){

        await allspan.first().dragTo(target);
        await page.waitForTimeout(2000);
    }


})

// normal click  locator.click();
doubleclick  locator.dblclick();
triple click  locator.click({count:3})
Right click- locator.Click({button:"right"}) */
hover - locator.hover();