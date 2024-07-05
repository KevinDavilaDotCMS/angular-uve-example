var _Content_requestOptions, _Content_serverUrl;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { CollectionBuilder } from './builders/collection/collection';
/**
 * Content classs exposes the content api methods
 *
 * @export
 * @class Content
 */
export class Content {
    constructor(requestOptions, serverUrl) {
        _Content_requestOptions.set(this, void 0);
        _Content_serverUrl.set(this, void 0);
        __classPrivateFieldSet(this, _Content_requestOptions, requestOptions, "f");
        __classPrivateFieldSet(this, _Content_serverUrl, serverUrl, "f");
    }
    /**
     * Takes a content type and returns a builder to filter and fetch the collection
     *
     * @example
     * ```javascript
     * // Using await and async
     * const collectionResponse = await client.content
     *     .getCollection('Blog')
     *     .limit(10)
     *     .page(2)
     *     .sortBy([{ field: 'title', order: 'asc' }])
     *     .query((queryBuilder) => queryBuilder.field('author').equals('John Doe'))
     *     .depth(1);
     * ```
     * @example
     * ```javascript
     * // Using then and catch
     * client.content
     *      .getCollection('Blog')
     *      .limit(10)
     *      .page(2)
     *      .sortBy([{ field: 'title', order: 'asc' }])
     *      .query((queryBuilder) => queryBuilder.field('author').equals('John Doe'))
     *      .depth(1)
     *      .then((response) => {
     *          console.log(response.contentlets);
     *      })
     *      .catch((error) => {
     *          console.error(error);
     *      });
     * ```
     * @example
     * ```typescript
     * // Using an specific type for your content
     *
     * type Blog = {
     *     summary: string;
     *     author: string;
     *     title: string;
     * };
     *
     * client.content
     *     .getCollection<Blog>('Blog')
     *     .limit(10)
     *     .page(2)
     *     .sortBy([{ field: 'title', order: 'asc' }])
     *     .query((queryBuilder) => queryBuilder.field('author').equals('John Doe'))
     *     .depth(1)
     *     .then((response) => {
     *         response.contentlets.forEach((blog) => {
     *             console.log(blog.title);
     *             console.log(blog.author);
     *             console.log(blog.summary);
     *         });
     *     })
     *     .catch((error) => {
     *         console.error(error);
     *     });
     * ```
     *
     * @param {string} contentType The content type to get the collection
     * @return {CollectionBuilder} CollectionBuilder to filter and fetch the collection
     * @template T Represents the type of the content type to fetch. Defaults to unknown
     * @memberof Content
     */
    getCollection(contentType) {
        return new CollectionBuilder(__classPrivateFieldGet(this, _Content_requestOptions, "f"), __classPrivateFieldGet(this, _Content_serverUrl, "f"), contentType);
    }
}
_Content_requestOptions = new WeakMap(), _Content_serverUrl = new WeakMap();
//# sourceMappingURL=content-api.js.map