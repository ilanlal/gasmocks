const RangeStubConfiguration = require('./RangeStubConfiguration');

describe('RangeStubConfiguration', () => {
    beforeEach(() => {
        RangeStubConfiguration.reset()
    });

    it('Should get the A1 Notation of the range', () => {
        const a1Notation = RangeStubConfiguration.getA1Notation();
        expect(a1Notation).toBe('A1');
    });
});