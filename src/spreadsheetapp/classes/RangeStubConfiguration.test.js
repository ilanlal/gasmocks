const RangeStubConfiguration = require('./RangeStubConfiguration');

describe('RangeStubConfiguration', () => {
    beforeEach(() => {
        RangeStubConfiguration.reset()
    });

    it('Should get the A1 Notation of the range', () => {
        const a1Notation = RangeStubConfiguration.getA1Notation();
        expect(a1Notation).toBe('A1');
    });

    it('Should get the values of the range', () => {
        const values = RangeStubConfiguration.getValues();
        expect(values).toBeDefined();
        expect(Array.isArray(values)).toBe(true);
    });

    it('Should set values of the range', () => {
        const newValues = [[1, 2], [3, 4]];
        RangeStubConfiguration.setValues(newValues);
        const values = RangeStubConfiguration.getValues();
        expect(values).toEqual(newValues);
    });

    it('Should get a specific cell from the range', () => {
        const cell = RangeStubConfiguration.getCell(0, 0);
        expect(cell.getA1Notation()).toBe('A1');
    });

    it('Should create a text finder', () => {
        const textFinder = RangeStubConfiguration.createTextFinder('test');
        expect(textFinder).toBeDefined();
        expect(textFinder.findText).toBe('test');
    });
});