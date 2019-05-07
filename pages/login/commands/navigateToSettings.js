module.exports ={
  navigateToSettings() {
    this.api.pause(5000)
    if(this.isVisible('.Header-link')){
      return this
        .click('@profileDropdown')
        .waitForElementVisible('@settingsButton',5000)
        .click('@settingsButton')
        .waitForElementVisible('#public-profile-heading',8000)
        .expect.element('#public-profile-heading').to.be.present
    }

  }
}
