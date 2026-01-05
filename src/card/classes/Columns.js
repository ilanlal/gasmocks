const Widget = require('./Widget');
const Column = require('./Column');
const VerticalAlignment = require('../enums/VerticalAlignment');
const HorizontalSizeStyle = require('../enums/HorizontalSizeStyle');
const HorizontalAlignment = require('../enums/HorizontalAlignment');
const Visibility = require('../enums/Visibility');
const WrapStyle = require('../enums/WrapStyle');

class Columns extends Widget {
    constructor() {
        super();
        this._data.columns = [];
    }

    addColumn(column) {
        if ((column instanceof Column) === false) {
            throw new Error('Invalid value passed for "addColumn"');
        }
        this._data.columns.push(column.getData());
        return this;
    }

    setId(id) {
        this._data.id = id;
        return this;
    }

    setVisibility(visibility) {
        if (!Object.values(Visibility).includes(visibility)) {
            throw new Error('Invalid visibility value');
        }
        this._data.visibility = visibility;
        return this;
    }

    setWrapStyle(wrapStyle) {
        if (!Object.values(WrapStyle).includes(wrapStyle)) {
            throw new Error('Invalid wrap style value');
        }
        this._data.wrapStyle = wrapStyle;
        return this;
    }
}

module.exports = Columns;