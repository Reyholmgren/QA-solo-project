module.exports = {
    beforeEach : browser => {
        browser.url('https://lms.devmountain.com')
   
    },

    after : browser => {
        browser.end()
    },

    //login QA6R-41
    'login check': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects

        .expect.element('@loginHdr').to.be.visible.before(2000)
        pageObjects
        .setValue('@emailIn', 'laurencholmgren@gmail.com')
        .setValue('@passwordIn', 'passwordqa6')
        .click('@loginBtn')    
        .expect.element('@accountHdr').to.be.visible.before(2000)    

    },
        //QA6R-29,  QA6R-39. also marks one message as unread
    'compose new message check': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects
        .click('@inboxBtn')
        .expect.element('@inboxHdr').to.be.visible.before(2000)
        pageObjects
        .click('@composeBtn')
        .expect.element('@composeHdr').to.be.visible.before(2000)
        pageObjects
        .click('@inMsgCancel')
        .click('@unreadBtn')
        }, 

        //QA6R-31  
    'in message drop down check': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects
        .click('@inboxBtn')
        .expect.element('@inboxHdr').to.be.visible.before(2000)
        pageObjects
        .click('@composeBtn')
        .expect.element('@composeHdr').to.be.visible.before(2000)
        pageObjects
        .click('@inMsgCourseDrop')
        browser.pause(500)
        // .waitForElementVisible('@qaCourse', 3000)
        pageObjects.click('@qaCourse')
        .click('@inMsgSearchBtn')
        .setValue('@inMsgSearchIn', 'rey')
        .waitForElementVisible('@resultName', 3000)
        .click('@resultName')
        .expect.element('@nameInTo').to.be.visible.before(5000)
        }, 



        //QA6R-34
    'inbox notifications check': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects
        .expect.element('@inboxNotifications').to.be.visible.before(2000)
        pageObjects
        .click('@inboxBtn')
        .expect.element('@inboxHdr').to.be.visible.before(2000)
        pageObjects
        browser.pause(500)
        // .waitForElementVisible('@openMessage', 15000)
        pageObjects
        .click('@message1')
        .click('@home')
        pageObjects 
        .waitForElementPresent('@0Notifications', 5000)
        }, 
    
         //QA6R-40  
    'star message check': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects
        .click('@inboxBtn')
        .expect.element('@inboxHdr').to.be.visible.before(2000)
        pageObjects
        browser.pause(500)
        pageObjects
        .click('@message1')
        browser.pause(500)
        pageObjects
        .click('@gear')
        browser.pause(5000)
        pageObjects
        .expect.element('@star').to.be.visible.before(2000)
        pageObjects
        .click('@star')
        .expect.element('@starred').to.be.visible.before(5000)
        pageObjects
        .click('@starred')
        }, 


        //QA6R-38
    'inbox search bar check': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects
        .click('@inboxBtn')
        .expect.element('@inboxHdr').to.be.visible.before(2000)
        pageObjects
        browser.pause(500)
            // .waitForElementVisible('@message1', 15000)
        pageObjects
        .waitForElementVisible('@searchBar', 3000)
        .setValue('@searchBar', 'Rey')
        .waitForElementVisible('@resultName', 3000)
        .click('@resultName')

        pageObjects 
        .waitForElementPresent('@nameInSearch', 5000)
         },


        //QA6R-36
        'archive button check': browser => {
            let pageObjects = browser.page.pageObjects()
            pageObjects
            .click('@inboxBtn')
            .expect.element('@inboxHdr').to.be.visible.before(2000)
            pageObjects
            browser.pause(500)
            // .waitForElementVisible('@message1', 15000)
            pageObjects
            .click('@message1')
            browser.pause(500)
            pageObjects
            .click('@archiveBtn')
            browser.acceptAlert()
            pageObjects 
            .waitForElementNotPresent('@message3', 5000)
            }, 
    
            // QA6R-37
    'delete button check': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects
        .click('@inboxBtn')
        .expect.element('@inboxHdr').to.be.visible.before(2000)
        pageObjects
        browser.pause(1000)
        pageObjects
        .click('@message1')
        browser.pause(500)
        pageObjects
        .click('@deleteBtn')
        browser.pause(500)
        pageObjects
        browser.acceptAlert()
        pageObjects
        .waitForElementNotPresent('@message2', 5000)
        }, 


}