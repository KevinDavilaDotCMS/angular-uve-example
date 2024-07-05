/**
 * Actions send to the dotcms editor
 *
 * @export
 * @enum {number}
 */
export var CUSTOMER_ACTIONS;
(function (CUSTOMER_ACTIONS) {
    /**
     * Tell the dotcms editor that page change
     */
    CUSTOMER_ACTIONS["NAVIGATION_UPDATE"] = "set-url";
    /**
     * Send the element position of the rows, columnsm containers and contentlets
     */
    CUSTOMER_ACTIONS["SET_BOUNDS"] = "set-bounds";
    /**
     * Send the information of the hovered contentlet
     */
    CUSTOMER_ACTIONS["SET_CONTENTLET"] = "set-contentlet";
    /**
     * Tell the editor that the page is being scrolled
     */
    CUSTOMER_ACTIONS["IFRAME_SCROLL"] = "scroll";
    /**
     * Tell the editor that the page has stopped scrolling
     */
    CUSTOMER_ACTIONS["IFRAME_SCROLL_END"] = "scroll-end";
    /**
     * Ping the editor to see if the page is inside the editor
     */
    CUSTOMER_ACTIONS["PING_EDITOR"] = "ping-editor";
    /**
     * Tell the editor to init the inline editing editor.
     */
    CUSTOMER_ACTIONS["INIT_INLINE_EDITING"] = "init-inline-editing";
    /**
     * Tell the editor to open the Copy-contentlet dialog
     * To copy a content and then edit it inline.
     */
    CUSTOMER_ACTIONS["COPY_CONTENTLET_INLINE_EDITING"] = "copy-contentlet-inline-editing";
    /**
     * Tell the editor to save inline edited contentlet
     */
    CUSTOMER_ACTIONS["UPDATE_CONTENTLET_INLINE_EDITING"] = "update-contentlet-inline-editing";
    /**
     * Tell the editor to trigger a menu reorder
     */
    CUSTOMER_ACTIONS["REORDER_MENU"] = "reorder-menu";
    /**
     * Tell the editor to send the page info to iframe
     */
    CUSTOMER_ACTIONS["GET_PAGE_DATA"] = "get-page-data";
    CUSTOMER_ACTIONS["NOOP"] = "noop";
})(CUSTOMER_ACTIONS || (CUSTOMER_ACTIONS = {}));
/**
 * Post message to dotcms page editor
 *
 * @export
 * @template T
 * @param {PostMessageProps<T>} message
 */
export function postMessageToEditor(message) {
    window.parent.postMessage(message, '*');
}
//# sourceMappingURL=client.model.js.map