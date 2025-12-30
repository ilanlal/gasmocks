const BaseClass = require('../../helpers/BaseClass');
const GridItem = require('./GridItem');

class Grid extends BaseClass {
    addItem(gridItem) {
        if ((gridItem instanceof GridItem) === false) {
            throw new Error('Item must be an instance of GridItem');
        }
        this._data.items = this._data.items || [];
        this._data.items.push(gridItem.getData());
        return this;
    }
    setBorderStyle(borderStyle) {
        this._data.borderStyle = borderStyle;
        return this;
    }
    setId(id) {
        this._data.id = id;
        return this;
    }

    setNumColumns(numColumns) {
        this._data.numColumns = numColumns;
        return this;
    }

    setOnClickAction(action) {
        this._data.onClickAction = action.getData();
        return this;
    }

    setOnClickOpenLinkAction(action) {
        this._data.onClickOpenLinkAction = action.getData();
        return this;
    }

    setOpenLink(openLink) {
        this._data.openLink = openLink;
        return this;
    }

    setTitle(title) {
        this._data.title = title;
        return this;
    }

    setVisibility(visibility) {
        this._data.visibility = visibility;
        return this;
    }
}

module.exports = Grid;
