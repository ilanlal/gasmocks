const Sheet = require('./Sheet');
const SheetStubConfiguration = require('./SheetStubConfiguration');

describe('Sheet', () => {
    afterEach(() => {
        Sheet.clear();
    });

    it('should get the name', () => {
        SheetStubConfiguration.setName('Test Sheet');
        expect(Sheet.getName()).toBe('Test Sheet');
    });

    it('should append a row', () => {
        Sheet.appendRow(['A1', 'B1']);
        expect(Sheet.getDataRange().getValues()).toEqual([['A1', 'B1']]);
    });

    it('should clear the data', () => {
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
        SheetStubConfiguration.appendRow(['A1', 'B1']);
        SheetStubConfiguration.appendRow(['A2', 'B2']);

        expect(Sheet.getRange('A1:B2').getValues()).toEqual([['A1', 'B1'], ['A2', 'B2']]);
    });
});
