import { test, expect } from '@playwright/test';

test('Browse herokuapp', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
});

test('Clicking on elements', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

  await page.getByRole('button',{name:'ADD Element'})

  await expect(page.locator('//button[text()="Delete"]')).toBeVisible()

  await page.locator('//button[text()="Delete"]').click();

});


test('Selecting Dropdown', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  await page.selectOption('#dropdown', '1');

});


test('enter value in textbox', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/inputs');
  
    await page.locator("//input[@type='number']").fill('5');

});


test('select checkbox', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

    // Get the checkboxes using getByRole
    const checkboxes = page.getByRole('checkbox');

    // Perform actions on the checkboxes, for example, check them
    await checkboxes.nth(0).check(); // Check the first checkbox
    await checkboxes.nth(1).check(); // Check the second checkbox
  
});

test('Enter forget password', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/forgot_password');

  await page.getByLabel('E-mail').fill('test@example.com');


});




test('I authentecate with basic auth', async ({ page }) => {


  const username= 'admin';
  const passwprd='admin';
  const authheader='Basic ' + btoa(username+':'+passwprd);
  await page.setExtraHTTPHeaders({Authorization : authheader});
  await page.goto('https://the-internet.herokuapp.com/basic_auth');
});


test('scroll down test ', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/infinite_scroll');
  const element =  page.locator('//a[text()="Elemental Selenium"]');
  let i = 0;
  while (i < 5) {
    await element.scrollIntoViewIfNeeded();
    i++

  }


});
    



test('Drag and drop ', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  await page.locator('//div[@id="column-a"]').dragTo(page.locator('//div[@id="column-b"]'));
await page.pause();
});
    

test('File Upload', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.locator('//input[@id="file-submit"]').setInputFiles('tests/upload/invoicesample.pdf')
  await page.getByRole('button',{name: 'Upload'}).click()

});