import { getPageDataInsideEditor, listenEditorMessages, listenHoveredContentlet, scrollHandler, subscriptions } from './listeners/listeners';
import { CUSTOMER_ACTIONS, postMessageToEditor } from './models/client.model';
/**
 *
 * Updates the navigation in the editor.
 * @param {string} pathname - The pathname to update the navigation with.
 * @memberof DotCMSPageEditor
 */
export function updateNavigation(pathname) {
    postMessageToEditor({
        action: CUSTOMER_ACTIONS.NAVIGATION_UPDATE,
        payload: {
            url: pathname === '/' ? 'index' : pathname?.replace('/', '')
        }
    });
}
/**
 * Checks if the code is running inside an editor.
 * @returns {boolean} Returns true if the code is running inside an editor, otherwise false.
 */
export function isInsideEditor() {
    if (typeof window === 'undefined') {
        return false;
    }
    return window.parent !== window;
}
/**
 * Initializes the DotCMS page editor.
 *
 * @param conf - Optional configuration for the editor.
 */
export function initEditor(config) {
    getPageDataInsideEditor(config.pathname);
    listenEditorMessages();
    listenHoveredContentlet();
    scrollHandler();
}
/**
 * Destroys the editor by removing event listeners and disconnecting observers.
 */
export function destroyEditor() {
    subscriptions.forEach((subscription) => {
        if (subscription.type === 'listener') {
            window.removeEventListener(subscription.event, subscription.callback);
        }
        if (subscription.type === 'observer') {
            subscription.observer.disconnect();
        }
    });
}
/**
 * Adds a class to empty contentlets.
 *
 * @export
 */
export function addClassToEmptyContentlets() {
    const contentlets = document.querySelectorAll('[data-dot-object="contentlet"]');
    contentlets.forEach((contentlet) => {
        if (contentlet.clientHeight) {
            return;
        }
        contentlet.classList.add('empty-contentlet');
    });
}
/**
 * Executes a callback when the editor fetches the page data from the UVE.
 *
 * @param {unknown} callback - The callback to execute when the page data is fetched.
 */
export function onFetchPageAssetFromUVE(callback) {
    const messageCallback = (event) => {
        if (event.data.name === 'SET_PAGE_DATA') {
            callback(event.data.payload);
        }
    };
    window.addEventListener('message', messageCallback);
    return () => {
        window.removeEventListener('message', messageCallback);
    };
}
//# sourceMappingURL=sdk-editor.js.map