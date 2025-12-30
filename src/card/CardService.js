// classes
const Action = require('./classes/Action')
const ActionResponseBuilder = require('./classes/ActionResponseBuilder')
const AuthorizationAction = require('./classes/AuthorizationAction')
const ButtonSet = require('./classes/ButtonSet')
const CardAction = require('./classes/CardAction')
const CardBuilder = require('./classes/CardBuilder')
const CardHeader = require('./classes/CardHeader')
const CardSection = require('./classes/CardSection')
const FixedFooter = require('./classes/FixedFooter')
const IconImage = require('./classes/IconImage')
const Image = require('./classes/Image')
const ImageButton = require('./classes/ImageButton')
const KeyValue = require('./classes/KeyValue')
const Navigation = require('./classes/Navigation')
const Notification = require('./classes/Notification')
const OpenLink = require('./classes/OpenLink')
const LinkPreview = require('./classes/LinkPreview')
const SelectionInput = require('./classes/SelectionInput')
const Suggestions = require('./classes/Suggestions')
const Validation = require('./classes/Validation')
const TextButton = require('./classes/TextButton')
const TextInput = require('./classes/TextInput')
const TextParagraph = require('./classes/TextParagraph')
const UniversalActionResponseBuilder = require('./classes/UniversalActionResponseBuilder')
const Switch = require('./classes/Switch')
const DecoratedText = require('./classes/DecoratedText')
const MaterialIcon = require('./classes/IconImage')
const Grid = require('./classes/Grid')
const GridItem = require('./classes/GridItem')
const BorderStyle = require('./classes/BorderStyle')
// enums
const ComposeEmailType = require('./enums/ComposedEmailType')
const Icon = require('./enums/Icon')
const ImageStyle = require('./enums/ImageStyle')
const LoadIndicator = require('./enums/LoadIndicator')
const NotificationType = require('./enums/NotificationType')
const OnClose = require('./enums/OnClose')
const OpenAs = require('./enums/OpenAs')
const SelectionInputType = require('./enums/SelectionInputType')
const TextButtonStyle = require('./enums/TextButtonStyle')
const InputType = require('./enums/InputType');
const TextInputMode = require('./enums/TextInputMode');
const Visibility = require('./enums/Visibility');
const GridItemLayout = require('./enums/GridItemLayout');
const BorderType = require('./enums/BorderType');
class CardService {
  static newAction() {
    return new Action()
  }

  static newActionResponseBuilder() {
    return new ActionResponseBuilder()
  }

  static newAuthorizationAction() {
    return new AuthorizationAction()
  }

  static newButtonSet() {
    return new ButtonSet()
  }

  static newCardAction() {
    return new CardAction()
  }

  static newCardBuilder() {
    return new CardBuilder()
  }

  static newCardHeader() {
    return new CardHeader()
  }

  static newCardSection() {
    return new CardSection()
  }

  static newImage() {
    return new Image()
  }

  static newImageButton() {
    return new ImageButton()
  }

  static newIconImage() {
    return new IconImage()
  }

  static newKeyValue() {
    return new KeyValue()
  }

  static newNavigation() {
    return new Navigation()
  }

  static newNotification() {
    return new Notification()
  }

  static newOpenLink() {
    return new OpenLink()
  }

  static newSelectionInput() {
    return new SelectionInput()
  }

  static newSuggestions() {
    return new Suggestions()
  }

  static newTextButton() {
    return new TextButton()
  }

  static newTextInput() {
    return new TextInput()
  }

  static newTextParagraph() {
    return new TextParagraph()
  }

  static newUniversalActionResponseBuilder() {
    return new UniversalActionResponseBuilder()
  }

  static newFixedFooter() {
    return new FixedFooter()
  }

  static newDecoratedText() {
    return new DecoratedText()
  }

  static newSwitch() {
    return new Switch()
  }

  static newValidation() {
    return new Validation()
  }

  static newLinkPreview() {
    return new LinkPreview()
  }

  static newMaterialIcon() {
    return new MaterialIcon()
  }

  static newGrid() {
    return new Grid()
  }

  static newGridItem() {
    return new GridItem()
  }

  static newBorderStyle() {
    return new BorderStyle()
  }

  static get ComposeEmailType() {
    return ComposeEmailType
  }

  static get Icon() {
    return Icon
  }

  static get ImageStyle() {
    return ImageStyle
  }

  static get LoadIndicator() {
    return LoadIndicator
  }

  static get NotificationType() {
    return NotificationType
  }

  static get OnClose() {
    return OnClose
  }

  static get OpenAs() {
    return OpenAs
  }

  static get SelectionInputType() {
    return SelectionInputType
  }

  static get TextButtonStyle() {
    return TextButtonStyle
  }

  static get InputType() {
    return InputType;
  }

  static get TextInputMode() {
    return TextInputMode;
  }

  static get Visibility() {
    return Visibility;
  }

  static get GridItemLayout() {
    return GridItemLayout;
  }

  static get BorderType() {
    return BorderType;
  }
}

module.exports = CardService
