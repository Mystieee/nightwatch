/**
 * Sample automated test scenario for Nightwatch.js
 *
 * > it navigates to google.com and searches for nightwatch,
 *   verifying if the term 'The Night Watch' exists in the search results
 */

module.exports = {
    '@disabled': false,
  
    'demo test google' : function (client) {
      client
        .url('http://google.com')
        .waitForElementPresent('body', 1000);
    },
  
    'part two' : function(client) {
      client
        .waitForElementVisible('input[type=text]', 3000)
        .execute(function(){document.getElementById('_EmailAddress').value = 'email@address.co.uk';})
        .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
        .pause(1000)
        .assert.containsText('#main', 'Night Watch')
        .end();
    }
  };
  