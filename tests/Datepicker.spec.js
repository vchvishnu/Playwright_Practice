import {test,expect} from '@playwright/test'
test('datepickettest',async({page}) =>{

    await page.goto("https://selenium.qabible.in/date-picker.php");
    await page.locator("#single-input-field").click();

await page.locator(".datepicker-days th.datepicker-switch").click();
await(page.locator(".datepicker-months th.datepicker-switch")).click();
const targetYear=2036;
const targetmonth=4;
const targetdate=12;
while(true){
const yearrange=await page.locator(".datepicker-years th.datepicker-switch").textContent(); // 2020-2029
await console.log(yearrange);
const startYear= await yearrange.split('-')[0];
const endYear= await yearrange.split('-')[1];

console.log(startYear); //2020
console.log(endYear);  //2029



if (targetYear < startYear) {
      await page.locator(".datepicker-years th.prev").click();
    } else if (targetYear > endYear) {
      await page.locator(".datepicker-years th.next").click();
    } else {
      // Year is inside [startYear, endYear] -> break out of loop
      break;
    }
  }

await page.getByText(targetYear.toString(), { exact: true }).click();
await page.locator(".month").nth(targetmonth-1).click();
await page.getByText(targetdate.toString(), { exact: true }).click();

const selectedDate=await page.locator("#single-input-field").inputValue();
console.log(selectedDate);
await expect(page.locator("#single-input-field")).toHaveValue(selectedDate);

})



