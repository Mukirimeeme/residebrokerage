module.exports = {

  navigateToSavedReplies:function (){
        return this .waitForElementVisible('@savedReplyPageButton',90000)
            .click('@savedReplyPageButton')
          .waitForElementVisible('@savedReplyPageHeader',2000)
          .assert.containsText('@savedReplyPageHeader','Saved replies')

    }
}
