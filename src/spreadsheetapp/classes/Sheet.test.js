const Sheet = require('./Sheet');
const SheetStubConfiguration = require('./SheetStubConfiguration');
describe('Sheet', () => {
    beforeEach(() => {
        SheetStubConfiguration.reset();
    });

    // test getRange
    it('should get a range by A1 notation', () => {
        let range = Sheet.getRange('A1:B2');
        expect(range).toBeDefined();
        expect(range.getA1Notation()).toBe('A1:B2');

        // Test getting a single cell range
        range = Sheet.getRange('C1');
        expect(range).toBeDefined();
        expect(range.getA1Notation()).toBe('C1');

        // Test out of range A1 notation
        range = Sheet.getRange('B:B');
        expect(range).toBeDefined();
        expect(range.getValues()).toEqual([[]]);
    });

    it('should set and get the name', () => {
        Sheet.setName('Test Sheet');
        expect(Sheet.getName()).toBe('Test Sheet');
    });

    it('should append a row to the data', () => {
        Sheet.appendRow(['A1', 'B1']);
        expect(Sheet.getDataRange().getValues()).toEqual([['A1', 'B1']]);
    });

    it('should clear the sheet', () => {
        Sheet.appendRow(['A1', 'B1']);
        Sheet.clear();
        expect(Sheet.getDataRange().getValues()).toEqual([[]]);
    });

    it('should get last row and column', () => {
        Sheet.appendRow(['A1', 'B1']);
        Sheet.appendRow(['A2', 'B2']);
        expect(Sheet.getLastRow()).toBe(2);
        expect(Sheet.getLastColumn()).toBe(2);
    });

    it('should get data range', () => {
        Sheet.appendRow(['A1', 'B1']);
        Sheet.appendRow(['A2', 'B2']);
        Sheet.setActiveRange(Sheet.getRange('A1:B2'));
        expect(Sheet.getRange('A1:B2').getValues()).toEqual([['A1', 'B1'], ['A2', 'B2']]);
    });

    it('should manage active range', () => {
        const range = Sheet.getRange('A1:B2');
        Sheet.setActiveRange(range);
        expect(Sheet.getActiveRange()).toBe(range);
    });

    it('should get parent (Spreadsheet)', () => {
        expect(Sheet.getParent()).toBeDefined();
    });

    it('should get current cell', () => {
        expect(Sheet.getCurrentCell()).toBeDefined();
    });

    it('should set and get selection', () => {
        let range = Sheet.getRange('A1:B2');
        Sheet.setActiveSelection(range);
        expect(Sheet.getSelection()).toBe(range);
        Sheet.setActiveSelection('A1');
        expect(Sheet.getSelection().getA1Notation()).toBe('A1');
    });
});
