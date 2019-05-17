
module.exports = {

    login() {
        this.api.pause(5000)
        if (this.isVisible('#login_field')) {
            return this
                .verify.visible('@enterUsernameTab')
                .verify.visible('@enterPasswordTab')
                .verify.visible('@submit')
                .click('@enterUsernameTab')
                .setValue('@enterUsernameTab', '*******')
                .click('@enterPasswordTab')
                .setValue('@enterPasswordTab', '*********@')
                .click('@submit')
        }
    }
}
