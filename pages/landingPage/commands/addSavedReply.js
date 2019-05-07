module.exports = {

  addSavedReply:function (){
        return this .click('@replyTitle')
            .setValue('@replyTitle','test reply header')
            .click('@commentSection')
          .setValue('@commentSection','test message')
          .click('@addSavedReplyButton')
          .waitForElementVisible('@successMessage',5000)
    }
}
