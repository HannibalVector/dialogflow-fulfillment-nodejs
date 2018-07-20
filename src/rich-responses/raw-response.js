const {
  RichResponse,
} = require('./rich-response');

/**
 * Class representing a raw response
 * @extends RichResponse
 */
class Raw extends RichResponse {
  /**
   * Constructor for Raw object
   *
   * @example
   * const googlePayloadJson = {
   *   expectUserResponse: true,
   *   isSsml: false,
   *   noInputPrompts: [],
   *   richResponse: {
   *     items: [{ simpleResponse: { textToSpeech: 'hello', displayText: 'hi' } }]
   *   },
   *   systemIntent: {
   *     intent: 'actions.intent.OPTION',
   *   }
   * }
   * const raw = new Raw({
   *   platform: "google",
   *   type: "custom_payload",
   *   payload: googlePayloadJson,
   * });
   *
   * @param {Object} payload raw payload to be added to messages array
   */
  constructor(payload) {
    super();
    if (!payload) {
      throw new Error('Payload can not be empty.');
    }

    this.payload = payload;
  }

  /**
   * Get the v1 response object for the raw response containing
   * any supported message object
   *
   * https://dialogflow.com/docs/reference/agent/message-objects
   *
   * @example
   * let rawResponse = new RawResponse({
   * "speech": "Text response",
   * "type": 0
   * });
   *
   * richResponse.getV1ResponseObject_()
   *
   * @return {Object} v1 response object
   * @private
   */
  getV1ResponseObject_() {
    return this.payload;
  }

  /**
   * Get the v2 response object for the raw response containing
   * any supported message object
   *
   * https://dialogflow.com/docs/reference/agent/message-objects
   *
   * @example
   * let rawResponse = new RawResponse({
   * "speech": "Text response",
   * "type": 0
   * });
   *
   * richResponse.getV2ResponseObject_()
   *
   * @return {Object} v2 response object
   * @private
   */
  getV2ResponseObject_() {
    return this.payload;
  }
}

module.exports = Raw;
