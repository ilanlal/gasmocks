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
    getRange(row, column, numRows, numColumns) {
        if (typeof row === 'string') {
            // If the first argument is a string, treat it as A1 notation
            return this._range.setA1Notation(row)
                .setValues(this._range.getValues());
        }
        
        // Otherwise, treat the arguments as row, column, numRows, numColumns
        const a1Notation = `${String.fromCharCode(64 + column)}${row}:${String.fromCharCode(64 + column + numColumns - 1)}${row + numRows - 1}`;
        return this._range.setA1Notation(a1Notation)
            .setValues(this._range.getValues());
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
                .setValues(RangeStubConfiguration.getValues());
        } else {
            this._selection = selection
        }
        return this;
    }

    setCurrentCell(cell = RangeStubConfiguration) {
        this._currentCell = cell;
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
