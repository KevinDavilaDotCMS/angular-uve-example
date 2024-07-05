/**
 * Actions received from the dotcms editor
 *
 * @export
 * @enum {number}
 */
export var NOTIFY_CUSTOMER;
(function (NOTIFY_CUSTOMER) {
    /**
     * Request to page to reload
     */
    NOTIFY_CUSTOMER["EMA_RELOAD_PAGE"] = "ema-reload-page";
    /**
     * Request the bounds for the elements
     */
    NOTIFY_CUSTOMER["EMA_REQUEST_BOUNDS"] = "ema-request-bounds";
    /**
     * Received pong from the editor
     */
    NOTIFY_CUSTOMER["EMA_EDITOR_PONG"] = "ema-editor-pong";
    /**
     * Received scroll event trigger from the editor
     */
    NOTIFY_CUSTOMER["EMA_SCROLL_INSIDE_IFRAME"] = "scroll-inside-iframe";
})(NOTIFY_CUSTOMER || (NOTIFY_CUSTOMER = {}));
//# sourceMappingURL=listeners.model.js.map