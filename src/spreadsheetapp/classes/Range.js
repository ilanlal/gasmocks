const RangeStubConfiguration = require('./RangeStubConfiguration');

class Range {
  static activate() {
    RangeStubConfiguration.activate();
  }

  static createTextFinder(findText) {
    return RangeStubConfiguration.createTextFinder(findText);
  }

  static getA1Notation() {
    return RangeStubConfiguration.getA1Notation();
  }

  static getCell(row, column) {
    return RangeStubConfiguration.getCell(row, column);
  }

  static getHorizontalAlignment() {
    return RangeStubConfiguration.getHorizontalAlignment();
  }

  static getLastColumn() {
    return RangeStubConfiguration.getLastColumn();
  }

  static getNumColumns() {
    return RangeStubConfiguration.getNumColumns();
  }

  static getNumRows() {
    return RangeStubConfiguration.getNumRows();
  }

  static getLastRow() {
    return RangeStubConfiguration.getLastRow();
  }

  static getSheet() {
    return RangeStubConfiguration.getSheet();
  }

  static getValue() {
    return RangeStubConfiguration.getValue();
  }

  static getValues() {
    return RangeStubConfiguration.getValues();
  }

  static getVerticalAlignment() {
    return RangeStubConfiguration.getVerticalAlignment();
  }

  static setHorizontalAlignment(value) {
    return RangeStubConfiguration.setHorizontalAlignment(value);
  }

  static setVerticalAlignment(value) {
    return RangeStubConfiguration.setVerticalAlignment(value);
  }

  static setValue(value) {
    return RangeStubConfiguration.setValue(value);
  }

  static setValues(values) {
    return RangeStubConfiguration.setValues(values);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Range;
}
