module.exports = {
    sets: {
        desktop: {
            files: 'tests/desktop'
        }
    },

    browsers: {
        'chrome-headless': {
            desiredCapabilities: {
                browserName: 'chrome',
                // chromeOptions: {
                //     args: [],
                //     binary: '/Users/savchenkovvk/work/shri-2018-bem/node_modules/chromium/lib/chromium/chrome-mac/Chromium.app/Contents/MacOS/Chromium'
                // }
            },
            windowSize: {
                width: 1000,
                height: 1200
            },
            // screenshotDelay: 5000
            // windowSize: '1000x800'
        }
    },

    plugins: {
        'html-reporter/hermione': {
            // enabled: false,
            // path: 'html-report',
            defaultView: 'all',
            baseHost: 'test.com',
            // metaInfoBaseUrls: {
            //     file: '',
            //     sessionId: 'https://selenium.yandex-team.ru/logs',
            // },
            errorPatterns: [
                'Parameter .* must be a string',
                {
                    name: 'Cannot read property of undefined',
                    pattern: 'Cannot read property .* of undefined'
                }
            ]
        },
        'hermione-headless-chrome': {
            // enabled: false,
            browserId: 'chrome-headless',
            version: '',
            downloadAttempts: 35
        }
    },
};
