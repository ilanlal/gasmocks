const BaseClass = require('../../helpers/BaseClass');

class IconImage extends BaseClass {
    setAltText(altText) {
        if (typeof altText !== 'string') {
            throw new Error('Alt text must be a string');;
        }
        this._data.altText = altText;
        return this;
    }

    setIcon(icon) {
        this._data.icon = icon;
        return this;
    }

    setIconUrl(url) {
        if (typeof url !== 'string') {
            throw new Error('Icon URL must be a string');
        }
        this._data.iconUrl = url;
        return this;
    }


    setImageCropType(cropType) {
        this._data.imageCropType = cropType;
        return this;
    }

    setMaterialIcon(icon) {
        this._data.materialIcon = icon;
        return this;
    }
}

module.exports = IconImage;
