const Widget = require('./Widget');

class TextParagraph extends Widget {
  setText(text) {
    this._data.text = text;

    return this;
  }

  setMaxLines(maxLines) {
    this._data.maxLines = maxLines;

    return this;
  }

  getData() {
    return { textParagraph: super.getData() }
  }
}

module.exports = TextParagraph
