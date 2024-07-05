var _NotOperand_query;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { buildEquals } from '../utils';
/**
 * 'NotOperand' Is a Typescript class that provides the ability to use the NOT operand in the lucene query string.
 *
 * @export
 * @class NotOperand
 */
export class NotOperand {
    constructor(query) {
        this.query = query;
        _NotOperand_query.set(this, '');
        __classPrivateFieldSet(this, _NotOperand_query, this.query, "f");
    }
    /**
     * This method appends to the query a term that should be included in the search.
     *
     * Ex: myValue or "My value"
     *
     * @param {string} term - The term that should be included in the search.
     * @return {*}  {Equals} - An instance of Equals.
     * @memberof NotOperand
     */
    equals(term) {
        return buildEquals(__classPrivateFieldGet(this, _NotOperand_query, "f"), term);
    }
}
_NotOperand_query = new WeakMap();
//# sourceMappingURL=NotOperand.js.map