const Sheet = require('./Sheet');
const SheetStubConfiguration = require('./SheetStubConfiguration');
describe('Sheet', () => {
    beforeEach(() => {
        SheetStubConfiguration.reset();
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
        const range = Sheet.getRange('A1:B2');
        Sheet.setActiveSelection(range);
        expect(Sheet.getSelection()).toBe(range);
        Sheet.setActiveSelection('A1');
        expect(Sheet.getSelection().getA1Notation()).toBe('A1');
    });
});
