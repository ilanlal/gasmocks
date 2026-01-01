// Obsolete
// const set = require('lodash.set')

// Simple implementation of lodash.set
const set = (obj, path, value) => {
  const keys = path.split('.');
  let current = obj;
  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value;
    } else {
      current[key] = current[key] || {};
    }
    current = current[key];
  })
}

const Button = require('./Button');
const OpenLink = require('./OpenLink');
const Action = require('./Action');
const MaterialIcon = require('./IconImage');
const ImageButtonStyle = require('../enums/ImageButtonStyle');

class ImageButton extends Button {
  setAltText(altText) {
    this._data.altText = altText;
    return this;
  }

  setIconUrl(url) {
    this._data.url = url;

    return this;
  }

  setIcon(icon) {
    this._data.icon = icon;
    return this;
  }

  setImageButtonStyle(imageButtonStyle) {
    if (!Object.values(ImageButtonStyle).includes(imageButtonStyle)) {
      throw new Error('Invalid value passed for "setImageButtonStyle"');
    }

    this._data.imageButtonStyle = imageButtonStyle;
    return this;
  }

  setMaterialIcon(icon) {
    if (!(icon instanceof MaterialIcon)) {
      throw new Error('Invalid value passed for "setMaterialIcon"');
    }
    this._data.icon = icon.getData();
    return this;
  }

  setOnClickAction(action) {
    if ((action instanceof Action) === false) {
      throw new Error('Invalid value passed for "setOnClickAction"');
    }
    set(this._data, 'onClick.action', action.getData());

    return this;
  }

  setOpenLink(openLink) {
    if ((openLink instanceof OpenLink) === false) {
      throw new Error('Invalid value passed for "setOpenLink"');
    }

    set(this._data, 'onClick.openLink', openLink.getData());

    return this;
  }

  setOnClickOpenLinkAction(action) {
    if ((action instanceof Action) === false) {
      throw new Error('Invalid value passed for "setOnClickOpenLinkAction"');
    }

    set(this._data, 'onClick.action', action.getData());

    return this;
  }
}

module.exports = ImageButton;
