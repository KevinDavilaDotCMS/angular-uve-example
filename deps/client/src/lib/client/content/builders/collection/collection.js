var _CollectionBuilder_page, _CollectionBuilder_limit, _CollectionBuilder_depth, _CollectionBuilder_render, _CollectionBuilder_sortBy, _CollectionBuilder_contentType, _CollectionBuilder_defaultQuery, _CollectionBuilder_query, _CollectionBuilder_rawQuery, _CollectionBuilder_languageId, _CollectionBuilder_draft, _CollectionBuilder_serverUrl, _CollectionBuilder_requestOptions;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { Equals } from '../../../../query-builder/lucene-syntax';
import { QueryBuilder } from '../../../../query-builder/sdk-query-builder';
import { CONTENT_API_URL } from '../../shared/const';
import { sanitizeQueryForContentType } from '../../shared/utils';
/**
 * Creates a Builder to filter and fetch content from the content API for an specific content type
 *
 * @export
 * @class CollectionBuilder
 * @template T Represents the type of the content type to fetch. Defaults to unknown
 */
export class CollectionBuilder {
    constructor(requestOptions, serverUrl, contentType) {
        _CollectionBuilder_page.set(this, 1);
        _CollectionBuilder_limit.set(this, 10);
        _CollectionBuilder_depth.set(this, 0);
        _CollectionBuilder_render.set(this, false);
        _CollectionBuilder_sortBy.set(this, void 0);
        _CollectionBuilder_contentType.set(this, void 0);
        _CollectionBuilder_defaultQuery.set(this, void 0);
        _CollectionBuilder_query.set(this, void 0);
        _CollectionBuilder_rawQuery.set(this, void 0);
        _CollectionBuilder_languageId.set(this, 1);
        _CollectionBuilder_draft.set(this, false);
        _CollectionBuilder_serverUrl.set(this, void 0);
        _CollectionBuilder_requestOptions.set(this, void 0);
        __classPrivateFieldSet(this, _CollectionBuilder_requestOptions, requestOptions, "f");
        __classPrivateFieldSet(this, _CollectionBuilder_serverUrl, serverUrl, "f");
        __classPrivateFieldSet(this, _CollectionBuilder_contentType, contentType, "f");
        // We need to build the default query with the contentType field
        __classPrivateFieldSet(this, _CollectionBuilder_defaultQuery, new QueryBuilder().field('contentType').equals(__classPrivateFieldGet(this, _CollectionBuilder_contentType, "f")), "f");
    }
    /**
     * This method returns the sort query in this format: field order, field order, ...
     *
     * @readonly
     * @private
     * @memberof CollectionBuilder
     */
    get sort() {
        return __classPrivateFieldGet(this, _CollectionBuilder_sortBy, "f")?.map((sort) => `${sort.field} ${sort.order}`).join(',');
    }
    get offset() {
        // This could end in an empty response
        return __classPrivateFieldGet(this, _CollectionBuilder_limit, "f") * (__classPrivateFieldGet(this, _CollectionBuilder_page, "f") - 1);
    }
    get url() {
        return `${__classPrivateFieldGet(this, _CollectionBuilder_serverUrl, "f")}${CONTENT_API_URL}`;
    }
    /**
     * This method returns the current query built
     *
     * @readonly
     * @private
     * @memberof CollectionBuilder
     */
    get currentQuery() {
        return __classPrivateFieldGet(this, _CollectionBuilder_query, "f") ?? __classPrivateFieldGet(this, _CollectionBuilder_defaultQuery, "f");
    }
    /**
     * Takes a language id and filters the content by that language.
     *
     * The language id defaults to 1
     *
     *
     * @param {number | string} languageId The language id to filter the content by
     * @return {CollectionBuilder} CollectionBuilder - A CollectionBuilder instance
     * @memberof CollectionBuilder
     */
    language(languageId) {
        __classPrivateFieldSet(this, _CollectionBuilder_languageId, languageId, "f");
        return this;
    }
    /**
     * The retrieved content will have the rendered HTML
     *
     * @return {CollectionBuilder} CollectionBuilder - A CollectionBuilder instance
     * @memberof CollectionBuilder
     */
    render() {
        __classPrivateFieldSet(this, _CollectionBuilder_render, true, "f");
        return this;
    }
    /**
     * Takes an array of constrains to sort the content by field an specific order
     *
     * @example
     * ```javascript
     * // This will sort the content by title in ascending order
     * // and by modDate in descending order
     *  const sortBy = [{ field: 'title', order: 'asc' }, { field: 'modDate', order: 'desc' }]
     *
     *  client.content.getCollection("Blog").sortBy(sortBy)
     *```
     *
     * @param {SortBy[]} sortBy Array of constrains to sort the content by
     * @return {CollectionBuilder} CollectionBuilder - A CollectionBuilder instance
     * @memberof CollectionBuilder
     */
    sortBy(sortBy) {
        __classPrivateFieldSet(this, _CollectionBuilder_sortBy, sortBy, "f");
        return this;
    }
    /**
     * Takes a number that represents the max amount of content to fetch
     *
     * `limit` is set to 10 by default
     *
     * @param {number} limit The max amount of content to fetch
     * @return {CollectionBuilder} CollectionBuilder - A CollectionBuilder instance
     * @memberof CollectionBuilder
     */
    limit(limit) {
        __classPrivateFieldSet(this, _CollectionBuilder_limit, limit, "f");
        return this;
    }
    /**
     * Takes a number that represents the page to fetch
     *
     * @param {number} page The page to fetch
     * @return {CollectionBuilder} CollectionBuilder - A CollectionBuilder instance
     * @memberof CollectionBuilder
     */
    page(page) {
        __classPrivateFieldSet(this, _CollectionBuilder_page, page, "f");
        return this;
    }
    query(arg) {
        if (typeof arg === 'string') {
            __classPrivateFieldSet(this, _CollectionBuilder_rawQuery, arg, "f");
            return this;
        }
        if (typeof arg !== 'function') {
            throw new Error(`Parameter for query method should be a buildQuery function or a string.\nExample:\nclient.content.getCollection('Activity').query((queryBuilder) => queryBuilder.field('title').equals('Hello World'))\nor\nclient.content.getCollection('Activity').query('+Activity.title:"Hello World"') \nSee documentation for more information.`);
        }
        const builtQuery = arg(new QueryBuilder());
        // This can be use in Javascript so we cannot rely on the type checking
        if (builtQuery instanceof Equals) {
            __classPrivateFieldSet(this, _CollectionBuilder_query, builtQuery.raw(this.currentQuery.build()), "f");
        }
        else {
            throw new Error('Provided query is not valid. A query should end in an equals method call.\nExample:\n(queryBuilder) => queryBuilder.field("title").equals("Hello World")\nSee documentation for more information.');
        }
        return this;
    }
    /**
     * The retrieved content will be draft content
     *
     * The default value is false to fetch content that is not on draft
     *
     * @return {CollectionBuilder} CollectionBuilder - A CollectionBuilder instance
     * @memberof CollectionBuilder
     */
    draft() {
        __classPrivateFieldSet(this, _CollectionBuilder_draft, true, "f");
        return this;
    }
    /**
     * Takes a string that represents a variant ID of content created with the {@link https://www.dotcms.com/docs/latest/experiments-and-a-b-testing A/B Testing} feature
     *
     * `variantId` defaults to "DEFAULT" to fetch content that is not part of an A/B test
     *
     * @param {string} variantId A string that represents a variant ID
     * @return {CollectionBuilder} CollectionBuilder - A CollectionBuilder instance
     * @memberof CollectionBuilder
     */
    variant(variantId) {
        __classPrivateFieldSet(this, _CollectionBuilder_query, this.currentQuery.field('variant').equals(variantId), "f");
        return this;
    }
    /**
     * Takes a number that represents the depth of the relationships of a content
     *
     * The `depth` is set to 0 by default and the max supported value is 3.
     *
     * @param {number} depth The depth of the relationships of a content
     * @return {CollectionBuilder} CollectionBuilder - A CollectionBuilder instance
     * @memberof CollectionBuilder
     */
    depth(depth) {
        if (depth < 0 || depth > 3) {
            throw new Error('Depth value must be between 0 and 3');
        }
        __classPrivateFieldSet(this, _CollectionBuilder_depth, depth, "f");
        return this;
    }
    /**
     * Executes the fetch and returns a promise that resolves to the content or rejects to an error
     *
     * @param {OnFullfilled} [onfulfilled] A callback that is called when the fetch is successful
     * @param {OnRejected} [onrejected] A callback that is called when the fetch fails
     * @return {Promise<GetCollectionResponse<T> | GetCollectionError>} A promise that resolves to the content or rejects to an error
     * @memberof CollectionBuilder
     */
    then(onfulfilled, onrejected) {
        return this.fetch().then(async (response) => {
            const data = await response.json();
            if (response.ok) {
                const formattedResponse = this.formatResponse(data);
                const finalResponse = typeof onfulfilled === 'function'
                    ? onfulfilled(formattedResponse)
                    : formattedResponse;
                return finalResponse;
            }
            else {
                // Fetch does not reject on server errors, so we only have to bubble up the error as a normal fetch
                return {
                    status: response.status,
                    ...data
                };
            }
        }, onrejected);
    }
    // Formats the response to the desired format
    formatResponse(data) {
        const contentlets = data.entity.jsonObjectView.contentlets;
        const total = data.entity.resultsSize;
        const mappedResponse = {
            contentlets,
            total,
            page: __classPrivateFieldGet(this, _CollectionBuilder_page, "f"),
            size: contentlets.length
        };
        return __classPrivateFieldGet(this, _CollectionBuilder_sortBy, "f")
            ? {
                ...mappedResponse,
                sortedBy: __classPrivateFieldGet(this, _CollectionBuilder_sortBy, "f")
            }
            : mappedResponse;
    }
    // Calls the content API to fetch the content
    fetch() {
        const finalQuery = this.currentQuery
            .field('languageId')
            .equals(__classPrivateFieldGet(this, _CollectionBuilder_languageId, "f").toString())
            .field('live')
            .equals((!__classPrivateFieldGet(this, _CollectionBuilder_draft, "f")).toString())
            .build();
        const sanitizedQuery = sanitizeQueryForContentType(finalQuery, __classPrivateFieldGet(this, _CollectionBuilder_contentType, "f"));
        const query = __classPrivateFieldGet(this, _CollectionBuilder_rawQuery, "f") ? `${sanitizedQuery} ${__classPrivateFieldGet(this, _CollectionBuilder_rawQuery, "f")}` : sanitizedQuery;
        return fetch(this.url, {
            ...__classPrivateFieldGet(this, _CollectionBuilder_requestOptions, "f"),
            method: 'POST',
            headers: {
                ...__classPrivateFieldGet(this, _CollectionBuilder_requestOptions, "f").headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query,
                render: __classPrivateFieldGet(this, _CollectionBuilder_render, "f"),
                sort: this.sort,
                limit: __classPrivateFieldGet(this, _CollectionBuilder_limit, "f"),
                offset: this.offset,
                depth: __classPrivateFieldGet(this, _CollectionBuilder_depth, "f")
                //userId: This exist but we currently don't use it
                //allCategoriesInfo: This exist but we currently don't use it
            })
        });
    }
}
_CollectionBuilder_page = new WeakMap(), _CollectionBuilder_limit = new WeakMap(), _CollectionBuilder_depth = new WeakMap(), _CollectionBuilder_render = new WeakMap(), _CollectionBuilder_sortBy = new WeakMap(), _CollectionBuilder_contentType = new WeakMap(), _CollectionBuilder_defaultQuery = new WeakMap(), _CollectionBuilder_query = new WeakMap(), _CollectionBuilder_rawQuery = new WeakMap(), _CollectionBuilder_languageId = new WeakMap(), _CollectionBuilder_draft = new WeakMap(), _CollectionBuilder_serverUrl = new WeakMap(), _CollectionBuilder_requestOptions = new WeakMap();
//# sourceMappingURL=collection.js.map