const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given('I visit the login form', async function () {
  await loginPage.navigateToLoginScreen()
})

//define step can be used for any step type
defineStep('I submit valid credentials to the login form', async function () {
  await loginPage.submitLoginForm()
})

Then('I should see the home page', async function () {
  await loginPage.assertUserIsLoggedIn()
})

defineStep(
  /^I submit the login form with invalid credentials "([^"]*)" and "([^"]*)"$/,
  async function (username, password) {
    await loginPage.submitLoginWithParameters(username, password)
  },
)

defineStep('I see error message', async function () {
  await loginPage.assertLoginFailed()
})
