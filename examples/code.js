function usePropertiesService() {
    // Do some gas stuff here
    const scriptProperties = PropertiesService.getScriptProperties();
    const value = scriptProperties.getProperty('MY_KEY');

    return value;
}

function useUrlFetchApp() {
    const response = UrlFetchApp.fetch('https://api.example.com/bot/getMe');
    const data = JSON.parse(response.getContentText());
    return data;
}

function useSpreadsheetApp() {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    sheet.getRange('A1').setValue('Hello, World!');
}

// If running in a Node.js environment, export the function
if (typeof module !== 'undefined' && module.exports) {
    // Export the function for testing or Node.js usage
    module.exports = {
        usePropertiesService,
        useUrlFetchApp,
        useSpreadsheetApp
    };
}