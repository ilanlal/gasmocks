// Obsolete
// const set = require('lodash.set')

// Simple implementation of lodash.set
const set = (obj, path, value) => {
  // Should throw an exception: Invalid value passed for "setOpenLink"
  if (typeof path !== 'string') {
    throw new Error('Invalid value passed for "setOpenLink"')
  }
  const keys = path.split('.')
  let current = obj
  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value
    } else {
      current[key] = current[key] || {}
    }
    current = current[key]
  })
}

const Action = require('./Action')
const Widget = require('./Widget')
const Button = require('./Button')
const OpenLink = require('./OpenLink')

class KeyValue extends Widget {
  setBottomLabel (bottomLabel) {
    this._data.bottomLabel = bottomLabel

    return this
  }

  setButton (button) {
    if ((button instanceof Button) === false) {
      throw new Error('Invalid value passed for "setButton"')
    }

    this._data.textButton = button.getData()

    return this
  }

  setContent (content) {
    this._data.content = content

    return this
  }

  setIconUrl (iconUrl) {
    this._data.iconUrl = iconUrl

    return this
  }

  setMultiline (multiline) {
    this._data.multiline = multiline

    return this
  }

  setOnClickAction (onClickAction) {
    if ((onClickAction instanceof Action) === false) {
      throw new Error('Invalid value passed for "setOnClickAction"')
    }

    set(this._data, 'onClick.action', onClickAction.getData())

    return this
  }

  setOpenLink (openLink) {
    if ((openLink instanceof OpenLink) === false) {
      throw new Error('Invalid value passed for "setOpenLink"')
    }

    // TODO: check the name of the property
    this._data.openLink = openLink.getData()

    return this
  }

  setTopLabel (topLabel) {
    this._data.topLabel = topLabel

    return this
  }

  getData () {
    return { keyValue: super.getData() }
  }
}

module.exports = KeyValue
