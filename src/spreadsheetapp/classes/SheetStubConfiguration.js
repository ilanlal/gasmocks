/* eslint-disable indent */
const RangeStubConfiguration = require('./RangeStubConfiguration')
const SpreadsheetStubConfiguration = require('./SpreadsheetStubConfiguration')

class SheetStubConfiguration {
    constructor() {
        this._name = 'Sheet1'
        this._parent = SpreadsheetStubConfiguration
        this._range = RangeStubConfiguration
        this._activeCell = RangeStubConfiguration
        /** @type {RangeStubConfiguration | null} */
        this._currentCell = null
        /** @type {RangeStubConfiguration | null} */
        this._selection = null
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

    getActiveRange() {
        return this._activeCell;
    }

    getCurrentCell() {
        return this._currentCell
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

    getRange(a1Notation) {
        // if a1Notation is not provided, return the whole range
        if (!a1Notation) {
            return this._range;
        }

        // return new 2D range with the provided a1Notation and values match to the provided a1Notation
        const match = /([A-Z]+)(\d+)/.exec(a1Notation);
        if (!match) {
            throw new Error(`Invalid A1 notation: ${a1Notation}`);
        }
        const column = match[1];
        const row = parseInt(match[2], 10);
        const columnIndex = column.charCodeAt(0) - 64;
        const values = this._range.getValues();
        let rangeValues;
        if (row < 1 || columnIndex < 1 || row > values.length || columnIndex > values[0].length) {
            rangeValues = [[]];
        } else {
            rangeValues = values.slice(row - 1).map(r => r.slice(columnIndex - 1));
        }
        
        return this._range.setA1Notation(a1Notation).setValues(rangeValues);
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

    setCurrentCell(cell = null) {
        this._currentCell = cell
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
        this._currentCell = null
        this._selection = null
        RangeStubConfiguration.reset()
    }
}

module.exports = new SheetStubConfiguration()
