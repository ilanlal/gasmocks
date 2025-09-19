const SheetStubConfiguration = require('./SheetStubConfiguration')

describe('SheetStubConfiguration', () => {
  beforeEach(() => {
    SheetStubConfiguration.reset()
  })

  it('Should get the name of the sheet', () => {
    const sheet = SheetStubConfiguration.getName()
    expect(sheet).toBe('Sheet1')
  })

  it('Should get the range of the sheet', () => {
    const range = SheetStubConfiguration.getRange('A1:B2')
    expect(range).toBeDefined()
    expect(range.getA1Notation()).toBe('A1:B2')
  })

  it('Should set & get ActiveRange', () => {
    const range = SheetStubConfiguration.getRange('A1:B2')
    SheetStubConfiguration.setActiveRange(range)
    expect(SheetStubConfiguration.getActiveRange()).toBe(range)
  });

  // appendRow
  it('Should append a row to the sheet', () => {
    const initialValues = SheetStubConfiguration.getDataRange().getValues()
    const newRow = ['New', 'Row']
    SheetStubConfiguration.appendRow(newRow)
    const updatedValues = SheetStubConfiguration.getDataRange().getValues()
    expect(updatedValues.length).toBe(initialValues.length)
    expect(updatedValues[updatedValues.length - 1]).toEqual(newRow)
  });

  it('Should clear the sheet', () => {
    SheetStubConfiguration.appendRow(['Data'])
    expect(SheetStubConfiguration.getLastRow()).toBe(1) // Including header row
    SheetStubConfiguration.clear()
    expect(SheetStubConfiguration.getLastRow()).toBe(0) // Only header row remains
  });
})
