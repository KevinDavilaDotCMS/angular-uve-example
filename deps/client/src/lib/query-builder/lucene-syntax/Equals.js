var _Equals_query;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { OPERAND, buildExcludeField, buildField, buildNotOperand, buildOperand, buildRawEquals, sanitizeQuery } from '../utils';
/**
 * 'Equal' Is a Typescript class that provides the ability to use terms in the lucene query string.
 * A term is a value used to search for a specific value in a document. It can be a word or a phrase.
 *
 * Ex: myValue or "My Value"
 *
 * @export
 * @class Equal
 */
export class Equals {
    constructor(query) {
        this.query = query;
        _Equals_query.set(this, '');
        __classPrivateFieldSet(this, _Equals_query, this.query, "f");
    }
    /**
     * This method appends to the query a term that should be excluded in the search.
     *
     * Ex: "-myValue"
     *
     * @param {string} field - The field that should be excluded in the search.
     * @return {*}  {Field} - An instance of a Lucene Field. A field is a key used to search for a specific value in a document.
     * @memberof Equal
     */
    excludeField(field) {
        return buildExcludeField(__classPrivateFieldGet(this, _Equals_query, "f"), field);
    }
    /**
     * This method appends to the query a field that should be included in the search.
     *
     * Ex: "+myField:"
     *
     * @param {string} field - The field that should be included in the search.
     * @return {*}  {Field} - An instance of a Lucene Field. A field is a key used to search for a specific value in a document.
     * @memberof Equal
     */
    field(field) {
        return buildField(__classPrivateFieldGet(this, _Equals_query, "f"), field);
    }
    /**
     * This method appends to the query an operand to use logic operators in the query.
     *
     * Ex: "OR"
     *
     * @return {*}  {Operand} - An instance of a Lucene Operand. An operand is a logical operator used to combine terms or phrases in a query.
     * @memberof Equal
     */
    or() {
        return buildOperand(__classPrivateFieldGet(this, _Equals_query, "f"), OPERAND.OR);
    }
    /**
     * This method appends to the query an operand to use logic operators in the query.
     *
     * Ex: "AND"
     *
     * @return {*}  {Operand} - An instance of a Lucene Operand. An operand is a logical operator used to combine terms or phrases in a query.
     * @memberof Equal
     */
    and() {
        return buildOperand(__classPrivateFieldGet(this, _Equals_query, "f"), OPERAND.AND);
    }
    /**
     * This method appends to the query an operand to use logic operators in the query.
     *
     * Ex: "NOT"
     *
     * @return {*}  {NotOperand} - An instance of a Lucene Not Operand. A not operand is a logical operator used to exclude terms or phrases in a query.
     * @memberof Equal
     */
    not() {
        return buildNotOperand(__classPrivateFieldGet(this, _Equals_query, "f"));
    }
    /**
     * This method allows to pass a raw query string to the query builder.
     * This raw query should end in a Lucene Equal.
     * This method is useful when you want to append a complex query or an already written query to the query builder.
     *
     * Ex: "+myField: value AND (someOtherValue OR anotherValue)"
     *
     * @param {string} query - A raw query string.
     * @return {*}  {Equal} - An instance of a Lucene Equal. A term is a value used to search for a specific value in a document.
     * @memberof QueryBuilder
     */
    raw(query) {
        return buildRawEquals(__classPrivateFieldGet(this, _Equals_query, "f"), query);
    }
    /**
     * This method returns the final query string.
     *
     * @return {*}  {string} - The final query string.
     * @memberof Equal
     */
    build() {
        return sanitizeQuery(__classPrivateFieldGet(this, _Equals_query, "f"));
    }
}
_Equals_query = new WeakMap();
//# sourceMappingURL=Equals.js.map