const Spreadsheet = require('./Spreadsheet')

describe('Spreadsheet', () => {
  it('Should have correct default Locale', () => {
    expect(Spreadsheet.getSpreadsheetLocale()).toBe('en_US')
  });

  it('Should have correct default TimeZone', () => {
    expect(Spreadsheet.getSpreadsheetTimeZone()).toBe('America/New_York')
  });
})
