var _Field_query;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { buildEquals } from '../utils';
/**
 * 'Field' class is used to build a query with a field.
 * A Lucene Field is a key used to search for a specific value in a document.
 *
 * @export
 * @class Field
 */
export class Field {
    constructor(query) {
        this.query = query;
        _Field_query.set(this, '');
        __classPrivateFieldSet(this, _Field_query, this.query, "f");
    }
    /**
     * This method appends to the query a term that should be included in the search..
     *
     * Ex: myValue or "My value"
     *
     * @param {string} term - The term that should be included in the search.
     * @return {*}  {Equals} - An instance of Equals.
     * @memberof Field
     */
    equals(term) {
        return buildEquals(__classPrivateFieldGet(this, _Field_query, "f"), term);
    }
}
_Field_query = new WeakMap();
//# sourceMappingURL=Field.js.map