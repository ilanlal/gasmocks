const Widget = require('./Widget');
const Visibility = require('../enums/Visibility');

class Divider extends Widget {
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
}

module.exports = Divider;