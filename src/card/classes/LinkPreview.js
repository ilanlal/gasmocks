const BaseClass = require('../../helpers/BaseClass');

class LinkPreview extends BaseClass {
    setPreviewCard(card) {
        this._data.previewCard = card.getData();
        return this;
    }

    setLinkPreviewTitle(title) {
        this._data.linkPreviewTitle = title;
        return this;
    }

    setTitle(title) {
        this._data.title = title;
        return this;
    }
}

module.exports = LinkPreview;