class BaseClass {
  constructor() {
    this._data = {}
  }

  // Obsolete
  // const set = require('lodash.set')
  // Simple implementation of lodash.set
  // Sets the value at path of object. If a portion of path doesn't exist, it's created.
  set(path, data) {
    // Should throw an exception: Invalid value passed for "setOpenLink"
    if (typeof path !== 'string') {
      throw new Error('Path must be a string');
    }
    const keys = path.split('.');
    let current = this._data;
    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        current[key] = data;
      } else {
        current[key] = current[key] || {};
      }
      current = current[key];
    })
    return this;
  }

  getData() {
    return this._data
  }
}

module.exports = BaseClass
