const SheetStubConfiguration = require('./SheetStubConfiguration');

class RangeStubConfiguration {
    constructor() {
        this._sheet = SheetStubConfiguration;
        this._a1Notation = 'A1';
        this._values = [[]];
        this._currentMatchRowIndex = 0;
        this._currentMatchColumnIndex = 0;
    }

    activate() {
        return this._sheet.setActiveRange(this);
    }

    createTextFinder(findText) {
        // Implement the logic for creating a text finder
        // This is a stub method and should be customized as needed
        return {
            findText: findText,
            getCurrentMatch: () => {
                if (this._currentMatchRowIndex > 0 && this._currentMatchColumnIndex > 0) {
                    return this.getCell(this._currentMatchRowIndex, this._currentMatchColumnIndex);
                }
                return null; // No current match
            },
            findNext: () => {
                const values = this.getValues();
                for (let row = this._currentMatchRowIndex; row < values.length; row++) {
                    for (let col = this._currentMatchColumnIndex; col < values[row].length; col++) {
                        if (values[row][col] === findText) {
                            this._currentMatchRowIndex = row + 1; // Update the current row index for the next search
                            this._currentMatchColumnIndex = col + 1; // Update the current column index for the next search
                            return this.getCell(this._currentMatchRowIndex, this._currentMatchColumnIndex);
                        }
                    }
                    this._currentMatchColumnIndex = 0; // Reset column index to the start of the next row
                }
                return null; // No match found
            },
            findAll: () => {
                const matches = [];
                const values = this.getValues();
                for (let row = 0; row < values.length; row++) {
                    for (let col = 0; col < values[row].length; col++) {
                        if (values[row][col] === findText) {
                            matches.push(this.getCell(row + 1, col + 1));
                        }
                    }
                }
                return matches;
            },
            findPrevious: () => {
                const values = this.getValues();
                
                // reset the _currentMatchRowIndex and _currentMatchColumnIndex to the end of the range if they are out of bounds
                if (this._currentMatchRowIndex < 1 || this._currentMatchColumnIndex < 1) {
                    this._currentMatchRowIndex = values.length;
                    this._currentMatchColumnIndex = values[values.length - 1].length;
                }
                
                // Search backwards from the current position
                for (let row = this._currentMatchRowIndex - 1; row >= 0; row--) {
                    for (let col = this._currentMatchColumnIndex - 1; col >= 0; col--) {
                        if (values[row][col] === findText) {
                            this._currentMatchRowIndex = row + 1; // Update the current row index for the next search
                            this._currentMatchColumnIndex = col + 1; // Update the current column index for the next search
                            return this.getCell(this._currentMatchRowIndex, this._currentMatchColumnIndex);
                        }
                    }
                    this._currentMatchColumnIndex = values[row].length; // Reset column index to the end of the previous row
                }
                return null; // No match found
            }

        };
    }

    getA1Notation() {
        return this._a1Notation;
    }

    getCell(row, column) {
        const values = this.getValues();
        if (row < 1 || column < 1 || row > values.length || column > values[0].length) {
            throw new Error('Cell out of range');
        }
        const cellValue = values[row - 1][column - 1];
        return this.setA1Notation(`${String.fromCharCode(64 + column)}${row}`).setValue(cellValue);
    }

    getHorizontalAlignment() {
        return this._horizontalAlignment;
    }

    getLastColumn() {
        if (this._values.length === 0 || this._values[0].length === 0) {
            return 0;
        }
        return this._values[0].length;
    }

    getNumColumns() {
        if (this._values.length === 0 || this._values[0].length === 0) {
            return 0;
        }
        return this._values[0].length;
    }

    getNumRows() {
        if (this._values.length === 0 || this._values[0].length === 0) {
            return 0;
        }
        return this._values.length;
    }

    getLastRow() {
        if (this._values.length === 0 || this._values[0].length === 0) {
            return 0;
        }
        return this._values.length;
    }

    /**
     * Returns the row position for this range. Identical to getRowIndex().
     */
    getRow() {
        if (this._a1Notation) {
            const match = this._a1Notation.match(/\d+/);
            return match ? parseInt(match[0], 10) : null;
        }
        return null;
    }

    getSheet() {
        return this._sheet;
    }

    getValue() {
        if (this._values.length === 0 || this._values[0].length === 0) {
            return null;
        }
        // Returns the value of the top-left cell in the range.
        return this._values[0][0];
    }

    getValues() {
        return this._values;
    }

    getVerticalAlignment() {
        return this._verticalAlignment;
    }

    setA1Notation(a1Notation) {
        // Set the A1 notation and update the internal state accordingly
        this._a1Notation = a1Notation;
        // In a real implementation, you would also update the values and other properties based on the new A1 notation
        return this;
    }

    setHorizontalAlignment(value) {
        this._horizontalAlignment = value;
        return this;
    }

    setVerticalAlignment(value) {
        this._verticalAlignment = value;
        return this;
    }

    setValue(value) {
        // Set the value of the top-left cell in the range
        this._values[0][0] = value;
        return this;
    }

    setValues(values = [[]]) {
        if (!Array.isArray(values) || !Array.isArray(values[0])) {
            throw new Error('Input must be a 2D array');
        }
        if (values.length === 0 || values[0].length === 0) {
            this._values = [[]];
            return this;
        }
        if (values.length > 1000 || values[0].length > 1000) {
            throw new Error('Input exceeds maximum allowed size of 1000x1000');
        }
        this._values = values;
        return this;
    }

    reset() {
        this._sheet = SheetStubConfiguration;
        this._a1Notation = 'A1';
        this._values = [[]];
    }
}

module.exports = new RangeStubConfiguration();
