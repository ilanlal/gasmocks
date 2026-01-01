const AuthorizationAction = require('./AuthorizationAction');
const OpenLink = require('./OpenLink');
const Action = require('./Action');
const Widget = require('./Widget');

class Button extends Widget {
  setAuthorizationAction(action) {
    if ((action instanceof AuthorizationAction) === false) {
      throw new Error('Invalid value passed for "setAuthorizationAction"');
    }

    this.set('onClick.action', action.getData());

    return this;
  }

  setOnClickAction(action) {
    if ((action instanceof Action) === false) {
      throw new Error('Invalid value passed for "setOnClickAction"');
    }

    this.set('onClick.action', action.getData());

    return this;
  }

  setOnClickOpenLinkAction(action) {
    if ((action instanceof Action) === false) {
      throw new Error('Invalid value passed for "setOnClickOpenLinkAction"');
    }
    this.set('onClick.action', action.getData());

    return this;
  }

  setOpenLink(openLink) {
    if ((openLink instanceof OpenLink) === false) {
      throw new Error('Invalid value passed for "setOpenLink"');
    }

    this.set('onClick.openLink', openLink.getData());

    return this;
  }
}

module.exports = Button;
