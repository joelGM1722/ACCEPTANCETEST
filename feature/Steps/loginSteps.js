const {Given, When, Then} = require('cucumber');
const {Builder, By, until} = require('selenium-webdriver');
require('chromedriver');

Given('I am on the {string} page', async function (string) {
    this.driver = new Builder()
    .forBrowser('chrome')
    .build();
    await this.driver.get(`https://the-internet.herokuapp.com/${string}`);   
});

When('I loguin with {string} and {string}', function (string, string2) {
    this.driver.findElement();
});

Then('I should see message saying {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});