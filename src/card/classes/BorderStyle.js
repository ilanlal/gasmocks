const Widget = require('./Widget');

class BorderStyle extends Widget {
    setCornerRadius(radius) {
        if (typeof radius !== 'number' || radius < 0) {
            throw new Error('Corner radius must be a non-negative number');
        }

        this._data.cornerRadius = radius;
        return this;
    }

    setStrokeColor(color) {
        this._data.strokeColor = color;
        return this;
    }

    setType(type) {
        this._data.type = type;
        return this;
    }
}

module.exports = BorderStyle;