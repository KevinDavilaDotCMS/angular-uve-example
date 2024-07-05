import { Equals } from './Equals';
/**
 * 'Field' class is used to build a query with a field.
 * A Lucene Field is a key used to search for a specific value in a document.
 *
 * @export
 * @class Field
 */
export declare class Field {
    #private;
    private query;
    constructor(query: string);
    /**
     * This method appends to the query a term that should be included in the search..
     *
     * Ex: myValue or "My value"
     *
     * @param {string} term - The term that should be included in the search.
     * @return {*}  {Equals} - An instance of Equals.
     * @memberof Field
     */
    equals(term: string): Equals;
}
