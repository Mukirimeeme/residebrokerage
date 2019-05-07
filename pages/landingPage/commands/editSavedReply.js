module.exports = {
  editSavedReply(){
    return this
      .click('@editReply')
      .waitForElementVisible('@editSavedReplyHeader',5000)
      .click('@commentSection')
      .setValue('@commentSection','adding more comment')
      .click('@editCommentSectionSaveButton')
      .waitForElementVisible('@successMessage',5000)


  }
}
