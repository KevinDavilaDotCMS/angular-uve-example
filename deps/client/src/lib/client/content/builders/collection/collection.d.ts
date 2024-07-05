import { ClientOptions } from '../../../sdk-js-client';
import { GetCollectionResponse, BuildQuery, SortBy, GetCollectionError, OnFullfilled, OnRejected } from '../../shared/types';
/**
 * Creates a Builder to filter and fetch content from the content API for an specific content type
 *
 * @export
 * @class CollectionBuilder
 * @template T Represents the type of the content type to fetch. Defaults to unknown
 */
export declare class CollectionBuilder<T = unknown> {
    #private;
    constructor(requestOptions: ClientOptions, serverUrl: string, contentType: string);
    /**
     * This method returns the sort query in this format: field order, field order, ...
     *
     * @readonly
     * @private
     * @memberof CollectionBuilder
     */
    private get sort();
    private get offset();
    private get url();
    /**
     * This method returns the current query built
     *
     * @readonly
     * @private
     * @memberof CollectionBuilder
     */
    private get currentQuery();
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
    language(languageId: number | string): this;
    /**
     * The retrieved content will have the rendered HTML
     *
     * @return {CollectionBuilder} CollectionBuilder - A CollectionBuilder instance
     * @memberof CollectionBuilder
     */
    render(): this;
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
    sortBy(sortBy: SortBy[]): this;
    /**
     * Takes a number that represents the max amount of content to fetch
     *
     * `limit` is set to 10 by default
     *
     * @param {number} limit The max amount of content to fetch
     * @return {CollectionBuilder} CollectionBuilder - A CollectionBuilder instance
     * @memberof CollectionBuilder
     */
    limit(limit: number): this;
    /**
     * Takes a number that represents the page to fetch
     *
     * @param {number} page The page to fetch
     * @return {CollectionBuilder} CollectionBuilder - A CollectionBuilder instance
     * @memberof CollectionBuilder
     */
    page(page: number): this;
    /**
     * Takes a string that represents a {@link https://www.dotcms.com/docs/latest/content-search-syntax#Lucene Lucene Query} that is used to filter the content to fetch.
     *
     * The string is not validated, so be cautious when using it.
     *
     * @param {string} query A {@link https://www.dotcms.com/docs/latest/content-search-syntax#Lucene Lucene Query} String
     * @return {CollectionBuilder} CollectionBuilder - A CollectionBuilder instance
     * @memberof CollectionBuilder
     */
    query(query: string): this;
    /**
     * Takes a function that recieves a QueryBuilder to buid a query for content filtering.
     * @example
     *```javascript
     * // This will filter the content by title equals 'Hello World' or 'Hello World 2'
     * client.content.getCollection("Activity").query((queryBuilder) =>
     *     queryBuilder.field('title').equals('Hello World').or().equals('Hello World 2')
     * );
     *```
     * @param {BuildQuery} buildQuery A function that receives a QueryBuilder instance and returns a valid query
     * @return {CollectionBuilder} CollectionBuilder - A CollectionBuilder instance
     * @memberof CollectionBuilder
     */
    query(buildQuery: BuildQuery): this;
    /**
     * The retrieved content will be draft content
     *
     * The default value is false to fetch content that is not on draft
     *
     * @return {CollectionBuilder} CollectionBuilder - A CollectionBuilder instance
     * @memberof CollectionBuilder
     */
    draft(): this;
    /**
     * Takes a string that represents a variant ID of content created with the {@link https://www.dotcms.com/docs/latest/experiments-and-a-b-testing A/B Testing} feature
     *
     * `variantId` defaults to "DEFAULT" to fetch content that is not part of an A/B test
     *
     * @param {string} variantId A string that represents a variant ID
     * @return {CollectionBuilder} CollectionBuilder - A CollectionBuilder instance
     * @memberof CollectionBuilder
     */
    variant(variantId: string): this;
    /**
     * Takes a number that represents the depth of the relationships of a content
     *
     * The `depth` is set to 0 by default and the max supported value is 3.
     *
     * @param {number} depth The depth of the relationships of a content
     * @return {CollectionBuilder} CollectionBuilder - A CollectionBuilder instance
     * @memberof CollectionBuilder
     */
    depth(depth: number): this;
    /**
     * Executes the fetch and returns a promise that resolves to the content or rejects to an error
     *
     * @param {OnFullfilled} [onfulfilled] A callback that is called when the fetch is successful
     * @param {OnRejected} [onrejected] A callback that is called when the fetch fails
     * @return {Promise<GetCollectionResponse<T> | GetCollectionError>} A promise that resolves to the content or rejects to an error
     * @memberof CollectionBuilder
     */
    then(onfulfilled?: OnFullfilled<T>, onrejected?: OnRejected): Promise<GetCollectionResponse<T> | GetCollectionError>;
    private formatResponse;
    private fetch;
}
