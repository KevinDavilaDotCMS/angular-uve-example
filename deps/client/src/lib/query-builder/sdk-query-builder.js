var _QueryBuilder_query;
import { __classPrivateFieldGet } from "tslib";
import { buildExcludeField, buildField, buildRawEquals } from './utils';
/**
 * 'QueryBuilder' Is a Typescript class that provides the ability to build a query string using the Lucene syntax in a more readable way.
 *
 * @export
 * @class QueryBuilder
 */
export class QueryBuilder {
    constructor() {
        _QueryBuilder_query.set(this, '');
    }
    /**
     * This method appends to the query a field that should be included in the search.
     *
     * Ex: "+myField:"
     *
     * @param {string} field - The field that should be included in the search.
     * @return {*}  {Field} -  An instance of a Lucene Field. A field is a key used to search for a specific value in a document.
     * @memberof QueryBuilder
     */
    field(field) {
        return buildField(__classPrivateFieldGet(this, _QueryBuilder_query, "f"), field);
    }
    /**
     * This method appends to the query a field that should be excluded from the search.
     *
     * Ex: "-myField:"
     *
     * @param {string} field - The field that should be excluded from the search.
     * @return {*}  {Field} -  An instance of a Lucene Exclude Field. An exclude field is a key used to exclude for a specific value in a document.
     * @memberof QueryBuilder
     */
    excludeField(field) {
        return buildExcludeField(__classPrivateFieldGet(this, _QueryBuilder_query, "f"), field);
    }
    /**
     * This method allows to pass a raw query string to the query builder.
     * This raw query should end in Equals.
     * This method is useful when you want to append a complex query or an already written query to the query builder.
     *
     * Ex: "+myField: value AND (someOtherValue OR anotherValue)"
     *
     * @param {string} query - A raw query string.
     * @return {*}  {Equals} - An instance of Equals. A term is a value used to search for a specific value in a document.
     * @memberof QueryBuilder
     */
    raw(query) {
        return buildRawEquals(__classPrivateFieldGet(this, _QueryBuilder_query, "f"), query);
    }
}
_QueryBuilder_query = new WeakMap();
//# sourceMappingURL=sdk-query-builder.js.map