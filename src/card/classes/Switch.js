const BaseClass = require('../../helpers/BaseClass');
const Action = require('./Action');
/**
 * @see https://developers.google.com/apps-script/reference/card-service/switch
 */
class Switch extends BaseClass {
    setControlType(controlType) {
        this._data.controlType = controlType;
        return this;
    }

    setFieldName(name) {   
        this._data.fieldName = name;
        return this;
    }

    setOnChangeAction(action) {
        if ((action instanceof Action) === false) {
            throw new Error('OnChange action must be an instance of Action');
        }
        this._data.onChangeAction = action.getData();
        return this;
    }

    setSelected(selected) {
        if (typeof selected !== 'boolean') {
            throw new Error('Selected must be a boolean');
        }
        this._data.selected = selected;
        return this;
    }

    setValue(value) {
        this._data.value = value;
        return this;
    }
}

module.exports = Switch;
