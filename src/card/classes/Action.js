const BaseClass = require('../../helpers/BaseClass')

class Action extends BaseClass {
  addRequiredWidgets(fieldName) {
    this._data.requiredWidgets = this._data.requiredWidgets || []
    this._data.requiredWidgets.push(fieldName)
  }

  setFunctionName(functionName) {
    this._data.actionMethodName = functionName

    return this
  }

  setLoadIndicator(loadIndicator) {
    this._data.actionMethodName = loadIndicator

    return this
  }

  setParameters(parameters) {
    this._data.parameters = parameters

    return this
  }
}

module.exports = Action
