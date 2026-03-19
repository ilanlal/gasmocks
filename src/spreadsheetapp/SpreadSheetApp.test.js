const Spreadsheet = require('./classes/Spreadsheet')
const SpreadsheetApp = require('./SpreadsheetApp')

describe('SpreadsheetApp', () => {
  it('Should return Spreadsheet', () => {
    expect(SpreadsheetApp.getActiveSpreadsheet()).toBe(Spreadsheet)
  })
})
