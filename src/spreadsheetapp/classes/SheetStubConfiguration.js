/* eslint-disable indent */
const RangeStubConfiguration = require('./RangeStubConfiguration')
const SpreadsheetStubConfiguration = require('./SpreadsheetStubConfiguration')

class SheetStubConfiguration {
    constructor() {
        this._name = 'Sheet1';
        this._parent = SpreadsheetStubConfiguration;
        this._range = RangeStubConfiguration;
        this._activeCell = RangeStubConfiguration;
        /** @type {RangeStubConfiguration | null} */
        this._currentCell = RangeStubConfiguration;
        /** @type {RangeStubConfiguration | null} */
        this._selection = null;
    }

    appendRow(rowContents) {
        if (this._range.getLastRow() === 0) {
            this._range.setValues([rowContents])
            return this._range
        }
        return this._range.setValues([...this._range.getValues(), rowContents])
    }

    clear() {
        this._range.reset()
        return this._range
    }

    getActiveCellRange() {
        return this._range
    }

    getActiveCell() {
        return this._activeCell;
    }

    /**
     * Returns a Range corresponding to the dimensions in which data is present.
     */
    getActiveRange() {
        // For simplicity, we return the entire range. In a real implementation, this would return the actual active range.
        return this._range;
    }

    getCurrentCell() {
        return this._currentCell;
    }

    getDataRange() {
        return this._range;
    }

    getLastColumn() {
        return this._range.getLastColumn();
    }

    getLastRow() {
        return this._range.getLastRow();
    }

    getName() {
        return this._name;
    }

    getParent() {
        return this._parent;
    }

    /**
     * Returns the range as specified in A1 notation or R1C1 notation.
     */
    getRange(a1Notation) {
        return this._range.setA1Notation(a1Notation);
    }

    getSelection() {
        return this._selection;
    }

    getSheetName() {
        return this._name;
    }

    setActiveRange(range = RangeStubConfiguration) {
        this._activeCell = range;
        return this;
    }

    setActiveSelection(selection = null) {
        // if selection is string
        if (typeof selection === 'string') {
            this._selection = RangeStubConfiguration.setA1Notation(selection)
        } else {
            this._selection = selection
        }
        return this;
    }

    setCurrentCell(cell = RangeStubConfiguration) {
        this._currentCell = RangeStubConfiguration.setA1Notation(cell.getA1Notation());
        // Set value of the current cell to match the values[column]
        const col = this._activeCell.getA1Notation().match(/[A-Z]+/)[0].charCodeAt(0) - 'A'.charCodeAt(0);
        const row = this._activeCell.getA1Notation().match(/[0-9]+/)[0] - 1;
        this._currentCell.setValue(this._activeCell.getValues()[row][col]);
        return this;
    }

    setName(name) {
        this._name = name
        return this
    }

    reset() {
        this._name = 'Sheet1'
        this._parent = SpreadsheetStubConfiguration
        this._range = RangeStubConfiguration
        this._activeCell = RangeStubConfiguration
        this._currentCell = null;
        this._selection = null;
        RangeStubConfiguration.reset()
    }
}

module.exports = new SheetStubConfiguration()
