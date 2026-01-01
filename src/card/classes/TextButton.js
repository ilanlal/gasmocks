const Button = require('./Button');
const AuthorizationAction = require('./AuthorizationAction');
const MaterialIcon = require('./MaterialIcon');
const TextButtonStyle = require('../enums/TextButtonStyle');

class TextButton extends Button {
  setAuthorizationAction(action) {
    if ((action instanceof AuthorizationAction) === false) {
      throw new Error('Invalid value passed for "setAuthorizationAction"');
    }

    this.set('onClick.openLink', action.getData());

    return this;
  }

  setBackgroundColor(backgroundColor) {
    this._data.backgroundColor = backgroundColor;
    return this;
  }

  setDisabled(disabled) {
    this._data.disabled = disabled;
    return this;
  }

  setIcon(icon) {
    this._data.icon = icon;
    return this;
  }

  setIconUrl(url) {
    this._data.iconUrl = url;
    return this;
  }

  setMaterialIcon(icon) {
    if (!(icon instanceof MaterialIcon)) {
      throw new Error('Invalid value passed for "setMaterialIcon"');
    }
    this._data.icon = icon.getData();
    return this;
  }

  setText(text) {
    this._data.text = text;
    return this;
  }

  setTextButtonStyle(style) {
    if (!Object.values(TextButtonStyle).includes(style)) {
      throw new Error('Invalid value passed for "setTextButtonStyle"');
    }

    this._data.style = style;
    return this;
  }
  getData() {
    return { textButton: super.getData() }
  }
}

module.exports = TextButton
