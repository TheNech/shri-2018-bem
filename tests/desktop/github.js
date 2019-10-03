const assert = require('chai').assert;

describe('github', function() {

    it('should find hermione title', function() {
        return this.browser
            .url('https://github.com/gemini-testing/hermione')
            .waitForVisible('.file-wrap')
            .pause(2000)
            .assertView('files', '.file-wrap', {
                allowViewportOverflow: true
            });
 
    });

    it('should find hermione files', function() {
        return this.browser
            .url('https://github.com/gemini-testing/hermione')
            .getText('#readme h1')
            .then(function(title) {
                assert.equal(title, 'Hermione')
            });
 
    });
});
