import { Equals } from './Equals';
import { Field } from './Field';
/**
 * 'Operand' Is a Typescript class that provides the ability to use operands in the lucene query string.}
 * An operand is a logical operator used to join two or more conditions in a query.
 *
 * @export
 * @class Operand
 */
export declare class Operand {
    #private;
    private query;
    constructor(query: string);
    /**
     * This method appends to the query a term that should be excluded in the search.
     *
     * Ex: "-myValue"
     *
     * @param {string} field - The field that should be excluded in the search.
     * @return {*}  {Field} - An instance of a Lucene Field. A field is a key used to search for a specific value in a document.
     * @memberof Operand
     */
    excludeField(field: string): Field;
    /**
     * This method appends to the query a field that should be included in the search.
     *
     * Ex: "+myField:"
     *
     * @param {string} field - The field that should be included in the search.
     * @return {*}  {Field} -  An instance of a Lucene Field. A field is a key used to search for a specific value in a document.
     * @memberof Operand
     */
    field(field: string): Field;
    /**
     * This method appends to the query a term that should be included in the search.
     *
     * Ex: myValue or "My value"
     *
     * @param {string} term - The term that should be included in the search.
     * @return {*}  {Equals} - An instance of Equals.
     * @memberof Operand
     */
    equals(term: string): Equals;
}
