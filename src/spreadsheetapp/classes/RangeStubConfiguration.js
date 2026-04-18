const SheetStubConfiguration = require('./SheetStubConfiguration');

class RangeStubConfiguration {
    constructor() {
        this._sheet = SheetStubConfiguration;
        this._a1Notation = 'A1';
        this._values = [[]];
    }

    activate() {
        return this._sheet.setActiveRange(this);
    }

    createTextFinder(findText) {
        // Implement the logic for creating a text finder
        // This is a stub method and should be customized as needed
        return {
            findText: findText,
            findNext: () => {
                const values = this.getValues();

                for (let r = 0; r < values.length; r++) {
                    for (let c = 0; c < values[r].length; c++) {
                        if (values[r][c] === findText) {
                            return this
                                .setA1Notation(`${String.fromCharCode(65 + c)}${r + 1}`)
                                .setValue(values[r][c]);
                        }
                    }
                }

                return null; // No match found
            },
            findAll: () => {
                const values = this.getValues();
                const matches = [];
                for (let r = 0; r < values.length; r++) {
                    for (let c = 0; c < values[r].length; c++) {
                        if (values[r][c] === findText) {
                            matches.push(this
                                .setA1Notation(`${String.fromCharCode(65 + c)}${r + 1}`)
                                .setValue(values[r][c]));
                        }
                    }
                }
                return matches;
            },
            findPrevious: () => {
                const values = this.getValues();
                for (let r = values.length - 1; r >= 0; r--) {
                    for (let c = values[r].length - 1; c >= 0; c--) {
                        if (values[r][c] === findText) {
                            return this
                                .setA1Notation(`${String.fromCharCode(65 + c)}${r + 1}`)
                                .setValue(values[r][c]);
                        }
                    }
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
