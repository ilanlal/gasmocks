const Spreadsheet = require('./classes/Spreadsheet')

class SpreadSheetApp {
  static getActiveSpreadsheet () {
    return Spreadsheet
  }
}

module.exports = SpreadSheetApp
