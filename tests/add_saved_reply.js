const data = require('config/test_data.json')
//const login = require('pages/login/commands/goToNewcredit')

const name = 'Add a saved reply'

module.exports = {
  tags: ['add', 'reply'],

  before(browser) {
    browser.maximizeWindow().url(data.url.site)
  },

  after(browser, done) {
    browser.end()
    done()
  },

  [name] : (browser) => {

    const loginPage = browser.page.login()
    const  landingPage = browser.page.landingPage()

    browser.pause(1000)

    loginPage.login()
    loginPage.navigateToSettings()
    browser.pause(200)
    landingPage.navigateToSavedReplies()
    browser.pause(300)
    landingPage.addSavedReply()
    browser.pause(300)
  }
}
