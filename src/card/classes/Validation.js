const BaseClass = require('../../helpers/BaseClass')

class Validation extends BaseClass {
  constructor() {
    super()
    this._data = {
      characterLimit: '50',
      type: CardService.InputType.TEXT
    }
  }

  setCharacterLimit(limit = '50') {
    this._data.characterLimit = limit
    return this
  }

  setInputType(type = CardService.InputType.TEXT) {
    this._data.type = type
    return this
  }
}

module.exports = Validation;