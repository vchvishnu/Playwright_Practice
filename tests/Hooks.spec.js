import {test} from "@playwright/test"

test.describe('GroupingTC', async()=>{



test.beforeEach('beforeEach',async ({page}) =>{

    console.log("Run before each test");


})

test('normalTC',async({page}) =>{


console.log("Normal TC")

})

test.skip('SKIPtc',async({page}) =>{


console.log("Skip TC")

})


test.fixme('fixmeTC',async({page}) =>{


console.log("There is bug in the TC")

})


test('slow tc',async({page}) =>{
test.slow();

console.log("Slow the test case")

})

test.afterEach('afterEach',async ({page}) =>{

    console.log("Run after each test");


})

test.afterAll('afterAll',async ({}) =>{

    console.log("Run Afterall");


})

test.beforeAll('beforeAll',async ({}) =>{

    console.log("Run beforeAll");



})

})