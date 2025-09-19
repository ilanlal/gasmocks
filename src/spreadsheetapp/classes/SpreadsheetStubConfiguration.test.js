const Spreadsheet = require('./Spreadsheet')
const SpreadsheetStubConfiguration = require('./SpreadsheetStubConfiguration')

describe('SpreadsheetStubConfiguration', () => {
    const locale = 'fr_FR';
    const tz = 'Europe/Paris';

    beforeEach(() => {
        SpreadsheetStubConfiguration.reset();
    });

    it('Should set correct Locale & TimeZone', () => {
        SpreadsheetStubConfiguration.setLocale(locale);
        SpreadsheetStubConfiguration.setTimeZone(tz);

        expect(Spreadsheet.getSpreadsheetLocale()).toBe(locale);
        expect(Spreadsheet.getSpreadsheetTimeZone()).toBe(tz);
    });

    it('Should get correct Locale & TimeZone', () => {
        Spreadsheet.setSpreadsheetLocale(locale);
        Spreadsheet.setSpreadsheetTimeZone(tz);

        expect(SpreadsheetStubConfiguration.getLocale()).toBe(locale);
        expect(SpreadsheetStubConfiguration.getTimeZone()).toBe(tz);
    });

    it('Should insert & getSheetByName', () => {
        const sheetName = 'Dummy Sheet';
        const sheet = SpreadsheetStubConfiguration.insertSheet(sheetName);
        expect(sheet.getName()).toBe(sheetName);
        expect(Spreadsheet.getSheetByName(sheetName)).toBe(sheet);
    });

    it('Should set & get ActiveSheet', () => {
        const sheet = SpreadsheetStubConfiguration.insertSheet('Dummy Sheet');
        SpreadsheetStubConfiguration.setActiveSheet(sheet);
        expect(Spreadsheet.getActiveSheet()).toBe(sheet);
    });
});