class LoginPage {
  async navigateToLoginScreen() {
    await page.goto('https://www.saucedemo.com/')
  }

  async submitLoginForm() {
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
  }

  async assertUserIsLoggedIn() {
    await page.waitForSelector('.inventory_list')
  }

  async submitLoginWithParameters(username, password) {
    await page.fill('#user-name', username)
    await page.fill('#password', password)
    await page.click('#login-button')
  }
  async assertLoginFailed() {
    await page.waitForSelector('.error-message-container')
  }
}

module.exports = { LoginPage }
