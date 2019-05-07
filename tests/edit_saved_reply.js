const data = require('config/test_data.json')


module.exports = {
    tags:['Edit','reply'],

    before(browser) {
        browser.maximizeWindow().url(data.url.site)
    },

    after(browser, done) {
        browser.end()
        done()
    },

    'Edit a saved reply comment': (browser) => {

        const loginPage = browser.page.login()
        const landingPage = browser.page.landingPage()

        browser.pause(1000)
      loginPage.login()
      loginPage.navigateToSettings()
      browser.pause(200)
      landingPage.navigateToSavedReplies()
      browser.pause(300)
        landingPage.editSavedReply()
        browser.pause(300)
    }
}
