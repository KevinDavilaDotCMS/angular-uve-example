var _Operand_query;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { buildExcludeField, buildField, buildEquals } from '../utils';
/**
 * 'Operand' Is a Typescript class that provides the ability to use operands in the lucene query string.}
 * An operand is a logical operator used to join two or more conditions in a query.
 *
 * @export
 * @class Operand
 */
export class Operand {
    constructor(query) {
        this.query = query;
        _Operand_query.set(this, '');
        __classPrivateFieldSet(this, _Operand_query, this.query, "f");
    }
    /**
     * This method appends to the query a term that should be excluded in the search.
     *
     * Ex: "-myValue"
     *
     * @param {string} field - The field that should be excluded in the search.
     * @return {*}  {Field} - An instance of a Lucene Field. A field is a key used to search for a specific value in a document.
     * @memberof Operand
     */
    excludeField(field) {
        return buildExcludeField(__classPrivateFieldGet(this, _Operand_query, "f"), field);
    }
    /**
     * This method appends to the query a field that should be included in the search.
     *
     * Ex: "+myField:"
     *
     * @param {string} field - The field that should be included in the search.
     * @return {*}  {Field} -  An instance of a Lucene Field. A field is a key used to search for a specific value in a document.
     * @memberof Operand
     */
    field(field) {
        return buildField(__classPrivateFieldGet(this, _Operand_query, "f"), field);
    }
    /**
     * This method appends to the query a term that should be included in the search.
     *
     * Ex: myValue or "My value"
     *
     * @param {string} term - The term that should be included in the search.
     * @return {*}  {Equals} - An instance of Equals.
     * @memberof Operand
     */
    equals(term) {
        return buildEquals(__classPrivateFieldGet(this, _Operand_query, "f"), term);
    }
}
_Operand_query = new WeakMap();
//# sourceMappingURL=Operand.js.map