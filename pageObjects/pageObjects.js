module.exports = {
    url: 'https://lms.devmountain.com/',
    elements: {

        'loginHdr' : 'img[alt="Canvas by Instructure"]',
        'emailIn' : 'input[type="text"]',
        'passwordIn' : 'input[type="password"]',
        'rememberMe' : 'input[type="checkbox"]',
        'loginBtn' : 'button[type="submit"]',
        'accountHdr' : 'h1[class="ic-Dashboard-header__title"]',
        'inboxBtn' : 'a[href="/conversations"]',
        'inboxHdr' : 'select[id="conversation_filter_select"]',
        'composeBtn' : 'button[id="compose-btn"]',
        'composeHdr' : 'div[class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"]',
        'inMsgCancel' : 'button[class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"]',
        'inMsgCourseDrop' : 'button[data-id="compose-message-course"]',
        'qaCourse':{
            selector:  ('//*[@id="compose-message-course-bs"]/ul/li[2]/a/span'),
            locateStrategy:'xpath'
        },
        'inMsgSearchBtn' : 'div[class="btn ac-search-btn"]',
        'inMsgSearchIn':{
            selector:  ('(//*[@id="compose-message-recipients"])[2]'),
            locateStrategy:'xpath'
        },
        'resultName':{
            selector:  ('.result-name'),
            locateStrategy:'css'
        },
        'nameInTo':{
            selector:  ('//*[@id="recipient-row"]/div[2]/div/div[1]/div[1]/div/ul/li'),
            locateStrategy:'xpath'
        },
        'inboxNotifications' : 'span[class="menu-item__badge"]',
        '0Notifications' :  'span[style="display: none"]',
        'home':{
            selector:  ('//*[@id="header"]/div[1]/div/a'),
            locateStrategy:'xpath'
        },
        'message2':{
            selector:  ('(//div[@class="message-right-column"])[2]'),
            locateStrategy:'xpath'
        },
        'message1':{
            selector: ('(//div[@class="message-right-column"])[1]'),
            locateStrategy: 'xpath'
        },
        'message3':{
            selector: ('//div[@class="message-right-column"])[3]'),
            locateStrategy: 'xpath'

        },
        'unreadBtn' :{
            selector: ('//*[@id="content"]/div/div/div[1]/div/ul/li[1]/div[1]/a'),
            locateStrategy: 'xpath'
        },
        'archiveBtn' : 'button[title="Archive"]',
        'deleteBtn' : 'button[id="delete-btn"]',
        'searchBar' : '.ac-input',
        'searchResult' : 'span[class="result-name"]',
        'nameInSearch' : 'li[class="ac-token"]',
        'gear' : 'a[class="al-trigger Button Button--icon-action message-detail-kyle-menu"]',
        'star' : 'a[class="star-toggle-btn ui-corner-all"]',
        'starred' : 'a[title="Unstar conversation"]'
        
    }
}