const Spreadsheet = require('./classes/Spreadsheet')
const SpreadSheetApp = require('./SpreadsheetApp')

describe('SpreadSheetApp', () => {
  it('Should return Spreadsheet', () => {
    expect(SpreadSheetApp.getActiveSpreadsheet()).toBe(Spreadsheet)
  })
})
