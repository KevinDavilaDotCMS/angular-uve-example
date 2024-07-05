import { DotCMSPageEditorSubscription } from '../models/listeners.model';
declare global {
    interface Window {
        lastScrollYPosition: number;
    }
}
/**
 * Represents an array of DotCMSPageEditorSubscription objects.
 * Used to store the subscriptions for the editor and unsubscribe later.
 */
export declare const subscriptions: DotCMSPageEditorSubscription[];
/**
 * Listens for editor messages and performs corresding actions based on the received message.
 *
 * @private
 * @memberof DotCMSPageEditor
 */
export declare function listenEditorMessages(): void;
/**
 * Listens for pointer move events and extracts information about the hovered contentlet.
 *
 * @private
 * @memberof DotCMSPageEditor
 */
export declare function listenHoveredContentlet(): void;
/**
 * Attaches a scroll event listener to the window
 * and sends a message to the editor when the window is scrolled.
 *
 * @private
 * @memberof DotCMSPageEditor
 */
export declare function scrollHandler(): void;
/**
 * Restores the scroll position of the window when an iframe is loaded.
 * Only used in VTL Pages.
 * @export
 */
export declare function preserveScrollOnIframe(): void;
/**
 * Sends a message to the editor to get the page data.
 * @param {string} pathname - The pathname of the page.
 * @private
 * @memberof DotCMSPageEditor
 */
export declare function getPageDataInsideEditor(pathname: string): void;
