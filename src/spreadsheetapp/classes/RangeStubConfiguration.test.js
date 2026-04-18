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
        // First, set some values to ensure the cell exists
        RangeStubConfiguration.setValues([[10, 20], [30, 40]]);
        const cell = RangeStubConfiguration.getCell(1, 1);
        expect(cell.getA1Notation()).toBe('A1');
    });

    // getRow test
    it('Should get the row number of the range', () => {
        RangeStubConfiguration.setA1Notation('B2');
        const row = RangeStubConfiguration.getRow();
        expect(row).toBe(2);
    });

    describe('createTextFinder', () => {
        it('Should create a TextFinder with the specified text', () => {
            const findText = 'Test';
            const textFinder = RangeStubConfiguration.createTextFinder(findText);
            expect(textFinder).toBeDefined();
            expect(textFinder.findText).toBe(findText);
        });

        // findNext test
        it('Should find the next occurrence of the text', () => {
            const findText = 'Test';
            RangeStubConfiguration.setValues([['Test', 'No Match'], ['No Match', 'Test']]);
            const textFinder = RangeStubConfiguration.createTextFinder(findText);
            const firstMatch = textFinder.findNext();
            expect(firstMatch.getA1Notation()).toBe('A1');
            const secondMatch = textFinder.findNext();
            expect(secondMatch.getA1Notation()).toBe('B2');
        });

        // findAll test
        it('Should find all occurrences of the text', () => {
            const findText = 'Test';
            RangeStubConfiguration.setValues([['Test', 'No Match'], ['No Match', 'Test']]);
            const textFinder = RangeStubConfiguration.createTextFinder(findText);
            const allMatches = textFinder.findAll();
            expect(allMatches.length).toBe(2);
            expect(allMatches[0].getA1Notation()).toBe('A1');
            expect(allMatches[1].getA1Notation()).toBe('B2');
        });

    });

    

});