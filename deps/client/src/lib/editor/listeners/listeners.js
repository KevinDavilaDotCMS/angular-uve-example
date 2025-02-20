import { CUSTOMER_ACTIONS, postMessageToEditor } from '../models/client.model';
import { NOTIFY_CUSTOMER } from '../models/listeners.model';
import { findVTLData, findDotElement, getClosestContainerData, getPageElementBound, scrollIsInBottom } from '../utils/editor.utils';
/**
 * Represents an array of DotCMSPageEditorSubscription objects.
 * Used to store the subscriptions for the editor and unsubscribe later.
 */
export const subscriptions = [];
/**
 * Sets the bounds of the containers in the editor.
 * Retrieves the containers from the DOM and sends their position data to the editor.
 * @private
 * @memberof DotCMSPageEditor
 */
function setBounds() {
    const containers = Array.from(document.querySelectorAll('[data-dot-object="container"]'));
    const positionData = getPageElementBound(containers);
    postMessageToEditor({
        action: CUSTOMER_ACTIONS.SET_BOUNDS,
        payload: positionData
    });
}
/**
 * Listens for editor messages and performs corresding actions based on the received message.
 *
 * @private
 * @memberof DotCMSPageEditor
 */
export function listenEditorMessages() {
    const messageCallback = (event) => {
        switch (event.data) {
            case NOTIFY_CUSTOMER.EMA_REQUEST_BOUNDS: {
                setBounds();
                break;
            }
        }
        if (event.data.name === NOTIFY_CUSTOMER.EMA_SCROLL_INSIDE_IFRAME) {
            const direction = event.data.direction;
            if ((window.scrollY === 0 && direction === 'up') ||
                (scrollIsInBottom() && direction === 'down')) {
                /**
                 * If the iframe scroll is in the top of bottom, we dont send anything.
                 * This to avoid the lost of scrollend event
                 **/
                return;
            }
            const scrollY = direction === 'up' ? -120 : 120;
            window.scrollBy({ left: 0, top: scrollY, behavior: 'smooth' });
        }
    };
    window.addEventListener('message', messageCallback);
    subscriptions.push({
        type: 'listener',
        event: 'message',
        callback: messageCallback
    });
}
/**
 * Listens for pointer move events and extracts information about the hovered contentlet.
 *
 * @private
 * @memberof DotCMSPageEditor
 */
export function listenHoveredContentlet() {
    const pointerMoveCallback = (event) => {
        const foundElement = findDotElement(event.target);
        if (!foundElement)
            return;
        const { x, y, width, height } = foundElement.getBoundingClientRect();
        const isContainer = foundElement.dataset?.['dotObject'] === 'container';
        const contentletForEmptyContainer = {
            identifier: 'TEMP_EMPTY_CONTENTLET',
            title: 'TEMP_EMPTY_CONTENTLET',
            contentType: 'TEMP_EMPTY_CONTENTLET_TYPE',
            inode: 'TEMPY_EMPTY_CONTENTLET_INODE',
            widgetTitle: 'TEMP_EMPTY_CONTENTLET',
            baseType: 'TEMP_EMPTY_CONTENTLET',
            onNumberOfPages: 1
        };
        const contentlet = {
            identifier: foundElement.dataset?.['dotIdentifier'],
            title: foundElement.dataset?.['dotTitle'],
            inode: foundElement.dataset?.['dotInode'],
            contentType: foundElement.dataset?.['dotType'],
            baseType: foundElement.dataset?.['dotBasetype'],
            widgetTitle: foundElement.dataset?.['dotWidgetTitle'],
            onNumberOfPages: foundElement.dataset?.['dotOnNumberOfPages']
        };
        const vtlFiles = findVTLData(foundElement);
        const contentletPayload = {
            container: 
            // Here extract dot-container from contentlet if is Headless
            // or search in parent container if is VTL
            foundElement.dataset?.['dotContainer']
                ? JSON.parse(foundElement.dataset?.['dotContainer'])
                : getClosestContainerData(foundElement),
            contentlet: isContainer ? contentletForEmptyContainer : contentlet,
            vtlFiles
        };
        postMessageToEditor({
            action: CUSTOMER_ACTIONS.SET_CONTENTLET,
            payload: {
                x,
                y,
                width,
                height,
                payload: contentletPayload
            }
        });
    };
    document.addEventListener('pointermove', pointerMoveCallback);
    subscriptions.push({
        type: 'listener',
        event: 'pointermove',
        callback: pointerMoveCallback
    });
}
/**
 * Attaches a scroll event listener to the window
 * and sends a message to the editor when the window is scrolled.
 *
 * @private
 * @memberof DotCMSPageEditor
 */
export function scrollHandler() {
    const scrollCallback = () => {
        postMessageToEditor({
            action: CUSTOMER_ACTIONS.IFRAME_SCROLL
        });
        window.lastScrollYPosition = window.scrollY;
    };
    const scrollEndCallback = () => {
        postMessageToEditor({
            action: CUSTOMER_ACTIONS.IFRAME_SCROLL_END
        });
    };
    window.addEventListener('scroll', scrollCallback);
    window.addEventListener('scrollend', scrollEndCallback);
    subscriptions.push({
        type: 'listener',
        event: 'scroll',
        callback: scrollEndCallback
    });
    subscriptions.push({
        type: 'listener',
        event: 'scroll',
        callback: scrollCallback
    });
}
/**
 * Restores the scroll position of the window when an iframe is loaded.
 * Only used in VTL Pages.
 * @export
 */
export function preserveScrollOnIframe() {
    const preserveScrollCallback = () => {
        window.scrollTo(0, window.lastScrollYPosition);
    };
    window.addEventListener('load', preserveScrollCallback);
    subscriptions.push({
        type: 'listener',
        event: 'scroll',
        callback: preserveScrollCallback
    });
}
/**
 * Sends a message to the editor to get the page data.
 * @param {string} pathname - The pathname of the page.
 * @private
 * @memberof DotCMSPageEditor
 */
export function getPageDataInsideEditor(pathname) {
    postMessageToEditor({
        action: CUSTOMER_ACTIONS.GET_PAGE_DATA,
        payload: {
            pathname
        }
    });
}
//# sourceMappingURL=listeners.js.map