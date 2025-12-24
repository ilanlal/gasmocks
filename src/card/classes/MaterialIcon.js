const BaseClass = require('../../helpers/BaseClass');

class MaterialIcon extends BaseClass {
    setName(name) {
        if (typeof name !== 'string') {
            throw new Error('Icon name must be a string');
        }
        this._data.name = name;
        return this;
    }

    setFill(fill) {
        this._data.fill = fill;
        return this;
    }

    setWeight(weight) {
        this._data.weight = weight;
        return this;
    }

    setGrade(grade) {
        this._data.grade = grade;
        return this;
    }
}

module.exports = MaterialIcon;