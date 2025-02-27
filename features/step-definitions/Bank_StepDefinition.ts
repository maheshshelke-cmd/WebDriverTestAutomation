import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import { DataTable } from '@cucumber/cucumber';

import bankHomePage from '../pageobjects/BankHomePage.js';

Given(/^I launch the browsers (.+)$/, async (homePage: string) => {
    await browser.url(homePage);
    await browser.maximizeWindow();

    // await bankHomePage.enterDetails(bankHomePage.loginuserName, "testuser706");
    // await bankHomePage.enterDetails(bankHomePage.loginPassword, "welcome123");
    // await bankHomePage.clickElement(bankHomePage.loginButton);
    // browser.pause(2000); 
});

When(/^I click on the register button$/, async () => {
    await bankHomePage.clickElement(bankHomePage.registerLink);

    browser.pause(2000);
});

Then(/^I entered the user details on the registration page$/, async (dataTable) => {
    let userDetails = await dataTable.hashes();
    for (const dt of userDetails) {
    console.log(userDetails);
    await bankHomePage.enterDetails(bankHomePage.fName, dt.fName);
    await bankHomePage.enterDetails(bankHomePage.lName, dt.lName);
    await bankHomePage.enterDetails(bankHomePage.address, dt.address);
    await bankHomePage.enterDetails(bankHomePage.city, dt.city);
    await bankHomePage.enterDetails(bankHomePage.state, dt.state);
    await bankHomePage.enterDetails(bankHomePage.zip, dt.zip);
    await bankHomePage.enterDetails(bankHomePage.phone, dt.phone);
    await bankHomePage.enterDetails(bankHomePage.ssn, dt.ssn);
    await bankHomePage.enterDetails(bankHomePage.username, dt.username);
    await bankHomePage.enterDetails(bankHomePage.password, dt.password);
    await bankHomePage.enterDetails(bankHomePage.confirmPassword, dt.password);
    }
    await bankHomePage.clickElement(bankHomePage.registerButton);
});

When(/^I login with (.+)$/, async (username: string) => {

    await bankHomePage.enterDetails(bankHomePage.loginuserName, username);
    
});


When(/^I enter the password (.+)$/, async (password: string) => {
        
    await bankHomePage.enterDetails(bankHomePage.loginPassword, password);
    await bankHomePage.clickElement(bankHomePage.loginButton);
    browser.pause(2000); 
});

Then(/^I click on the (.+)$/, async (accountNumber: string) => {
    await bankHomePage.clickElement(bankHomePage.accountOverviewLink);
    browser.pause(2000); 

    const acc_number = await $('//table[@id="accountTable"]//a');
    browser.pause(5000); 
    acc_number.click();
    browser.pause(5000); 

});

// Then(/^I check the transaction history for the month (.+)$/, async (month: string) => {
//     await bankHomePage.selectMonth(month);
//     await bankHomePage.checkTransactionHistory();
//     browser.pause(2000); 
// });