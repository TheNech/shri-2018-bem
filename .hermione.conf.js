module.exports = {
    sets: {
        desktop: {
            files: 'tests/desktop'
        }
    },

    browsers: {
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox' // this browser should be installed on your OS
            }
        }
    },

    plugins: {
        'html-reporter/hermione': {
            enabled: false,
            // path: 'my/hermione-reports',
            defaultView: 'all',
            baseHost: 'test.com',
            errorPatterns: [
                'Parameter .* must be a string',
                {
                    name: 'Cannot read property of undefined',
                    pattern: 'Cannot read property .* of undefined'
                }
            ]
        },
        'harry-reporter': {
            enabled: true,
            path: 'harry-reports',
            defaultView: 'all',
            baseHost: 'test.com'
        },
    },
};
