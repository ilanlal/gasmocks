require('../src');

const {
    usePropertiesService,
    useUrlFetchApp,
    useSpreadsheetApp
} = require('../examples/code');

describe('Example code', () => {
    it('Should run usePropertiesService without errors', () => {
        // Mock PropertiesService for testing
        global.PropertiesService = {
            getScriptProperties: () => ({
                getProperty: (key) => {
                    if (key === 'MY_KEY') return 'mocked value';
                    return null;
                }
            })
        };

        usePropertiesService();
    });

    // UrlFetchAppStubConfiguration
    it('Should run useUrlFetchApp without errors', () => {
        const contentText = JSON.stringify({
            user: {
                id: 123456789,
                is_bot: false,
                first_name: 'John',
                username: 'john_doe',
                language_code: 'en'
            }
        });

        // Mock UrlFetchApp for testing
        global.UrlFetchAppStubConfiguration.when(`https://api.example.com/bot/getMe`)
            .return(new HttpResponse().setContentText(contentText));


        const data = useUrlFetchApp();
        expect(data).toHaveProperty('user');
        expect(data.user).toHaveProperty('id', 123456789);
        expect(data.user).toHaveProperty('is_bot', false);
        expect(data.user).toHaveProperty('first_name', 'John');
        expect(data.user).toHaveProperty('username', 'john_doe');
        expect(data.user).toHaveProperty('language_code', 'en');
    });

    it('Should run useSpreadsheetApp without errors', () => {
        useSpreadsheetApp();
    });
});