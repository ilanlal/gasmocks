const SheetStubConfiguration = require('./SheetStubConfiguration');

class Sheet {
    static appendRow(row) {
        SheetStubConfiguration.appendRow(row);
    }

    static getName() {
        return SheetStubConfiguration.getName();
    }

    static getParent() {
        return SheetStubConfiguration.getParent();
    }

    static getActiveCellRange() {
        return SheetStubConfiguration.getActiveCellRange();
    }

    static getActiveCell() {
        return SheetStubConfiguration.getActiveCell();
    }

    static getActiveRange() {
        return SheetStubConfiguration.getActiveRange();
    }
    static getCurrentCell() {
        return SheetStubConfiguration.getCurrentCell();
    }

    static clear() {
        SheetStubConfiguration.clear();
    }

    static getDataRange() {
        return SheetStubConfiguration.getDataRange();
    }

    static getLastColumn() {
        return SheetStubConfiguration.getLastColumn();
    }

    static getLastRow() {
        return SheetStubConfiguration.getLastRow();
    }

    static getRange(a1Notation) {
        return SheetStubConfiguration.getRange(a1Notation);
    }

    static getSelection() {
        return SheetStubConfiguration.getSelection();
    }

    static getSheetName() {
        return SheetStubConfiguration.getSheetName();
    }

    static setActiveRange(range) {
        return SheetStubConfiguration.setActiveRange(range);
    }

    static setActiveSelection(selection) {
        return SheetStubConfiguration.setActiveSelection(selection);
    }

    static setCurrentCell(cell) {
        return SheetStubConfiguration.setCurrentCell(cell);
    }

    static setName(name) {
        return SheetStubConfiguration.setName(name);
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Sheet;
}
