const Widget = require('./Widget');

class Image extends Widget {
  setAltText(altText) {
    this._data.altText = altText;
    return this;
  }

  setId(id) {
    this._data.id = id;
    return this;
  }

  setOnClickAction(action) {
    this._data.onClickAction = action;
    return this;
  }

  setOnClickOpenLinkAction(openLink) {
    this._data.onClickOpenLinkAction = openLink;
    return this;
  }

  setOpenLink(openLink) {
    this._data.openLink = openLink;
    return this;
  }

  setVisibility(visibility) {
    this._data.visibility = visibility;
    return this;
  }

  setImageUrl(url) {
    this._data.url = url;

    return this;
  }
}

module.exports = Image;
