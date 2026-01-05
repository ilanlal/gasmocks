const BaseClass = require('../../helpers/BaseClass');
const VerticalAlignment = require('../enums/VerticalAlignment');
const HorizontalSizeStyle = require('../enums/HorizontalSizeStyle');
const HorizontalAlignment = require('../enums/HorizontalAlignment');

class Column extends BaseClass {
    addWidget(widget) {
        if ((widget instanceof Widget) === false) {
            throw new Error('Invalid value passed for "addWidget"');
        }

        if (widget instanceof Button) {
            const buttonSet = new ButtonSet().addButton(widget);

            this._data.widgets.push(buttonSet.getData());
        } else {
            this._data.widgets.push(widget.getData());
        }

        return this;
    }

    setHorizontalAlignment(horizontalAlignment) {
        if (!Object.values(HorizontalAlignment).includes(horizontalAlignment)) {
            throw new Error('Invalid value passed for "setHorizontalAlignment"');
        }
        this._data.horizontalAlignment = horizontalAlignment;
        return this;
    }

    setHorizontalSizeStyle(horizontalSizeStyle) {
        if (!Object.values(HorizontalSizeStyle).includes(horizontalSizeStyle)) {
            throw new Error('Invalid value passed for "setHorizontalSizeStyle"');
        }
        this._data.horizontalSizeStyle = horizontalSizeStyle;
        return this;
    }

    setVerticalAlignment(verticalAlignment) {
        if (!Object.values(VerticalAlignment).includes(verticalAlignment)) {
            throw new Error('Invalid value passed for "setVerticalAlignment"');
        }
        this._data.verticalAlignment = verticalAlignment;
        return this;
    }
}

module.exports = Column;