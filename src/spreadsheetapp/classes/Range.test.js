const Range = require('./Range');

describe('Range', () => {
    it('Should return the A1 Notation of the range', () => {
        const range = Range.getA1Notation();
        expect(range).toBe('A1');
    });

    it('Should return the values of the range', () => {
        const values = Range.getValues();
        expect(values).toBeDefined();
        expect(Array.isArray(values)).toBe(true);
    });

    it('Should set values of the range', () => {
        const newValues = [[1, 2], [3, 4]];
        Range.setValues(newValues);
        const values = Range.getValues();
        expect(values).toEqual(newValues);
    });

    it('Should get a specific cell from the range', () => {
        const cell = Range.getCell(0, 0);
        expect(cell.getA1Notation()).toBe('A1');
    });

    it('Should create a text finder', () => {
        const textFinder = Range.createTextFinder('test');
        expect(textFinder).toBeDefined();
        expect(textFinder.findText).toBe('test');
    });

    // find text finder test
    it('Should find text using the text finder', () => {
        const range = Range;
        range.setValues([['hello', 'world'], ['foo', 'bar']]);
        const textFinder = range.createTextFinder('world');
        const foundRange = textFinder.findNext();
        expect(foundRange.getA1Notation()).toBe('B1');
        expect(foundRange.getValue()).toBe('world');
    });
});