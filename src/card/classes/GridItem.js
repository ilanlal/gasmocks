const BaseClass = require('../../helpers/BaseClass');

class GridItem extends BaseClass {
    setIdentifier(id) {
        this._data.identifier = id;
        return this;
    }
    setImage(image) {
        this._data.image = image;
        return this;
    }

    setLayout(layout) {
        this._data.layout = layout;
        return this;
    }

    setSubtitle(subtitle) {
        this._data.subtitle = subtitle;
        return this;
    }

    setTextAlignment(alignment) {
        this._data.textAlignment = alignment;
        return this;
    }

    setTitle(title) {
        this._data.title = title;
        return this;
    }
}

module.exports = GridItem;