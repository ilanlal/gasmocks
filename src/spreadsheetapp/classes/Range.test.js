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
});