const Spreadsheet = require('./classes/Spreadsheet')

class SpreadSheetApp {
  static getActiveSpreadsheet() {
    return Spreadsheet;
  }

  static getUi() {
    // createAddonMenu
    return {
      createAddonMenu: function () {
        return this;
      },
      addItem: function (name, functionName) {
        return this;
      },
      addToUi: function () {
        return this;
      }
    }
  }
}

module.exports = SpreadSheetApp;
