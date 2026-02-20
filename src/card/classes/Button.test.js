const Button = require('./Button')
const Action = require('./Action')
const OpenLink = require('./OpenLink')

describe('Button', () => {
  it('Should set onClick action', () => {
    const data = new Button()
      .setOnClickAction(new Action())
      .getData()

    expect(data).toEqual({ onClick: { action: {} } })
  })

  it('Should throw an exception on set onClickAction', () => {
    expect(new Button().setOnClickAction)
      .toThrow('Invalid value passed for "setOnClickAction"')
  })

  it('Should set openLink', () => {
    const data = new Button()
      .setOpenLink(new OpenLink())
      .getData()

    expect(data).toEqual({ onClick: { openLink: {} } })
  })

  it('Should throw an exception on set openLink', () => {
    expect(new Button().setOpenLink)
      .toThrow('Invalid value passed for "setOpenLink"')
  })
})
